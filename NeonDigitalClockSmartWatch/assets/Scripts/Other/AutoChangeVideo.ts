const {ccclass, property} = cc._decorator;

@ccclass
export class AutoChangeVideo extends cc.Component {
    @property(cc.VideoPlayer)
    videoPlayer: cc.VideoPlayer | null = null;

    @property({
        type: [cc.Asset],
        tooltip: "List of videos to play"
    })
    videoList: cc.Asset[] = [];

    @property
    private maxRetries: number = 3;

    @property
    private retryDelay: number = 1;

    private retryCount: number = 0;
    private currentVideoIndex: number = 0;

    start() {
        this.initializeVideo();

        // Add reload event listener
        if (CC_JSB) return; // Skip for native platforms
        
        window.addEventListener('beforeunload', () => {
            // Save video state before reload
            cc.sys.localStorage.setItem('videoState', JSON.stringify({
                index: this.currentVideoIndex,
                time: this.videoPlayer?.currentTime || 0,
                timestamp: Date.now()
            }));
        });

        // Check and restore previous state
        this.checkPreviousState();

        // Listen for custom events
        cc.game.on('websiteLoaded', this.restartVideo, this);
        cc.game.on('websiteVisibilityChanged', this.onVisibilityChanged, this);
    }

    private onVisibilityChanged(event) {
        const isVisible = event.detail?.isVisible;
        if (isVisible) {
            this.checkAndRestartVideo();
        }
    }

    private checkPreviousState() {
        try {
            const savedState = cc.sys.localStorage.getItem('videoState');
            if (savedState) {
                const state = JSON.parse(savedState);
                if (Date.now() - state.timestamp < 3000) {
                    this.currentVideoIndex = state.index;
                    this.scheduleOnce(() => {
                        this.playCurrentVideo();
                        if (this.videoPlayer) {
                            this.videoPlayer.currentTime = state.time;
                        }
                    }, 0.5);
                }
                cc.sys.localStorage.removeItem('videoState');
            }
        } catch (error) {
            cc.error('Error restoring video state:', error);
        }
    }

    private initializeVideo() {
        if (!this.videoPlayer || this.videoList.length === 0) {
            cc.warn('Video player or video list not properly initialized');
            return;
        }

        // Remove existing listeners
        this.videoPlayer.node.off('completed', this.onVideoCompleted, this);
        this.videoPlayer.node.off('error', this.onVideoError, this);

        // Add listeners
        this.videoPlayer.node.on('completed', this.onVideoCompleted, this);
        this.videoPlayer.node.on('error', this.onVideoError, this);

        this.scheduleOnce(() => {
            this.playCurrentVideo();
        }, 0.1);
    }

    private playCurrentVideo() {
        if (!this.videoPlayer || !this.videoList.length) {
            cc.error('Video player or video list not initialized');
            return;
        }

        try {
            this.retryCount = 0;
            
            if (CC_JSB || !navigator?.onLine) {
                this.scheduleOnce(this.playCurrentVideo.bind(this), 1);
                return;
            }

            if (this.videoPlayer.isPlaying) {
                this.videoPlayer.stop();
            }

            // Ensure index is within bounds
            this.currentVideoIndex = this.currentVideoIndex % this.videoList.length;
            this.videoPlayer.remoteURL = this.videoList[this.currentVideoIndex].url;
            
            this.scheduleOnce(() => {
                if (this.videoPlayer && cc.isValid(this.videoPlayer)) {
                    this.videoPlayer.play();
                    this.schedule(this.checkVideoPlayback, 0.5, 5);
                }
            }, 0.3);

        } catch (error) {
            cc.error('Error playing video:', error);
            this.handlePlaybackFailure();
        }
    }

    private checkVideoPlayback() {
        if (this.videoPlayer && !this.videoPlayer.isPlaying) {
            this.handlePlaybackFailure();
        }
    }

    private handlePlaybackFailure() {
        if (this.retryCount < this.maxRetries) {
            cc.warn(`Retry attempt ${this.retryCount + 1} of ${this.maxRetries}`);
            this.retryCount++;
            
            this.scheduleOnce(() => {
                this.playCurrentVideo();
            }, this.retryDelay * this.retryCount);
        } else {
            cc.error('Max retries reached, moving to next video');
            this.retryCount = 0;
            this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoList.length;
            this.playCurrentVideo();
        }
    }

    private checkAndRestartVideo() {
        if (this.videoPlayer && (!this.videoPlayer.isPlaying || 
            this.videoPlayer.currentTime >= this.videoPlayer.getDuration())) {
            this.restartVideo();
        }
    }

    private onVideoCompleted() {
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoList.length;
        this.playCurrentVideo();
    }

    private onVideoError(event) {
        cc.error('Video playback error:', event);
        this.handlePlaybackFailure();
    }

    onDestroy() {
        if (this.videoPlayer?.node) {
            this.videoPlayer.node.off('completed', this.onVideoCompleted, this);
            this.videoPlayer.node.off('error', this.onVideoError, this);
        }
        cc.game.off('websiteLoaded', this.restartVideo, this);
        cc.game.off('websiteVisibilityChanged', this.onVisibilityChanged, this);
        this.unscheduleAllCallbacks();
    }

    public restartVideo() {
        this.currentVideoIndex = 0;
        this.retryCount = 0;
        this.initializeVideo();
    }
}

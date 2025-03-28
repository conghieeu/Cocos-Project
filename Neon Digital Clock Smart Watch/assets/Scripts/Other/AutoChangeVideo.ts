declare const cc: any;
const { _decorator, Component, Node, VideoPlayer } = cc;
const { ccclass, property } = _decorator;

@ccclass('AutoChangeVideo')
export class AutoChangeVideo extends Component {
    @property(VideoPlayer)
    videoPlayer: VideoPlayer | null = null;

    @property
    private maxRetries: number = 3;

    @property
    private retryDelay: number = 1;

    private retryCount: number = 0;
    private currentVideoIndex: number = 0;

    start() {
        this.initializeVideo();

        // Thêm listener cho reload event
        if (sys.isBrowser) {
            window.addEventListener('beforeunload', () => {
                // Lưu trạng thái video trước khi reload
                localStorage.setItem('videoState', JSON.stringify({
                    index: this.currentVideoIndex,
                    time: this.videoPlayer?.currentTime || 0,
                    timestamp: Date.now()
                }));
            });

            // Kiểm tra và khôi phục trạng thái sau khi load
            this.checkPreviousState();
        }

        // Lắng nghe sự kiện website loaded để reset video
        window.addEventListener('websiteLoaded', () => {
            this.restartVideo();
        });

        // Lắng nghe sự kiện visibility để xử lý khi tab được active lại
        window.addEventListener('websiteVisibilityChanged', (event: CustomEvent) => {
            const { isVisible } = event.detail;
            if (isVisible) {
                this.checkAndRestartVideo();
            }
        });
    }

    private checkPreviousState() {
        try {
            const savedState = localStorage.getItem('videoState');
            if (savedState) {
                const state = JSON.parse(savedState);
                // Chỉ khôi phục nếu thời gian reload < 3 giây
                if (Date.now() - state.timestamp < 3000) {
                    this.currentVideoIndex = state.index;
                    this.scheduleOnce(() => {
                        this.playCurrentVideo();
                        // Seek đến vị trí cũ
                        if (this.videoPlayer) {
                            this.videoPlayer.currentTime = state.time;
                        }
                    }, 0.5);
                }
                localStorage.removeItem('videoState');
            }
        } catch (error) {
            console.error('Error restoring video state:', error);
        }
    }

    private initializeVideo() {
        if (!this.videoPlayer || this.videoList.length === 0) {
            console.warn('Video player or video list not properly initialized');
            return;
        }

        // Cleanup existing listeners
        this.videoPlayer.node.off('completed', this.onVideoCompleted, this);
        this.videoPlayer.node.off('error', this.onVideoError, this);

        // Add listeners
        this.videoPlayer.node.on('completed', this.onVideoCompleted, this);
        this.videoPlayer.node.on('error', this.onVideoError, this);

        // Initial play with delay
        this.scheduleOnce(() => {
            this.playCurrentVideo();
        }, 0.1);
    }

    private playCurrentVideo() {
        if (!this.videoPlayer || !this.videoList.length) {
            console.error('Video player or video list not initialized');
            return;
        }

        try {
            this.retryCount = 0;
            
            if (!navigator?.onLine) {
                this.scheduleOnce(this.playCurrentVideo.bind(this), 1);
                return;
            }

            if (this.videoPlayer.isPlaying) {
                this.videoPlayer.stop();
            }

            this.videoPlayer.clip = this.videoList[this.currentVideoIndex];
            
            this.scheduleOnce(() => {
                if (this.videoPlayer) {
                    this.videoPlayer.play();
                    this.schedule(this.checkVideoPlayback, 0.5, 5);
                }
            }, 0.3);

        } catch (error) {
            console.error('Error playing video:', error);
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
            console.warn(`Retry attempt ${this.retryCount + 1} of ${this.maxRetries}`);
            this.retryCount++;
            
            // Retry with increasing delay
            this.scheduleOnce(() => {
                this.playCurrentVideo();
            }, this.retryDelay * this.retryCount);
        } else {
            console.error('Max retries reached, moving to next video');
            this.retryCount = 0;
            this.currentVideoIndex++;
            this.playCurrentVideo();
        }
    }

    private checkAndRestartVideo() {
        // Kiểm tra nếu video không phát hoặc bị đứng
        if (this.videoPlayer && (!this.videoPlayer.isPlaying || this.videoPlayer.currentTime === this.videoPlayer.duration)) {
            this.restartVideo();
        }
    }

    private onVideoCompleted() {
        this.currentVideoIndex++;
        this.playCurrentVideo();
    }

    private onVideoError(event) {
        console.error('Video playback error:', event);
        this.handlePlaybackFailure();
    }

    onDestroy() {
        if (this.videoPlayer?.node) {
            this.videoPlayer.node.off('completed', this.onVideoCompleted, this);
            this.videoPlayer.node.off('error', this.onVideoError, this);
        }
        this.unscheduleAllCallbacks();
    }

    // Public method to force restart video playback
    public restartVideo() {
        this.currentVideoIndex = 0;
        this.retryCount = 0;
        this.initializeVideo();
    }
}

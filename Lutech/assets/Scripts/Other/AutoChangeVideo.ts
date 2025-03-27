import { _decorator, Component, Node, VideoPlayer, VideoClip, sys, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutoChangeVideo')
export class AutoChangeVideo extends Component {
    @property({ type: [VideoClip], tooltip: "List of videos to play in sequence" })
    videoList: VideoClip[] = [];

    @property({ type: VideoPlayer })
    videoPlayer: VideoPlayer = null;

    private currentVideoIndex: number = 0;
    private retryCount: number = 0;
    private maxRetries: number = 3;
    @property({ type: CCFloat, tooltip: "Delay between retries (seconds)" })
    private retryDelay: number = 1.0;

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
        if (this.currentVideoIndex >= this.videoList.length) {
            this.currentVideoIndex = 0;
        }

        try {
            this.retryCount = 0;
            
            // Thêm check trạng thái network
            if (sys.isBrowser && !navigator.onLine) {
                this.scheduleOnce(() => {
                    this.playCurrentVideo();
                }, 1000);
                return;
            }

            if (this.videoPlayer.isPlaying) {
                this.videoPlayer.stop();
            }

            this.videoPlayer.clip = this.videoList[this.currentVideoIndex];
            
            // Tăng delay trước khi play để đảm bảo video được load
            this.scheduleOnce(() => {
                this.videoPlayer.play();
                
                // Thêm nhiều checks hơn
                this.schedule(this.checkVideoPlayback, 0.5, 5);
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
        // Cleanup
        if (this.videoPlayer) {
            this.videoPlayer.node.off('completed', this.onVideoCompleted, this);
            this.videoPlayer.node.off('error', this.onVideoError, this);
        }
        window.removeEventListener('websiteLoaded', this.restartVideo);
        window.removeEventListener('websiteVisibilityChanged', null);
    }

    // Public method to force restart video playback
    public restartVideo() {
        this.currentVideoIndex = 0;
        this.retryCount = 0;
        this.initializeVideo();
    }
}

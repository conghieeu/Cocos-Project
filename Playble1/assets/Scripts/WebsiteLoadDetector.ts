import { _decorator, Component, Node, sys, game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WebsiteLoadDetector')
export class WebsiteLoadDetector extends Component {
    @property
    debugLog: boolean = false;

    private isFirstLoad: boolean = true;
    private loadTimestamp: number = 0;

    start() {
        // Lưu timestamp khi component được khởi tạo
        this.loadTimestamp = Date.now();

        if (sys.isBrowser) {
            // Kiểm tra xem page đã load xong chưa
            if (document.readyState === 'complete') {
                this.onPageLoaded();
            } else {
                window.addEventListener('load', () => {
                    this.onPageLoaded();
                });
            }

            // Theo dõi navigation events
            window.addEventListener('pageshow', (event) => {
                // Kiểm tra xem page có được load từ cache không
                if (event.persisted) {
                    this.onPageLoaded(true);
                }
            });

            // Theo dõi visibility change
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                    this.onVisibilityChanged(true);
                } else {
                    this.onVisibilityChanged(false);
                }
            });
        }
    }

    private onPageLoaded(fromCache: boolean = false) {
        const loadTime = Date.now() - this.loadTimestamp;
        
        if (this.debugLog) {
            console.log(`Page loaded ${fromCache ? 'from cache' : 'fresh'} in ${loadTime}ms`);
        }

        // Phát event để các component khác có thể lắng nghe
        const event = new CustomEvent('websiteLoaded', {
            detail: {
                isFirstLoad: this.isFirstLoad,
                fromCache: fromCache,
                loadTime: loadTime,
                timestamp: Date.now()
            }
        });
        window.dispatchEvent(event);

        // Đánh dấu đã không còn là first load nữa
        this.isFirstLoad = false;

        // Gọi callback nếu cần
        this.onWebsiteLoaded();
    }

    private onVisibilityChanged(isVisible: boolean) {
        if (this.debugLog) {
            console.log(`Page visibility changed: ${isVisible ? 'visible' : 'hidden'}`);
        }

        const event = new CustomEvent('websiteVisibilityChanged', {
            detail: {
                isVisible: isVisible,
                timestamp: Date.now()
            }
        });
        window.dispatchEvent(event);

        // Gọi callback nếu cần
        if (isVisible) {
            this.onWebsiteVisible();
        } else {
            this.onWebsiteHidden();
        }
    }

    // Override các method này trong các class con nếu cần
    protected onWebsiteLoaded() {
        // Được gọi khi website load xong
    }

    protected onWebsiteVisible() {
        // Được gọi khi website trở nên visible
    }

    protected onWebsiteHidden() {
        // Được gọi khi website bị ẩn
    }

    // Public method để kiểm tra trạng thái
    public isPageVisible(): boolean {
        if (sys.isBrowser) {
            return document.visibilityState === 'visible';
        }
        return true;
    }

    public getLoadTimestamp(): number {
        return this.loadTimestamp;
    }
}
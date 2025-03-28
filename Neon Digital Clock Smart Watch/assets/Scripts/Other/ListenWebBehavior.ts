import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ListenWebBehavior')
export class ListenWebBehavior extends Component {
    private websiteLoadedHandler: (event: CustomEvent) => void;
    private visibilityChangedHandler: (event: CustomEvent) => void;

    start() {
        this.websiteLoadedHandler = (event: CustomEvent) => {
            try {
                const { isFirstLoad, fromCache, loadTime, timestamp } = event.detail;
                console.log('Website loaded:', {
                    isFirstLoad,
                    fromCache,
                    loadTime,
                    timestamp
                });
                this.onWebsiteReady();
            } catch (error) {
                console.error('Error handling website loaded event:', error);
            }
        };

        this.visibilityChangedHandler = (event: CustomEvent) => {
            try {
                const { isVisible, timestamp } = event.detail;
                if (isVisible) {
                    this.onWebsiteVisible();
                } else {
                    this.onWebsiteHidden();
                }
            } catch (error) {
                console.error('Error handling visibility change:', error);
            }
        };

        window.addEventListener('websiteLoaded', this.websiteLoadedHandler as EventListener);
        window.addEventListener('websiteVisibilityChanged', this.visibilityChangedHandler as EventListener);
    }

    private onWebsiteReady() {
        // Thực hiện các hành động khi website đã sẵn sàng
    }

    private onWebsiteVisible() {
        // Thực hiện các hành động khi website trở nên visible
    }

    private onWebsiteHidden() {
        // Thực hiện các hành động khi website bị ẩn
    }

    onDestroy() {
        window.removeEventListener('websiteLoaded', this.websiteLoadedHandler as EventListener);
        window.removeEventListener('websiteVisibilityChanged', this.visibilityChangedHandler as EventListener);
    }
}

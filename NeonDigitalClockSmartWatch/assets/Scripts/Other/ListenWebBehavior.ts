const {ccclass, property} = cc._decorator;

@ccclass
export default class ListenWebBehavior extends cc.Component {
    private websiteLoadedHandler: Function;
    private visibilityChangedHandler: Function;

    start() {
        this.websiteLoadedHandler = (event) => {
            try {
                const detail = event.getUserData();
                const { isFirstLoad, fromCache, loadTime, timestamp } = detail;
                cc.log('Website loaded:', {
                    isFirstLoad,
                    fromCache,
                    loadTime,
                    timestamp
                });
                this.onWebsiteReady();
            } catch (error) {
                cc.error('Error handling website loaded event:', error);
            }
        };

        this.visibilityChangedHandler = (event) => {
            try {
                const detail = event.getUserData();
                const { isVisible, timestamp } = detail;
                if (isVisible) {
                    this.onWebsiteVisible();
                } else {
                    this.onWebsiteHidden();
                }
            } catch (error) {
                cc.error('Error handling visibility change:', error);
            }
        };

        // Use Cocos event system instead of window events
        cc.systemEvent.on('websiteLoaded', this.websiteLoadedHandler, this);
        cc.systemEvent.on('websiteVisibilityChanged', this.visibilityChangedHandler, this);
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
        // Clean up event listeners
        cc.systemEvent.off('websiteLoaded', this.websiteLoadedHandler, this);
        cc.systemEvent.off('websiteVisibilityChanged', this.visibilityChangedHandler, this);
    }
}

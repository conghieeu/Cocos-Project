import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('YourComponent')
export class YourComponent extends Component {
    start() {
        // Lắng nghe sự kiện website loaded
        window.addEventListener('websiteLoaded', (event: CustomEvent) => {
            const { isFirstLoad, fromCache, loadTime, timestamp } = event.detail;
            console.log('Website loaded:', {
                isFirstLoad,
                fromCache,
                loadTime,
                timestamp
            });

            // Thực hiện các hành động cần thiết sau khi website load xong
            this.onWebsiteReady();
        });

        // Lắng nghe sự kiện visibility changed
        window.addEventListener('websiteVisibilityChanged', (event: CustomEvent) => {
            const { isVisible, timestamp } = event.detail;
            console.log('Website visibility changed:', {
                isVisible,
                timestamp
            });

            if (isVisible) {
                // Website vừa trở nên visible
                this.onWebsiteVisible();
            } else {
                // Website vừa bị ẩn
                this.onWebsiteHidden();
            }
        });
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
        // Cleanup
        window.removeEventListener('websiteLoaded', null);
        window.removeEventListener('websiteVisibilityChanged', null);
    }
}
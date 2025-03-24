import { _decorator, Component, view, screen, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MinScreenSize')
export class MinScreenSize extends Component {
    private readonly MIN_WIDTH = 400;
    private readonly MIN_HEIGHT = 300;

    start() {
        // Chỉ áp dụng cho web platform
        if (sys.isBrowser) {
            // Set initial size
            const currentSize = view.getFrameSize();
            view.setFrameSize(
                Math.max(this.MIN_WIDTH, currentSize.width),
                Math.max(this.MIN_HEIGHT, currentSize.height)
            );
            
            // Đăng ký sự kiện resize
            window.addEventListener('resize', () => {
                const size = view.getFrameSize();
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                
                const newWidth = Math.max(this.MIN_WIDTH, windowWidth);
                const newHeight = Math.max(this.MIN_HEIGHT, windowHeight);
                
                if (size.width !== newWidth || size.height !== newHeight) {
                    view.setFrameSize(newWidth, newHeight);
                    // Cập nhật lại canvas size
                    view.setDesignResolutionSize(
                        newWidth,
                        newHeight,
                        view.getResolutionPolicy()
                    );
                }
            });
        }
    }
}

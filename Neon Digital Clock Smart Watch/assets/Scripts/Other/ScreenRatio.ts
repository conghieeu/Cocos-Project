import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScreenRatio')
export class ScreenRatio extends Component {
    start() {
        window.addEventListener('resize', this.onResize.bind(this));
        this.onResize(); // Gọi lần đầu để in ra tỷ lệ màn hình khi khởi động
    }

    onResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        console.log(`Screen ratio: ${ratio}`);

        // Tạo và phát sự kiện tùy chỉnh
        const event = new CustomEvent('screenRatioChanged', {
            detail: { ratio }
        });
        window.dispatchEvent(event);
    }

    update(deltaTime: number) {
        
    }
}
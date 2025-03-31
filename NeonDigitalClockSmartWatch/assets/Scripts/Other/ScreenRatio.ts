const {ccclass, property} = cc._decorator;

@ccclass
export default class ScreenRatio extends cc.Component {
    start() {
        cc.view.on('canvas-resize', this.onResize, this);
        this.onResize(); // Gọi lần đầu để in ra tỷ lệ màn hình khi khởi động
    }

    onResize() {
        const size = cc.view.getFrameSize();
        const width = size.width;
        const height = size.height;
        const ratio = width / height;
        cc.log(`Screen ratio: ${ratio}`);

        // Tạo và phát sự kiện tùy chỉnh
        const event = new cc.Event.EventCustom('screenRatioChanged', true);
        event.setUserData({ ratio });
        this.node.dispatchEvent(event);
    }

    onDestroy() {
        cc.view.off('canvas-resize', this.onResize, this);
    }
}

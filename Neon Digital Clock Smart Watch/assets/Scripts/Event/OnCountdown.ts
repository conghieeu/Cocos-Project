declare const cc: any;
const { _decorator, Component, Node, VideoPlayer } = cc;
const { ccclass, property } = _decorator;

@ccclass('OnCountdown')
export class OnCountdown extends Component {
    @property({ type: [Node], tooltip: "Danh sách node sẽ được active sau thời gian định sẵn" })
    nodeActive: Node[] = [];

    @property({ type: [Node], tooltip: "Danh sách node sẽ được inactive sau thời gian định sẵn" })
    nodeInactive: Node[] = [];

    @property({ tooltip: "Thời gian chờ trước khi chuyển (giây)" })
    delayTime: number = 5;

    @property({ tooltip: "Đường dẫn website sẽ được mở sau khi hết thời gian" })
    url: string = '';

    start() {
        // Đặt timer để thực hiện chuyển đổi sau delayTime giây
        this.scheduleOnce(() => {
            this.switchNodes();
        }, this.delayTime);
    }

    private switchNodes() {
        // Kích hoạt các node trong mảng nodeActive
        this.nodeActive.forEach(node => {
            if (node) {
                node.active = true;
            }
        });

        // Tắt các node trong mảng nodeInactive
        this.nodeInactive.forEach(node => {
            if (node) {
                node.active = false;
            }
        });

        // Mở trang web
        if (this.url !== '') {
            window.open(this.url, '_blank');
        }
    }

    onDestroy() {
        // Hủy tất cả các timer đang chạy
        this.unscheduleAllCallbacks();
    }
}

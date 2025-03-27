import { _decorator, Component, Node, VideoPlayer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OnVideoEnd')
export class OnVideoEnd extends Component {
    @property({ type: [Node], tooltip: "Danh sách node sẽ được active sau thời gian định sẵn" })
    nodeActive: Node[] = [];

    @property({ type: [Node], tooltip: "Danh sách node sẽ được inactive sau thời gian định sẵn" })
    nodeInactive: Node[] = [];

    @property({ tooltip: "Thời gian chờ trước khi chuyển (giây)" })
    delayTime: number = 5;

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
    }

    onDestroy() {
        // Hủy tất cả các timer đang chạy
        this.unscheduleAllCallbacks();
    }
}
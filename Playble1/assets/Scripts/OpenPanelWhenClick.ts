import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OpenPanelWhenClick')
export class OpenPanelWhenClick extends Component {
    @property({ type: [Node], tooltip: "Danh sách node sẽ được active khi click" })
    nodesToActive: Node[] = [];

    @property({ type: [Node], tooltip: "Danh sách node sẽ được disable khi click" })
    nodesToDisable: Node[] = [];

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onClick, this);
    }

    onClick() {
        // Kích hoạt các node trong mảng nodesToActive
        this.nodesToActive.forEach(node => {
            if (node) {
                node.active = true;
            }
        });

        // Tắt các node trong mảng nodesToDisable
        this.nodesToDisable.forEach(node => {
            if (node) {
                node.active = false;
            }
        });
    }

    onDestroy() {
        // Cleanup event listener
        this.node.off(Node.EventType.TOUCH_START, this.onClick, this);
    }
}



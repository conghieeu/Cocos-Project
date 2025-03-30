declare const cc: any;
const { _decorator, Component, Node } = cc;
const { ccclass, property } = _decorator;

@ccclass('OpenPanelWhenClick')
export class OpenPanelWhenClick extends Component {
    @property(Node)
    targetPanel: Node | null = null;

    start() {
        this.node.on(Node.EventType.TOUCH_END, this.openPanel, this);
    }

    openPanel() {
        if (this.targetPanel) {
            this.node.active = true;
        }
    }

    onDestroy() {
        this.node.off(Node.EventType.TOUCH_END, this.openPanel, this);
    }
}



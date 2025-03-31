const {ccclass, property, executeInEditMode} = cc._decorator;

// Tự động scale theo đối tượng cha scale ở đây là đối chiếu theo kích thước
@ccclass
@executeInEditMode
export default class RatioAutoScale extends cc.Component {
    @property({
        type: cc.Node,
        tooltip: "Node cha"
    })
    parentNode: cc.Node | null = null;

    @property({
        tooltip: "Kích thước của node cha"
    })
    parentContentSize: cc.Vec2 = cc.v2(0, 0);

    @property({
        tooltip: "Kích thước ban đầu của node con"
    })
    contentSize: cc.Vec2 = cc.v2(0, 0);

    @property({
        tooltip: "Vị trí ban đầu của node con"
    })
    position: cc.Vec2 = cc.v2(0, 0);

    @property({
        tooltip: "Tự động cập nhật trong runtime"
    })
    autoUpdate: boolean = true;

    resetInEditor() {
        if (this.node.parent) {
            this.parentNode = this.node.parent;
            this.parentContentSize = cc.v2(this.parentNode.width, this.parentNode.height);
            this.contentSize = cc.v2(this.node.width, this.node.height);
            this.position = cc.v2(this.node.x, this.node.y);
        }
        this.autoUpdate = true;
    }

    update() {
        if (this.autoUpdate) {
            this.updateUITransform();
        }
    }

    private updateUITransform() {
        if (!this.parentNode) return;

        const ratioScaleParentWidth = this.parentNode.width / this.parentContentSize.x;
        const ratioScaleParentHeight = this.parentNode.height / this.parentContentSize.y;

        // Update size
        this.node.width = this.contentSize.x * ratioScaleParentWidth;
        this.node.height = this.contentSize.y * ratioScaleParentHeight;

        // Update position
        this.node.x = this.position.x * ratioScaleParentWidth;
        this.node.y = this.position.y * ratioScaleParentHeight;
    }
}

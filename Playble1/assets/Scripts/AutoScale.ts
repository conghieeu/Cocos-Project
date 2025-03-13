import { _decorator, Component, Node, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

// Tự động scale theo đối tượng cha scale ở đây là đối chiếu theo UI Transform
@ccclass('AutoScale')
@executeInEditMode
export class AutoScale extends Component {

    @property({ type: UITransform, tooltip: "Node cha" })
    parentTransform: UITransform | null = null;

    @property({ type: Vec2, tooltip: "Kích thước của node cha" })
    parentContentSize: Vec2 = new Vec2(0, 0);

    @property({ type: Vec2, tooltip: "Kích thước ban đầu của node con" })
    contentSize: Vec2 = new Vec2(0, 0);

    @property({ type: Vec2, tooltip: "Vị trí ban đầu của node con" })
    position: Vec2 = new Vec2(0, 0);

    @property({ type: Boolean, tooltip: "Tự động cập nhật trong runtime" })
    autoUpdate: boolean = true;


    resetInEditor() {
        this.parentTransform = this.node.parent?.getComponent(UITransform) || null;
        this.parentContentSize = new Vec2(this.parentTransform?.width || 0, this.parentTransform?.height || 0);
        this.contentSize = new Vec2(this.node.getComponent(UITransform)?.width || 0, this.node.getComponent(UITransform)?.height || 0);
        this.position = new Vec2(this.node.position.x, this.node.position.y);

        this.autoUpdate = true;
    }

    update() {
        if (this.autoUpdate) {
            this.updateUITransform();
        }
    }

    private updateUITransform() {
        if (!this.parentTransform) return;

        const ratioScaleParentWidth = this.parentTransform.width / this.parentContentSize.x;
        const ratioScaleParentHeight = this.parentTransform.height / this.parentContentSize.y;

        this.node.getComponent(UITransform)?.setContentSize(this.contentSize.x * ratioScaleParentWidth, this.contentSize.y * ratioScaleParentHeight);
        this.node.position = new Vec3(this.position.x * ratioScaleParentWidth, this.position.y * ratioScaleParentHeight, 0);
    }
}



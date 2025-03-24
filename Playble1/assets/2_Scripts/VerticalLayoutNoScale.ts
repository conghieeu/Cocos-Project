/*
* đây là một component layout dạng vertical không scale tự động
*/
import { _decorator, Component, Node, UITransform, Vec3, CCFloat, CCBoolean, Rect, Enum, Vec2 } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('VerticalLayoutNoScale')
@executeInEditMode
export default class VerticalLayoutNoScale extends Component {
    private _parentTransform: UITransform | null = null;

    @property({ type: Boolean, tooltip: "Tự động cập nhật trong runtime" })
    autoUpdate: boolean = true;

    // danh sách vector2 đây là danh sách size của các child con lúc ban đầu
    @property({
        type: [Vec2],
        // visible: false
    })
    private childSize: Vec2[] = [];

    start() {
        this.initChildSize();

        this._parentTransform = this.node.getComponent(UITransform);
        this._parentTransform.setAnchorPoint(0, 0);

        this.updateLayout();

        // set anchor point cho các child
        for (let child of this.node.children) {
            child.getComponent(UITransform).setAnchorPoint(0, 0);
        }
    }

    resetInEditor() {
        this.initChildSize();
        this.autoUpdate = true;
    }

    update() {
        if (!this.autoUpdate)
            this.updateLayout();
    }

    private initChildSize() {
        this.childSize = [];
        for (let child of this.node.children) {
            this.childSize.push(new Vec2(child.getComponent(UITransform).width, child.getComponent(UITransform).height));
        }
    }

    private updateLayout() {
        const width = this._parentTransform.width;
        const height = this.getChildHeight();

        // để vị trí child cuối lênh trên đầu
        let lastChild = this.node.children[this.node.children.length - 1];
        let lastChildPositionY = this._parentTransform.height - lastChild.getComponent(UITransform).height;
        this.node.children[this.node.children.length - 1].setPosition(new Vec3(0, lastChildPositionY));

        // set vị trí cho các child
        let newPos = new Vec3(0, 0, 0);
        for (let i = 0; i < this.node.children.length - 1; i++) {
            let child = this.node.children[i];
            child.setPosition(newPos);

            newPos.y += height;
        }

        // tự scale y khi các phần tử con đè lênh nhau
        for (let i = 0; i < this.node.children.length; i++) {
            let child = this.node.children[i];
            child.getComponent(UITransform).setContentSize(width, child.getComponent(UITransform).height);
            
        }
    }

    // chiều dài của các child cần để khít với cha
    private getChildHeight(): number {
        let count = this.node.children.length;
        return (this._parentTransform.height) / count;
    }
}

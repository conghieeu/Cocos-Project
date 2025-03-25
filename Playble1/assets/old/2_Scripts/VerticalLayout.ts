import { _decorator, Component, Node, UITransform, Vec3, CCFloat, CCBoolean, Rect, Enum, Vec2 } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('VerticalLayout')
@executeInEditMode
export default class VerticalLayout extends Component {
    @property({ 
        type: CCFloat, 
        tooltip: "Khoảng cách giữa các phần tử con",
        min: 0 
    })
    spacing: number = 10;

    private _parentTransform: UITransform | null = null;

    start() {
        this._parentTransform = this.node.getComponent(UITransform);
        this._parentTransform.setAnchorPoint(0, 0);
        this.updateLayout();
    }

    update() {
        this.updateLayout();
    }

    private updateLayout() {
        const width = this._parentTransform.width;
        const height = this.getChildHeight();

        for (let child of this.node.children) {
            child.getComponent(UITransform).setContentSize(width, height);
        }

        let newPos = new Vec3(0, 0, 0);
        // set vị trí cho các child
        for (let i = 0; i < this.node.children.length; i++) {
            let child = this.node.children[i];
            child.getComponent(UITransform).setAnchorPoint(0, 0);
            child.setPosition(newPos);

            newPos.y += height + this.getSpacing();
        }
    }

    private getSpacing(): number {
        let count = this.node.children.length;
        return (this.spacing * (count - 1)) / count;
    }

    // chiều dài của các child cần để khít với cha
    private getChildHeight(): number {
        let count = this.node.children.length;
        return (this._parentTransform.height - (this.getSpacing() * (count - 1))) / count;
    }

}
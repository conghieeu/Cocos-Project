import { _decorator, Component, Node, UITransform, Vec2, Vec3, CCBoolean } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('LayoutTopDown')
@executeInEditMode
export class LayoutTopDown extends Component {

    private _parentTransform: UITransform | null = null;

    @property({ type: Node, tooltip: "Layout trên" })
    layoutTop: Node | null = null;

    @property({ type: Node, tooltip: "Layout dưới" })
    layoutBottom: Node | null = null;

    @property({ type: Vec2, visible: false })
    layoutTopSize: Vec2 = new Vec2(0, 0);

    @property({ type: Vec2, visible: false })
    layoutBottomSize: Vec2 = new Vec2(0, 0);

    @property({ type: CCBoolean, tooltip: "Tự động cập nhật trong runtime" })
    autoUpdate = true;

    start() {
        this._parentTransform = this.node.getComponent(UITransform);
    }

    resetInEditor() { 
        this.autoUpdate = true;

        this.getLayoutTopDown();
        this.getLayoutSize();
        this.updateLayout();
    }

    private getLayoutTopDown() {
        this.layoutTop = this.node.children[1];
        this.layoutBottom = this.node.children[0];
        
        this.layoutTop.getComponent(UITransform).setAnchorPoint(0, 0);
        this.layoutBottom.getComponent(UITransform).setAnchorPoint(0, 0);
    }

    update() {
        if (this.autoUpdate)
            this.updateLayout();
    }

    private updateLayout() {
        if (!this.layoutTop || !this.layoutBottom) return;
        const width = this._parentTransform.width;

        // set size width
        for (let child of this.node.children) {
            child.getComponent(UITransform).setContentSize(width, child.getComponent(UITransform).height);
        }
        
        // set position
        this.layoutTop.setPosition(0, this._parentTransform.height - this.layoutTop.getComponent(UITransform).height);
        this.layoutBottom.setPosition(0, 0);

        this.autoScaleLayout();
    }

    private autoScaleLayout() {
        const width = this._parentTransform.width;

        let layoutTopTrans = this.layoutTop.getComponent(UITransform);
        let layoutBottomTrans = this.layoutBottom.getComponent(UITransform);

        if (layoutTopTrans.height + layoutBottomTrans.height > this._parentTransform.height) {
            layoutTopTrans.setContentSize(width, this._parentTransform.height - layoutBottomTrans.height);
        }
        else {
            layoutTopTrans.setContentSize(width, this.layoutTopSize.y);
        }
    }

    private getLayoutSize() {
        if (!this.layoutTop || !this.layoutBottom) return;

        this.layoutTopSize = new Vec2(this.layoutTop.getComponent(UITransform).width, this.layoutTop.getComponent(UITransform).height);
        this.layoutBottomSize = new Vec2(this.layoutBottom.getComponent(UITransform).width, this.layoutBottom.getComponent(UITransform).height);
    }
}



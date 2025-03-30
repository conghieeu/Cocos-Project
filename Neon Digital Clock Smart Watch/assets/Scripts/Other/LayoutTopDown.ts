const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export class LayoutTopDown extends cc.Component {
    @property({type: cc.Node, tooltip: "Layout trên"})
    layoutTop: cc.Node | null = null;

    @property({type: cc.Node, tooltip: "Layout dưới"})
    layoutBottom: cc.Node | null = null;

    @property({visible: false})
    layoutTopSize = cc.v2(0, 0);

    @property({visible: false})
    layoutBottomSize = cc.v2(0, 0);

    @property({tooltip: "Tự động cập nhật trong runtime"})
    autoUpdate = true;

    start() {
        // No need for UITransform in 2.4.3
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
        
        // In 2.4.3, anchor point is set directly on node
        if (this.layoutTop) this.layoutTop.anchorX = this.layoutTop.anchorY = 0;
        if (this.layoutBottom) this.layoutBottom.anchorX = this.layoutBottom.anchorY = 0;
    }

    update() {
        if (this.autoUpdate) {
            this.updateLayout();
        }
    }

    private updateLayout() {
        if (!this.layoutTop || !this.layoutBottom) return;
        const width = this.node.width;

        // set size width
        for (let child of this.node.children) {
            child.width = width;
        }
        
        // set position
        this.layoutTop.setPosition(0, this.node.height - this.layoutTop.height);
        this.layoutBottom.setPosition(0, 0);

        this.autoScaleLayout();
    }

    private autoScaleLayout() {
        const width = this.node.width;

        if (this.layoutTop.height + this.layoutBottom.height > this.node.height) {
            this.layoutTop.height = this.node.height - this.layoutBottom.height;
            this.layoutTop.width = width;
        } else {
            this.layoutTop.width = width;
            this.layoutTop.height = this.layoutTopSize.y;
        }
    }

    private getLayoutSize() {
        if (!this.layoutTop || !this.layoutBottom) return;

        this.layoutTopSize = cc.v2(this.layoutTop.width, this.layoutTop.height);
        this.layoutBottomSize = cc.v2(this.layoutBottom.width, this.layoutBottom.height);
    }
}



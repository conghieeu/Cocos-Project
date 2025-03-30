const {ccclass, property} = cc._decorator;

@ccclass
export default class ScaleFollowLayout extends cc.Component {
    @property({
        type: cc.Node,
        tooltip: "Node cha"
    })
    parent: cc.Node | null = null;

    @property({
        tooltip: "Theo chiều rộng"
    })
    followWidth: boolean = true;

    @property({
        tooltip: "Theo chiều cao"
    })
    followHeight: boolean = true;

    start() {
        this.updateScale();
    }

    update() {
        this.updateScale();
    }

    updateScale() {
        if (!this.parent) return;

        const parentWidth = this.parent.width;
        const parentHeight = this.parent.height;

        // Calculate scale ratios
        const widthRatio = parentWidth / this.node.width;
        const heightRatio = parentHeight / this.node.height;

        // Apply scale based on follow settings
        if (this.followWidth && this.followHeight) {
            // Use the smaller ratio to maintain aspect ratio
            const scale = Math.min(widthRatio, heightRatio);
            this.node.scaleX = scale;
            this.node.scaleY = scale;
        } else if (this.followWidth) {
            this.node.scaleX = widthRatio;
        } else if (this.followHeight) {
            this.node.scaleY = heightRatio;
        }           
    }
}



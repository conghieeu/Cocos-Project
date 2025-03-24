import { _decorator, Component, Node, UITransform } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('ScaleFollowLayout')
export class ScaleFollowLayout extends Component {
    @property({ type: UITransform, tooltip: "Node cha" })
    parent: UITransform | null = null;

    @property({ type: Boolean, tooltip: "Theo chiều rộng" })
    followWidth: boolean = true;

    @property({ type: Boolean, tooltip: "Theo chiều cao" })
    followHeight: boolean = true;


    start() {
        this.updateScale();
    }

    update() {
        this.updateScale();
    }

    updateScale() {
        if (!this.parent) return;

        // chỉnh uiTransform đối tượng này theo parent
        const uiTransform = this.node.getComponent(UITransform);
        if (!uiTransform) return;

        const parentWidth = this.parent.width;
        const parentHeight = this.parent.height;

        // Calculate scale ratios
        const widthRatio = parentWidth / uiTransform.width;
        const heightRatio = parentHeight / uiTransform.height;

        // Apply scale based on follow settings
        if (this.followWidth && this.followHeight) {
            // Use the smaller ratio to maintain aspect ratio
            const scale = Math.min(widthRatio, heightRatio);
            this.node.setScale(scale, scale);
        } else if (this.followWidth) {
            this.node.setScale(widthRatio, this.node.scale.y);
        } else if (this.followHeight) {
            this.node.setScale(this.node.scale.x, heightRatio);
        }           
    }
}



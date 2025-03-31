const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export class MoveLayoutToCenter extends cc.Component {
    // Phương thức static để kiểm tra và thêm component
    public static ensureComponent(node: cc.Node): MoveLayoutToCenter {
        let moveLayout = node.getComponent(MoveLayoutToCenter);
        if (!moveLayout) {
            moveLayout = node.addComponent(MoveLayoutToCenter);
        }
        return moveLayout;
    }

    update(deltaTime: number) {
        this.moveToParentCenter();
    }

    getPointCenter() {
        const parent = this.node.parent;
        if (!parent) return;

        // In Cocos 2.4.3, we use node.width/height directly instead of UITransform
        const parentWidth = parent.width;
        const parentHeight = parent.height;
        const nodeWidth = this.node.width;
        const nodeHeight = this.node.height;

        // In 2.4.3, anchor points are accessed directly from node
        const parentAnchorX = parent.anchorX;
        const parentAnchorY = parent.anchorY;
        const nodeAnchorX = this.node.anchorX;
        const nodeAnchorY = this.node.anchorY;

        // Calculate parent center in local coordinates
        const parentCenterLocal = cc.v2(
            parentWidth * (0.5 - parentAnchorX),
            parentHeight * (0.5 - parentAnchorY)
        );

        // Calculate offset needed for node to be centered
        const offsetX = nodeWidth * (0.5 - nodeAnchorX);
        const offsetY = nodeHeight * (0.5 - nodeAnchorY);

        // Calculate final center position
        const pointCenter = cc.v2(
            parentCenterLocal.x - offsetX,
            parentCenterLocal.y - offsetY
        );

        return pointCenter;
    }

    moveToParentCenter() {
        const centerPoint = this.getPointCenter();
        if (centerPoint) {
            this.node.setPosition(centerPoint);
        }
    }
}



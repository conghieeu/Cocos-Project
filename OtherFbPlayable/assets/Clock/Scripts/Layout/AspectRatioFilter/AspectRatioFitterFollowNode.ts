const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class AspectRatioFitterFollowNode extends cc.Component {
    @property({
        type: cc.Node,
        tooltip: "Node bên trái để căn chỉnh"
    })
    leftNode: cc.Node | null = null;

    @property({
        tooltip: "Khoảng cách với node bên trái"
    })
    leftSpacing: number = 0;

    @property({
        type: cc.Node,
        tooltip: "Node bên phải để căn chỉnh"
    })
    rightNode: cc.Node | null = null;

    @property({
        tooltip: "Khoảng cách với node bên phải"
    })
    rightSpacing: number = 0;

    @property({
        type: cc.Node,
        tooltip: "Node phía dưới để căn chỉnh"
    })
    nodeDown: cc.Node | null = null;

    @property({
        tooltip: "Khoảng cách với node phía dưới"
    })
    downSpacing: number = 0;

    @property({
        type: cc.Node,
        tooltip: "Node phía trên để căn chỉnh"
    })
    nodeUp: cc.Node | null = null;

    @property({
        tooltip: "Khoảng cách với node phía trên"
    })
    upSpacing: number = 0;

    @property({
        type: cc.Float,
        tooltip: "Tỷ lệ khung hình mong muốn (width / height)"
    })
    aspectRatio: number = 1.0;

    onEnable() {
        this.setAspectRatio();
    }

    update() {
        if (this.leftNode && !this.nodeDown) {
            this.updateAspectRatioX();
        }
        else if (this.nodeDown && !this.leftNode) {
            this.updateAspectRatioY();
        }
        else if (this.leftNode && this.nodeDown) {
            // Lấy bound của cả 2 node
            const nodeBound = this.node.getBoundingBox();
            const targetBound1 = this.leftNode.getBoundingBox();
            const targetBound2 = this.nodeDown.getBoundingBox();

            // Convert bounds to world space
            const nodeWorldBound = this.node.parent.convertToWorldSpaceAR(cc.v2(nodeBound.x, nodeBound.y));
            const target1WorldBound = this.leftNode.parent.convertToWorldSpaceAR(cc.v2(targetBound1.x, targetBound1.y));
            const target2WorldBound = this.nodeDown.parent.convertToWorldSpaceAR(cc.v2(targetBound2.x, targetBound2.y));

            // Tính toán chiều rộng mới dựa trên khoảng cách giữa 2 node
            const newWidth = Math.abs(nodeWorldBound.x - target1WorldBound.x) - this.leftSpacing;
            const newY = Math.abs(nodeWorldBound.y - target2WorldBound.y) - this.downSpacing;

            if (newWidth < newY) {
                this.updateAspectRatioX();
            } else {
                this.updateAspectRatioY();
            }
        }
    }

    private setAspectRatio() {
        this.aspectRatio = this.node.width / this.node.height;
    }

    private updateAspectRatioX() {
        if (!this.leftNode) return;

        // Lấy bound của cả 2 node
        const nodeBound = this.node.getBoundingBox();
        const targetBound = this.leftNode.getBoundingBox();

        // Convert bounds to world space
        const nodeWorldBound = this.node.parent.convertToWorldSpaceAR(cc.v2(nodeBound.x, nodeBound.y));
        const targetWorldBound = this.leftNode.parent.convertToWorldSpaceAR(cc.v2(targetBound.x, targetBound.y));

        // Tính toán chiều rộng mới dựa trên khoảng cách giữa 2 node
        const newWidth = Math.abs(nodeWorldBound.x - targetWorldBound.x) - this.leftSpacing;
        const newHeight = newWidth / this.aspectRatio;

        this.node.width = newWidth;
        this.node.height = newHeight;
    }

    private updateAspectRatioY() {
        if (!this.nodeDown) return;

        // Lấy bound của cả 2 node
        const nodeBound = this.node.getBoundingBox();
        const targetBound = this.nodeDown.getBoundingBox();

        // Convert bounds to world space
        const nodeWorldBound = this.node.parent.convertToWorldSpaceAR(cc.v2(nodeBound.x, nodeBound.y));
        const targetWorldBound = this.nodeDown.parent.convertToWorldSpaceAR(cc.v2(targetBound.x, targetBound.y));

        // Tính toán vị trí mới của node
        const newY = Math.abs(nodeWorldBound.y - targetWorldBound.y) - this.downSpacing;
        const newX = newY * this.aspectRatio;

        this.node.width = newX;
        this.node.height = newY;
    }
}

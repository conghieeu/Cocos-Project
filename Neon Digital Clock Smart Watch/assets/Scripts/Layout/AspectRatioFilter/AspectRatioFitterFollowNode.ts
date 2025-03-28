import { _decorator, Component, Node, UITransform, Size } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('AspectRatioFitterFollowNode')
@executeInEditMode
export class AspectRatioFitterFollowNode extends Component {
    @property({ type: Node, tooltip: "Node bên trái để căn chỉnh" })
    leftNode: Node | null = null;

    @property({ tooltip: "Khoảng cách với node bên trái" })
    leftSpacing: number = 0;

    @property({ type: Node, tooltip: "Node bên phải để căn chỉnh" })
    rightNode: Node | null = null;

    @property({ tooltip: "Khoảng cách với node bên phải" })
    rightSpacing: number = 0;

    @property({ type: Node, tooltip: "Node phía dưới để căn chỉnh" })
    nodeDown: Node | null = null;

    @property({ tooltip: "Khoảng cách với node phía dưới" })
    downSpacing: number = 0;

    @property({ type: Node, tooltip: "Node phía trên để căn chỉnh" })
    nodeUp: Node | null = null;

    @property({ tooltip: "Khoảng cách với node phía trên" })
    upSpacing: number = 0;

    @property({ 
        type: Number, 
        tooltip: "Tỷ lệ khung hình mong muốn (width / height)" 
    })
    aspectRatio: number = 1.0;

    protected onEnable(): void {
        this.setAspectRatio();
    }

    update(deltaTime: number) {
        if (this.leftNode && !this.nodeDown) {
            this.updateAspectRatioX();
        }
        if (this.nodeDown && !this.leftNode) {
            this.updateAspectRatioY();
        }
        else if (this.leftNode && this.nodeDown) {
            const nodeTransform = this.node.getComponent(UITransform);
            const targetTransform = this.leftNode.getComponent(UITransform);
            const targetTransform2 = this.nodeDown.getComponent(UITransform);

            if (!nodeTransform || !targetTransform || !targetTransform2) return;

            // Lấy bound của cả 2 node
            const nodeBound = nodeTransform.getBoundingBoxToWorld();
            const targetBound1 = targetTransform.getBoundingBoxToWorld();
            const targetBound2 = targetTransform2.getBoundingBoxToWorld();

            // Tính toán chiều rộng mới dựa trên khoảng cách giữa 2 node
            const newWidth = Math.abs(nodeBound.xMin - targetBound1.xMin) - this.leftSpacing;
            const newY = Math.abs(nodeBound.yMax - targetBound2.yMin) - this.downSpacing;

            if (newWidth < newY) {
                this.updateAspectRatioX();
            }
            else {
                this.updateAspectRatioY();
            }
        }
    }

    private setAspectRatio() {
        const uiTransform = this.node.getComponent(UITransform);
        if (uiTransform) {
            this.aspectRatio = uiTransform.width / uiTransform.height;
        }
    }

    updateAspectRatioX() {
        if (!this.leftNode) return;

        const nodeTransform = this.node.getComponent(UITransform);
        const targetTransform = this.leftNode.getComponent(UITransform);

        if (!nodeTransform || !targetTransform) return;

        // Lấy bound của cả 2 node
        const nodeBound = nodeTransform.getBoundingBoxToWorld();
        const targetBound1 = targetTransform.getBoundingBoxToWorld();

        // Tính toán chiều rộng mới dựa trên khoảng cách giữa 2 node
        const newWidth = Math.abs(nodeBound.xMin - targetBound1.xMin) - this.leftSpacing;
        const newHeight = newWidth / this.aspectRatio;

        nodeTransform.setContentSize(new Size(newWidth, newHeight));
    }

    updateAspectRatioY() {
        if (!this.nodeDown) return;

        const nodeTransform = this.node.getComponent(UITransform);
        const targetTransform2 = this.nodeDown.getComponent(UITransform);

        if (!nodeTransform || !targetTransform2) return;

        // Lấy bound của cả 2 node
        const nodeBound = nodeTransform.getBoundingBoxToWorld();
        const targetBound2 = targetTransform2.getBoundingBoxToWorld();

        // Tính toán vị trí mới của node
        const newY = Math.abs(nodeBound.yMax - targetBound2.yMin) - this.downSpacing;
        const newX = newY * this.aspectRatio;

        nodeTransform.setContentSize(new Size(newX, newY));
    }
}

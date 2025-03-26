import { _decorator, Component, Node, UITransform, Size, Rect, CCFloat } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('AspectRatioFitterFollowNode')
@executeInEditMode
export class AspectRatioFitterFollowNode extends Component {
    @property({ type: Node, tooltip: "Node gán theo" })
    targetNode1: Node | null = null;

    @property({ type: Node, tooltip: "Node gán theo" })
    targetNode2: Node | null = null;

    @property({ type: CCFloat, tooltip: "Tỷ lệ khung hình mong muốn (width / height)" })
    aspectRatio: number = 1.0;

    @property({ tooltip: "Cập nhật tỷ lệ khung hình tự động" })
    autoUpdate: boolean = true;

    start() {
        this.setAspectRatio();
    }

    resetInEditor(didResetToDefault?: boolean): void {
        this.setAspectRatio();
        this.autoUpdate = true;
    }

    update(deltaTime: number) {
        if (this.autoUpdate) {
            if (this.targetNode1 && !this.targetNode2) {
                this.updateAspectRatioX();
            }
            if (this.targetNode2 && !this.targetNode1) {
                this.updateAspectRatioY();
            }
            else if (this.targetNode1 && this.targetNode2) {
                const nodeTransform = this.node.getComponent(UITransform);
                const targetTransform = this.targetNode1.getComponent(UITransform);
                const targetTransform2 = this.targetNode2.getComponent(UITransform);

                // Lấy bound của cả 2 node
                const nodeBound = nodeTransform.getBoundingBoxToWorld();
                const targetBound1 = targetTransform.getBoundingBoxToWorld();
                const targetBound2 = targetTransform2.getBoundingBoxToWorld();

                // Tính toán chiều rộng mới dựa trên khoảng cách giữa 2 node
                const newWidth = Math.abs(nodeBound.xMin - targetBound1.xMin);
                const newY = Math.abs(nodeBound.yMax - targetBound2.yMin);

                if (newWidth < newY) {
                    this.updateAspectRatioX();
                }
                else {
                    this.updateAspectRatioY();
                }
            }
        }
    }

    private setAspectRatio() {
        this.aspectRatio = this.node.getComponent(UITransform)?.width / this.node.getComponent(UITransform)?.height || 1;
    }

    updateAspectRatioX() {
        if (!this.targetNode1) return;

        const nodeTransform = this.node.getComponent(UITransform);
        const targetTransform = this.targetNode1.getComponent(UITransform);

        // Lấy bound của cả 2 node
        const nodeBound = nodeTransform.getBoundingBoxToWorld();
        const targetBound1 = targetTransform.getBoundingBoxToWorld();

        // Tính toán chiều rộng mới dựa trên khoảng cách giữa 2 node
        const newWidth = Math.abs(nodeBound.xMin - targetBound1.xMin);
        const newHeight = newWidth / this.aspectRatio;

        nodeTransform.setContentSize(new Size(newWidth, newHeight));
    }

    updateAspectRatioY() {
        if (!this.targetNode2) return;

        const nodeTransform = this.node.getComponent(UITransform);
        const targetTransform2 = this.targetNode2.getComponent(UITransform);

        // Lấy bound của cả 2 node
        const nodeBound = nodeTransform.getBoundingBoxToWorld();
        const targetBound2 = targetTransform2.getBoundingBoxToWorld();

        // Tính toán vị trí mới của node
        const newY = Math.abs(nodeBound.yMax - targetBound2.yMin);
        const newX = newY * this.aspectRatio;

        nodeTransform.setContentSize(new Size(newX, newY));
    }
}

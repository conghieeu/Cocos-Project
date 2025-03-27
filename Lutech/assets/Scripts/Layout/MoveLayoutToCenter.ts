import { _decorator, Component, Node, UITransform, Vec2, Vec3 } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('MoveLayoutToCenter')
@executeInEditMode
export class MoveLayoutToCenter extends Component {

    @property
    autoUpdate: boolean = true;

    start() {
        this.moveToParentCenter();
    }

    update(deltaTime: number) {
        if (this.autoUpdate) {
            this.moveToParentCenter();
        }
    }

    getPointCenter() {
        const parent = this.node.parent;
        if (!parent) return;
    
        const parentTransform = parent.getComponent(UITransform);
        const nodeTransform = this.node.getComponent(UITransform);
        if (!parentTransform || !nodeTransform) return;
    
        const parentContentSize = parentTransform.contentSize;
        const nodeContentSize = nodeTransform.contentSize;
        const parentAnchor = parentTransform.anchorPoint;
        const nodeAnchor = nodeTransform.anchorPoint;
    
        // Tính toán vị trí center của parent trong hệ tọa độ local của parent
        const parentCenterLocal = new Vec2(
            parentContentSize.width * (0.5 - parentAnchor.x),
            parentContentSize.height * (0.5 - parentAnchor.y)
        );
    
        // Tính toán offset cần thiết để node nằm giữa parent
        // Cần bù đắp cho anchor point của node
        const offsetX = nodeContentSize.width * (0.5 - nodeAnchor.x);
        const offsetY = nodeContentSize.height * (0.5 - nodeAnchor.y);
    
        // Vị trí cần đặt để node nằm chính giữa parent
        const pointCenter = new Vec2(
            parentCenterLocal.x - offsetX,
            parentCenterLocal.y - offsetY
        );
    
        return pointCenter;
    }

    moveToParentCenter() {
        const centerPoint = this.getPointCenter();
        if (centerPoint) {
            this.node.setPosition(centerPoint.x, centerPoint.y);
        }
    }
}



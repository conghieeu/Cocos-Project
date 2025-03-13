import { _decorator, Component, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('TuDongSep')
@executeInEditMode
export class TuDongSep extends Component {
    @property({
        tooltip: "Khoảng cách giữa các phần tử"
    })
    spacing: number = 10;

    @property({
        tooltip: "Tự động cập nhật layout trong runtime"
    })
    autoUpdate: boolean = false;

    start() {
        this.arrangeChildrenInColumn();
    }

    update(deltaTime: number) {
        // Chỉ update khi cần thiết
        if (this.autoUpdate) {
            this.arrangeChildrenInColumn();
        }
    }

    arrangeChildrenInColumn() {
        const children = this.node.children;
        const parentUITransform = this.node.getComponent(UITransform);
        
        if (!parentUITransform || children.length === 0) return;

        let currentY = 0;
        children.forEach(child => {
            const uiTransform = child.getComponent(UITransform);
            if (!uiTransform) return;

            child.setPosition(new Vec3(0, currentY, 0));
            currentY -= uiTransform.height + this.spacing;
            
            // Đặt kích thước mới
            const newWidth = parentUITransform.width / 2;
            uiTransform.setContentSize(newWidth, uiTransform.height);
        });
    }
}
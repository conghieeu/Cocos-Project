/**
 * Mô tả
 * 
 * Tính năng:
 * Giống với AspectRatioFitter không cho đối tượng này bị biến dạng khi layer cha thay đổi kích thước
 * Nhưng mà tỷ lệ sẽ được giữ khi aspectRatio nhỏ hơn mức aspectRatio cho phép
 * 
 */
const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class AspectRatioFitterHold extends cc.Component {
    @property
    autoUpdate: boolean = true;

    @property({
        tooltip: "Tỷ lệ khung hình mong muốn (width / height)"
    })
    aspectRatio: number = 1.0;

    @property({
        tooltip: "Theo chiều rộng"
    })
    isFollowWidth: boolean = true;

    @property({
        tooltip: "Theo chiều cao"
    })
    isFollowHeight: boolean = true;

    @property({
        tooltip: "Khi chiều dài vượt ngững Ratio thì sẽ không bị thay đổi và ngược lại"
    })
    isHold: boolean = true;

    start() {
        this.getAspectRatio();
    }

    update() {
        if (this.autoUpdate) {
            this.moveToParentCenter();
            this.updateAspectRatio();
        }
    }

    resetInEditor() {
        this.getAspectRatio();
        this.autoUpdate = true;
    }

    getAspectRatio() {
        if (this.node) {
            this.aspectRatio = this.node.width / this.node.height;
        }
    }

    updateAspectRatio() {
        const parent = this.node.parent;
        if (!parent) return;

        const parentWidth = parent.width;
        const parentHeight = parent.height;
        const currentRatio = parentWidth / parentHeight;

        let newWidth, newHeight;

        if (this.isHold && currentRatio < this.aspectRatio) {
            this.node.width = parentWidth;
            this.node.height = parentHeight;
            return;
        }

        if (this.isFollowWidth && !this.isFollowHeight) {
            newWidth = parentWidth;
            newHeight = newWidth / this.aspectRatio;
        } else if (this.isFollowHeight && !this.isFollowWidth) {
            newHeight = parentHeight;
            newWidth = newHeight * this.aspectRatio;
        } else if (this.isFollowWidth && this.isFollowHeight) {
            if (parentWidth / parentHeight < this.aspectRatio) {
                newWidth = parentWidth;
                newHeight = newWidth / this.aspectRatio;
            } else {
                newHeight = parentHeight;
                newWidth = newHeight * this.aspectRatio;
            }
        }

        if (newWidth !== undefined && newHeight !== undefined) {
            this.node.width = newWidth;
            this.node.height = newHeight;
        }
    }

    getParentPointCenter() {
        const parent = this.node.parent;
        if (!parent) return;

        const contentWidth = parent.width;
        const contentHeight = parent.height;
        const parentAnchorX = parent.anchorX;
        const parentAnchorY = parent.anchorY;
        const nodeAnchorX = this.node.anchorX;
        const nodeAnchorY = this.node.anchorY;
        
        return cc.v2(
            contentWidth * (0.5 - parentAnchorX + 0.5 - nodeAnchorX),
            contentHeight * (0.5 - parentAnchorY + 0.5 - nodeAnchorY)
        );
    }

    moveToParentCenter() {
        const centerPoint = this.getParentPointCenter();
        if (centerPoint) {
            this.node.setPosition(centerPoint);
        }
    }
}

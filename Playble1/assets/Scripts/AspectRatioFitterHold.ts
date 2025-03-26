/**
 * Mô tả
 * 
 * Tính năng:
 * Giống với AspectRatioFitter không cho đối tượng này bị biến dạng khi layer cha thay đổi kích thước
 * Nhưng mà tỷ lệ sẽ được giữ khi aspectRatio nhỏ hơn mức aspectRatio cho phép
 * 
 */
import { _decorator, Component, Node, UITransform, CCFloat } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass("AspectRatioFitterHold")
@executeInEditMode
export class AspectRatioFitterHold extends Component {
    @property
    autoUpdate: boolean = true;

    @property({ type: CCFloat, tooltip: "Tỷ lệ khung hình mong muốn (width / height)" })
    public aspectRatio: number = 1.0;

    @property
    public isFollowWidth: boolean = true; // Theo chiều rộng hay chiều cao

    @property
    public isFollowHeight: boolean = true; // Theo chiều rộng hay chiều cao

    @property
    public isHold: boolean = true; // khi chiều dài vượt ngững Ratio thì sẽ không bị thay đổi và ngược lại

    start() {
        this.getAspectRatio();
    }
 
    update(deltaTime: number) {
        if (this.autoUpdate) {
            this.updateAspectRatio();
        }
    }

    resetInEditor() {
        this.getAspectRatio();
        this.autoUpdate = true;
    }

    getAspectRatio() {
        const uiTransform = this.node.getComponent(UITransform);
        if (uiTransform) {
            this.aspectRatio = uiTransform.width / uiTransform.height;
        }
    }

    updateAspectRatio() {
        const parent = this.node.parent;
        if (!parent) return;

        const parentTransform = parent.getComponent(UITransform);
        const uiTransform = this.node.getComponent(UITransform);

        if (parentTransform && uiTransform) {
            const parentWidth = parentTransform.width;
            const parentHeight = parentTransform.height;
            const currentRatio = parentWidth / parentHeight;

            let newWidth, newHeight;

            if (this.isHold && currentRatio < this.aspectRatio) {
                uiTransform.setContentSize(parentTransform.contentSize.x, parentTransform.contentSize.y);
                return; // Maintain current size when holding and ratio is exceeded
            }

            if (this.isFollowWidth && !this.isFollowHeight) {
                newWidth = parentTransform.width;
                newHeight = newWidth / this.aspectRatio;
            } else if (this.isFollowHeight && !this.isFollowWidth) {
                newHeight = parentTransform.height;
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

            uiTransform.setContentSize(newWidth, newHeight);
        }
    }


}

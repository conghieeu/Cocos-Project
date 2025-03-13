import { _decorator, Component, Node, UITransform } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass("AspectRatioFitter")
@executeInEditMode
export class AspectRatioFitter extends Component {
  @property
  public aspectRatio: number = 1.0; // Tỷ lệ khung hình mong muốn (width / height)

  @property
  public isFollowWidth: boolean = true; // Theo chiều rộng hay chiều cao

  @property
  public isFollowHeight: boolean = false; // Theo chiều rộng hay chiều cao

  onLoad() {
    this.updateAspectRatio();
  }

  onEnable() {
    this.updateAspectRatio();
  }

  updateAspectRatio() {
    const parent = this.node.parent;
    if (!parent) return;

    const parentTransform = parent.getComponent(UITransform);
    const uiTransform = this.node.getComponent(UITransform);

    if (parentTransform && uiTransform) {
      const parentWidth = parentTransform.width;
      const parentHeight = parentTransform.height;

      let newWidth, newHeight;

      if (this.isFollowWidth && this.isFollowHeight == false) {
        newWidth = parentTransform.width;
        newHeight = newWidth / this.aspectRatio;
      } else if (this.isFollowHeight && this.isFollowWidth == false) {
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

  update(deltaTime: number) {
    // Nếu bạn muốn cập nhật tỷ lệ khung hình mỗi frame, bạn có thể gọi updateAspectRatio() ở đây
    this.updateAspectRatio();
  }
}

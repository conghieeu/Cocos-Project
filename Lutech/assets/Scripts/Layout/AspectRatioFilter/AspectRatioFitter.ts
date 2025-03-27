import { _decorator, Component, Node, UITransform, Vec2, Enum, Mat4, math } from "cc";
import { MoveLayoutToCenter } from "../MoveLayoutToCenter";
const { ccclass, property, executeInEditMode, requireComponent } = _decorator;

enum AspectMode {
  None,
  FitInside,  // Giữ tỷ lệ khung hình mong muốn
  FitOutside, // Giữ tỷ lệ khung hình mong muốn
}

@ccclass("AspectRatioFitter")
@executeInEditMode
@requireComponent(MoveLayoutToCenter)
export class AspectRatioFitter extends Component {
  @property
  public aspectRatio: number = 1.0; // Tỷ lệ khung hình mong muốn (width / height)

  @property
  public isFollowWidth: boolean = true; // Theo chiều rộng hay chiều cao

  @property
  public isFollowHeight: boolean = true; // Theo chiều rộng hay chiều cao

  @property({ type: Enum(AspectMode) })
  public aspectMode: AspectMode = AspectMode.FitInside; // Chế độ tỷ lệ khung hình mong muốn

  protected onEnable(): void {
    this.getAspectRatio();
  }

  update(deltaTime: number) {
    if (this.aspectMode == AspectMode.FitInside) {
      this.InsideAspectRatio();
    }
    else if (this.aspectMode == AspectMode.FitOutside) {
      this.OutsideAspectRatio();
    }
  }

  getAspectRatio() {
    const uiTransform = this.node.getComponent(UITransform);
    if (uiTransform) {
      // Tính toán tỷ lệ dựa trên kích thước thực của đối tượng sau khi xoay
      const bounds = uiTransform.getBoundingBox();
      this.aspectRatio = bounds.width / bounds.height;
    }
  }

  getRotatedDimensions(width: number, height: number, rotation: number): { width: number, height: number } {
    // Chuyển đổi góc sang radian
    const rad = math.toRadian(rotation);
    const cos = Math.abs(Math.cos(rad));
    const sin = Math.abs(Math.sin(rad));
    
    // Tính toán kích thước sau khi xoay
    const rotatedWidth = width * cos + height * sin;
    const rotatedHeight = width * sin + height * cos;
    
    return { width: rotatedWidth, height: rotatedHeight };
  }

  InsideAspectRatio() {
    const parent = this.node.parent;
    if (!parent) return;

    const parentTransform = parent.getComponent(UITransform);
    const uiTransform = this.node.getComponent(UITransform);

    if (parentTransform && uiTransform) {
      // Lấy kích thước thực của parent sau khi xoay
      const parentRotation = parent.eulerAngles.z;
      const rotatedParent = this.getRotatedDimensions(
        parentTransform.width,
        parentTransform.height,
        parentRotation
      );

      let newWidth, newHeight;

      if (this.isFollowWidth && !this.isFollowHeight) {
        newWidth = rotatedParent.width;
        newHeight = newWidth / this.aspectRatio;
      } else if (this.isFollowHeight && !this.isFollowWidth) {
        newHeight = rotatedParent.height;
        newWidth = newHeight * this.aspectRatio;
      } else if (this.isFollowWidth && this.isFollowHeight) {
        if (rotatedParent.width / rotatedParent.height < this.aspectRatio) {
          newWidth = rotatedParent.width;
          newHeight = newWidth / this.aspectRatio;
        } else {
          newHeight = rotatedParent.height;
          newWidth = newHeight * this.aspectRatio;
        }
      }

      // Điều chỉnh kích thước ngược lại để phù hợp với góc xoay
      const nodeRotation = this.node.eulerAngles.z;
      const adjustedDimensions = this.getRotatedDimensions(
        newWidth,
        newHeight,
        -nodeRotation // Sử dụng góc âm để điều chỉnh ngược lại
      );

      uiTransform.setContentSize(adjustedDimensions.width, adjustedDimensions.height);
    }
  }

  OutsideAspectRatio() {
    const parent = this.node.parent;
    if (!parent) return;

    const parentTransform = parent.getComponent(UITransform);
    const uiTransform = this.node.getComponent(UITransform);

    if (parentTransform && uiTransform) {
      // Lấy kích thước thực của parent sau khi xoay
      const parentRotation = parent.eulerAngles.z;
      const rotatedParent = this.getRotatedDimensions(
        parentTransform.width,
        parentTransform.height,
        parentRotation
      );

      let newWidth, newHeight;

      if (this.isFollowWidth && !this.isFollowHeight) {
        newWidth = rotatedParent.width;
        newHeight = newWidth / this.aspectRatio;
      } else if (this.isFollowHeight && !this.isFollowWidth) {
        newHeight = rotatedParent.height;
        newWidth = newHeight * this.aspectRatio;
      } else if (this.isFollowWidth && this.isFollowHeight) {
        if (rotatedParent.width / rotatedParent.height > this.aspectRatio) {
          newWidth = rotatedParent.width;
          newHeight = newWidth / this.aspectRatio;
        } else {
          newHeight = rotatedParent.height;
          newWidth = newHeight * this.aspectRatio;
        }
      }

      // Điều chỉnh kích thước ngược lại để phù hợp với góc xoay
      const nodeRotation = this.node.eulerAngles.z;
      const adjustedDimensions = this.getRotatedDimensions(
        newWidth,
        newHeight,
        -nodeRotation // Sử dụng góc âm để điều chỉnh ngược lại
      );

      uiTransform.setContentSize(adjustedDimensions.width, adjustedDimensions.height);
    }
  }
}
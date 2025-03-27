/*
* Chưa hoạt động được
* đây là một component layout tự động sắp xếp các childen con của nó
*/

import { _decorator, Component, Node, Enum, Vec3, UITransform } from "cc";
const { ccclass, property, executeInEditMode} = _decorator;

// là sắp xếp các đối tượng childen theo thứ tự
enum SortType {
  None, // không sắp xếp không làm gì
  Horizontal, // thực hiện việc sắp xếp theo chiều dọc
  Vertical, // thực hiện sắp xếp theo chiều ngang
}

// tự động điều chỉnhh các children, set layout các children sao cho vừa khít với layout này đây là đối tượng cha chứa code
enum ResizeMode {
  None,
  Children, // các children của đối tượng này sẽ tính toán tỷ lệ layout phù hợp
}

@ccclass("AutoGridLayout")
@executeInEditMode
export class AutoGridLayout extends Component {
  @property({ type: Enum(SortType) })
  sortType: SortType = SortType.None;

  @property({ type: Enum(ResizeMode) })
  resizeMode: ResizeMode = ResizeMode.None;

  protected onLoad(): void {
    this.updateLayout();
  }

  update(deltaTime: number) {
    this.updateLayout();
  }

  updateLayout() {
    const children = this.node.children;

    if (this.sortType !== SortType.None) {
      this.sortChildren(children);
    }

    if (this.resizeMode === ResizeMode.Children) {
      this.resizeChildren(children);
    }
  }

  sortChildren(children: Node[]) {
    if (this.sortType === SortType.Horizontal) {
      children.sort((a, b) => a.position.x - b.position.x);
    } else if (this.sortType === SortType.Vertical) {
      children.sort((a, b) => a.position.y - b.position.y);
    }

    let offset = 0;
    for (const child of children) {
      if (this.sortType === SortType.Horizontal) {
        child.setPosition(new Vec3(offset, child.position.y, child.position.z));
        offset += child.getComponent(UITransform).width;
      } else if (this.sortType === SortType.Vertical) {
        child.setPosition(new Vec3(child.position.x, offset, child.position.z));
        offset += child.getComponent(UITransform).height;
      }
    }
  }

  resizeChildren(children: Node[]) {
    const parentTransform = this.node.getComponent(UITransform);
    const parentWidth = parentTransform.width;
    const parentHeight = parentTransform.height;

    for (const child of children) {
      const childTransform = child.getComponent(UITransform);
      childTransform.width = parentWidth / children.length;
      childTransform.height = parentHeight / children.length;
    }
  }
}

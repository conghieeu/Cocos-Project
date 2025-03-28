import { _decorator, Component, Node } from 'cc';
import { AutoScale } from "./AutoScale";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('AddAutoScale')
@executeInEditMode
export class AddAutoScale extends Component {
    // Mảng lưu trữ các node đã được thêm AutoScale
    @property({ type: [Node] })
    private nodesChildren: Node[] = [];

    start() {
        this.getNodesChildren();
        this.addAutoScaleToChildren();
    }

    protected onEnable(): void {
        this.addAutoScaleToChildren();
    }

    protected onDisable(): void {
        this.removeAutoScaleFromChildren();
    }

    private getNodesChildren() {
        // Lặp qua tất cả các child nodes
        this.node.children.forEach(child => {
            // Kiểm tra nếu node chưa có trong danh sách đã thêm
            if (this.nodesChildren.indexOf(child) === -1) {
                // Thêm node vào danh sách
                this.nodesChildren.push(child);
            }
        });
    }

    private addAutoScaleToChildren() {
        this.nodesChildren.forEach(child => {
            if (!child.getComponent(AutoScale)) {
                child.addComponent(AutoScale);
            }
        });
    }

    private removeAutoScaleFromChildren() {
        this.nodesChildren.forEach(node => {
            if (node?.isValid) {
                node.removeComponent('AutoScale');
            }
        });
    }
}

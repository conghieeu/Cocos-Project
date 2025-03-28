declare const cc: any;
const { _decorator, Component, Node } = cc;
const { ccclass, property } = _decorator;

/**
 * Quản lý hiển thị các node dựa trên tỷ lệ khung hình (aspect ratio) của màn hình.
 * 
 * Tính năng:
 * - Tự động kiểm tra tỷ lệ màn hình (width/height)
 * - Hiển thị/ẩn các node dựa trên tỷ lệ màn hình:
 *   + Khi ratio >= 1 (màn hình ngang): hiển thị nodeWidth, ẩn nodeHeight
 *   + Khi ratio < 1 (màn hình dọc): hiển thị nodeHeight, ẩn nodeWidth
 * 
 * @example
 * // Cách sử dụng:
 * // 1. Thêm component vào một node
 * // 2. Kéo các node cần hiển thị khi màn hình ngang vào nodeWidth
 * // 3. Kéo các node cần hiển thị khi màn hình dọc vào nodeHeight
 */


@ccclass('AspectRatioManager')
export class AspectRatioManager extends Component {
    @property({ type: [Node], tooltip: "Danh sách node sẽ được active khi ratio >= 1 (màn hình ngang)" })
    nodeWidth: Node[] = [];

    @property({ type: [Node], tooltip: "Danh sách node sẽ được active khi ratio < 1 (màn hình dọc)" })
    nodeHeight: Node[] = [];

    @property({ tooltip: "Tỷ lệ khung hình tối thiểu" })
    minRate: number = 1; 

    update(deltaTime: number) {
        const ratio = this.getRate();
        if (ratio < this.minRate) {
            this.setActiveNodes(this.nodeWidth, false);
            this.setActiveNodes(this.nodeHeight, true);
        } else {
            this.setActiveNodes(this.nodeWidth, true);
            this.setActiveNodes(this.nodeHeight, false);
        }
    }

    private setActiveNodes(nodes: Node[], isActive: boolean) {
        nodes.forEach(node => {
            if (node) {
                node.active = isActive; // Assuming 'Node' is 'cc.Node' which has the 'active' property
            }
        });
    }

    getRate(): number {
        // Get real-time window dimensions
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return width / height;
    }
}



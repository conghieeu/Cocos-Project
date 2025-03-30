const {ccclass, property} = cc._decorator;

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


@ccclass
export class AspectRatioManager extends cc.Component {
    @property({
        type: [cc.Node],
        tooltip: "Danh sách node sẽ được active khi ratio >= 1 (màn hình ngang)"
    })
    nodeWidth: cc.Node[] = [];

    @property({
        type: [cc.Node],
        tooltip: "Danh sách node sẽ được active khi ratio < 1 (màn hình dọc)"
    })
    nodeHeight: cc.Node[] = [];

    @property({
        tooltip: "Tỷ lệ khung hình tối thiểu"
    })
    minRate: number = 1;

    onLoad() {
        // Initial check
        this.updateNodeVisibility();
        
        // Listen for canvas resize events
        cc.view.on('canvas-resize', this.updateNodeVisibility, this);
    }

    onDestroy() {
        // Clean up listener
        cc.view.off('canvas-resize', this.updateNodeVisibility, this);
    }

    updateNodeVisibility() {
        const ratio = this.getRate();
        if (ratio < this.minRate) {
            this.setActiveNodes(this.nodeWidth, false);
            this.setActiveNodes(this.nodeHeight, true);
        } else {
            this.setActiveNodes(this.nodeWidth, true);
            this.setActiveNodes(this.nodeHeight, false);
        }
    }

    private setActiveNodes(nodes: cc.Node[], isActive: boolean) {
        nodes.forEach(node => {
            if (node && cc.isValid(node)) {
                node.active = isActive;
            }
        });
    }

    getRate(): number {
        const canvas = cc.game.canvas;
        const width = canvas.width;
        const height = canvas.height;
        return width / height;
    }
}



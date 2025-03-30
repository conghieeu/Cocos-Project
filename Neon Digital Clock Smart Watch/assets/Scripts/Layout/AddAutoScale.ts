const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class AddAutoScale extends cc.Component {
    // Mảng lưu trữ các node đã được thêm AutoScale
    @property({ 
        type: [cc.Node],
        tooltip: "Danh sách các node con cần thêm AutoScale"
    })
    private nodesChildren: cc.Node[] = [];

    start() {
        this.getNodesChildren();
        this.addAutoScaleToChildren();
    }

    onEnable() {
        this.addAutoScaleToChildren();
    }

    onDisable() {
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
            if (child && cc.isValid(child)) {
                let autoScale = child.getComponent('AutoScale');
                if (!autoScale) {
                    child.addComponent('AutoScale');
                }
            }
        });
    }

    private removeAutoScaleFromChildren() {
        this.nodesChildren.forEach(child => {
            if (child && cc.isValid(child)) {
                let autoScale = child.getComponent('AutoScale');
                if (autoScale) {
                    child.removeComponent('AutoScale');
                }
            }
        });
    }
}

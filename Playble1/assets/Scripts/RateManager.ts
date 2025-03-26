import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RateManager')
export class RateManager extends Component {

    // danh sách node sẽ được active 
    @property({ type: [Node], tooltip: "Danh sách node sẽ được active khi ratio >= 1" })
    nodeWidth: Node[] = [];

    @property({ type: [Node], tooltip: "Danh sách node sẽ được active khi ratio < 1" })
    nodeHeight: Node[] = [];

    start() {
        console.log("Test");

    }

    update(deltaTime: number) {
        const ratio = this.getRate();
        if (ratio < 1) {
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
                node.active = isActive;
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



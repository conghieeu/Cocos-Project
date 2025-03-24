import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RateManager')
export class RateManager extends Component {

    @property({ type: Node, tooltip: "Node cha" })
    LayoutGroup: Node;

    @property({ type: Node, tooltip: "Node cha" })
    Left_Layout: Node;

    @property({ type: Node, tooltip: "Node cha" })
    LayoutGroup2: Node;

    start() {
        console.log("Test");
        this.LayoutGroup.active = false;
        this.Left_Layout.active = false;
    }

    update(deltaTime: number) {
        const ratio = this.getRate();
        if (ratio < 1) {
            if (this.LayoutGroup) {
                this.LayoutGroup.active = false;
            }

            if (this.Left_Layout) {
                this.Left_Layout.active = false;
            }

            if (this.LayoutGroup2) {
                this.LayoutGroup2.active = true;
            }
        } else {
            if (this.LayoutGroup) {
                this.LayoutGroup.active = true;
            }
            if (this.Left_Layout) {
                this.Left_Layout.active = true;
            }

            if (this.LayoutGroup2) {
                this.LayoutGroup2.active = false;
            }
        }
    }

    getRate(): number {
        // Get real-time window dimensions
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return width / height;
    }
}



const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class VerticalLayout extends cc.Component {
    @property({ 
        type: cc.Float, 
        tooltip: "Khoảng cách giữa các phần tử con",
        min: 0 
    })
    spacing: number = 10;

    start() {
        // In 2.4.3, anchor point is set directly on the node
        this.node.anchorX = 0;
        this.node.anchorY = 0;
        this.updateLayout();
    }

    update() {
        this.updateLayout();
    }

    private updateLayout() {
        const width = this.node.width;
        const height = this.getChildHeight();

        for (let child of this.node.children) {
            // Set content size directly on node in 2.4.3
            child.width = width;
            child.height = height;
        }

        let newPos = cc.v3(0, 0, 0);
        // set vị trí cho các child
        for (let i = 0; i < this.node.children.length; i++) {
            let child = this.node.children[i];
            // Set anchor point directly on node
            child.anchorX = 0;
            child.anchorY = 0;
            child.setPosition(newPos);

            newPos.y += height + this.getSpacing();
        }
    }

    private getSpacing(): number {
        let count = this.node.children.length;
        return (this.spacing * (count - 1)) / count;
    }

    // chiều dài của các child cần để khít với cha
    private getChildHeight(): number {
        let count = this.node.children.length;
        return (this.node.height - (this.getSpacing() * (count - 1))) / count;
    }

}

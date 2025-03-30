/*
* đây là một component layout dạng vertical không scale tự động
*/
const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class VerticalLayoutNoScale extends cc.Component {
    @property({tooltip: "Tự động cập nhật trong runtime"})
    autoUpdate = true;

    // danh sách vector2 đây là danh sách size của các child con lúc ban đầu
    @property({
        type: [cc.Vec2],
        // visible: false
    })
    private childSize: cc.Vec2[] = [];

    start() {
        this.initChildSize();
        
        // In 2.4.3, set anchor points directly on nodes
        this.node.anchorX = 0;
        this.node.anchorY = 0;

        this.updateLayout();

        // set anchor point cho các child
        for (let child of this.node.children) {
            child.anchorX = 0;
            child.anchorY = 0;
        }
    }

    resetInEditor() {
        this.initChildSize();
        this.autoUpdate = true;
    }

    update() {
        if (!this.autoUpdate) {
            this.updateLayout();
        }
    }

    private initChildSize() {
        this.childSize = [];
        for (let child of this.node.children) {
            this.childSize.push(cc.v2(child.width, child.height));
        }
    }

    private updateLayout() {
        const width = this.node.width;
        const height = this.getChildHeight();

        // để vị trí child cuối lênh trên đầu
        let lastChild = this.node.children[this.node.children.length - 1];
        let lastChildPositionY = this.node.height - lastChild.height;
        this.node.children[this.node.children.length - 1].setPosition(cc.v2(0, lastChildPositionY));

        // set vị trí cho các child
        let newPos = cc.v2(0, 0);
        for (let i = 0; i < this.node.children.length - 1; i++) {
            let child = this.node.children[i];
            child.setPosition(newPos);

            newPos.y += height;
        }

        // tự scale y khi các phần tử con đè lênh nhau
        for (let i = 0; i < this.node.children.length; i++) {
            let child = this.node.children[i];
            child.width = width;
        }
    }

    // chiều dài của các child cần để khít với cha
    private getChildHeight(): number {
        let count = this.node.children.length;
        return this.node.height / count;
    }
}

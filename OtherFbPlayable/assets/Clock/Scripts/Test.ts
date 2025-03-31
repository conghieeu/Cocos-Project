declare const cc: any;
const { _decorator, Component, Node, Label } = cc;
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    // Hiển thị biến private trong Inspector
    @property
    private _count: number = 0;

    // Hiển thị public trong Inspector
    @property({ tooltip: "Tốc độ thay đổi giá trị" })
    public increment: number = 1;

    // Tham chiếu đến node Label (kéo thả trong Inspector)
    @property(Label)
    public countLabel: typeof Label | null = null;

    // Hàm khởi tạo
    start() {
        this.updateLabel();
    }

    // Hàm cập nhật label
    private updateLabel() {
        if (this.countLabel) {
            this.countLabel.string = `Count: ${this._count}`;
        }
    }

    // Hàm có thể gọi từ Inspector thông qua button
    public increaseCount() {
        this._count += this.increment;
        this.updateLabel();
        console.log("Count increased to:", this._count);
    }

    // Hàm reset
    public resetCount() {
        this._count = 0;
        this.updateLabel();
        console.log("Count reset");
    }
}

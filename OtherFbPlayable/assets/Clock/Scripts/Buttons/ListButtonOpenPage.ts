const { ccclass, property } = cc._decorator;

@ccclass
export default class ListButtonOpenPage extends cc.Component {

    @property(cc.Node)
    testbutton: cc.Node = null;

    @property({
        type: [cc.Node],
        tooltip: "Danh sách các button sẽ mở cùng một URL"
    })
    buttons: cc.Node[] = [];

    @property({
        type: cc.String,
        tooltip: "URL sẽ được mở khi nhấn bất kỳ button nào"
    })
    url: string = 'https://example.com';

    @property({
        type: cc.Float,
        tooltip: "Thời gian delay trước khi mở link (giây)"
    })
    delayTime: number = 1.0;

    start(): void {
        // kiểm tra test button đươc nhấn chưa
        this.testbutton.on(cc.Node.EventType.TOUCH_END, this.handleButtonClick, this);
    }

    protected onEnable(): void {
        console.log("[ListButtonOpenPage] Starting setup");
    }

    private handleButtonClick() {
        console.log("[ListButtonOpenPage] Button clicked, will open URL:", this.url);
        // delay trước khi mở link
        this.scheduleOnce(() => {
            window.open(this.url, '_blank');
        }, this.delayTime);
    }

}

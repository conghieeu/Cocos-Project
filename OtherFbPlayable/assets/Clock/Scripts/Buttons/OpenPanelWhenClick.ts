declare const cc: any;
const { _decorator, Component, Node } = cc;
const { ccclass, property } = _decorator;

@ccclass('OpenPanelWhenClick')
export class OpenPanelWhenClick extends Component {
    @property({ tooltip: "URL to open after delay" })
    url: string = 'https://example.com';

    @property({ tooltip: "Delay time in seconds before opening URL" })
    delayTime: number = 0;

    start() {
        // Kiểm tra node có hợp lệ không trước khi đăng ký sự kiện
        if (this.node && cc.isValid(this.node)) {
            this.node.on(Node.EventType.TOUCH_END, this.openPanel, this);
        }
    }

    openPanel() {
        // Kiểm tra node có hợp lệ không và URL có tồn tại không
        if (this.node && cc.isValid(this.node) && this.url && this.url !== '') {
            this.scheduleOnce(() => {
                try {
                    window.open(this.url, '_blank');
                } catch (error) {
                    cc.error('Failed to open URL:', error);
                }
            }, this.delayTime);
        }
    }
    
}



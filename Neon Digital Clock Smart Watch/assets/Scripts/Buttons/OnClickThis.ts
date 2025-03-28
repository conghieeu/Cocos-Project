declare const cc: any;
const { _decorator, Component, Node, Button } = cc;
const { ccclass, property } = _decorator;

@ccclass('OnClickThis')
export class OnClickThis extends Component {
    start() {
        const button = this.getComponent(Button);
        if (button) {
            button.node.on('click', this.onClick, this);
        }
    }

    onClick() {
        // Button click logic here
    }

    onDestroy() {
        const button = this.getComponent(Button);
        if (button) {
            button.node.off('click', this.onClick, this);
        }
    }
}



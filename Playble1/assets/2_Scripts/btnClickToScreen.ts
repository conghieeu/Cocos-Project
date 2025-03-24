import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('btnClickToScreen')
export class btnClickToScreen extends Component {
    start() {
        this.node.on('click', this.onClick, this);
    }
    
    onClick() {
        window.open('https://www.google.com', '_blank');
    }
}
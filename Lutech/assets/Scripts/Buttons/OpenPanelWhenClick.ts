import { _decorator, Component, Node, Animation, AnimationClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OnClickThis')
export class OnClickThis extends Component {
    @property({ type: [Node], tooltip: "Danh sách node sẽ được active khi click" })
    nodesToActive: Node[] = [];

    @property({ type: [Node], tooltip: "Danh sách node sẽ được disable khi click" })
    nodesToDisable: Node[] = [];

    @property({ type: [Node], tooltip: "Danh sách animation sẽ được play khi click" })
    nodesToAnimation: Node[] = [];

    @property({ tooltip: "Đường dẫn đến trang web" })
    url: string = '';

    isAnimationPlaying = false;

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onClick, this);
    }

    onClick() {
        // Kích hoạt các node trong mảng nodesToActive
        this.nodesToActive.forEach(node => {
            if (node) {
                node.active = true;
            }
        });

        // Tắt các node trong mảng nodesToDisable
        this.nodesToDisable.forEach(node => {
            if (node) {
                node.active = false;
            }
        });

        // Play các animation trong mảng animationPlayOnClick
        this.nodesToAnimation.forEach(node => {
            if (node) {
                const anim = node.getComponent(Animation);
                if (anim && !this.isAnimationPlaying) {
                    // Set animation to play only once
                    anim.play();
                    this.isAnimationPlaying = true;
                }
            }
        });

        // Mở trang web
        if (this.url !== '') {
            window.open(this.url, '_blank');
        }
    }

    onDestroy() {
        // Cleanup event listener
        this.node.off(Node.EventType.TOUCH_START, this.onClick, this);
    }
}



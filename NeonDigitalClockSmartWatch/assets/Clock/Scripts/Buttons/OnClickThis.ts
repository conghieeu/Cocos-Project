const {ccclass, property} = cc._decorator;

@ccclass
export default class OnClickThis extends cc.Component {
    @property({ 
        type: [cc.Node], 
        tooltip: "Danh sách node sẽ được active khi click" 
    })
    nodesToActive: cc.Node[] = [];

    @property({ 
        type: [cc.Node], 
        tooltip: "Danh sách node sẽ được disable khi click" 
    })
    nodesToDisable: cc.Node[] = [];

    @property({ 
        type: [cc.Node], 
        tooltip: "Danh sách animation sẽ được play khi click" 
    })
    nodesToAnimation: cc.Node[] = [];

    private isAnimationPlaying: boolean = false;

    onLoad() {
        this.addClickEvent();
    }

    private addClickEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
    }

    private onClick() {
        // Kích hoạt các node trong mảng nodesToActive
        this.nodesToActive.forEach(node => {
            if (node && cc.isValid(node)) {
                node.active = true;
            }
        });

        // Tắt các node trong mảng nodesToDisable
        this.nodesToDisable.forEach(node => {
            if (node && cc.isValid(node)) {
                node.active = false;
            }
        });

        // Play các animation trong mảng animationPlayOnClick
        this.nodesToAnimation.forEach(node => {
            if (node && cc.isValid(node)) {
                const anim = node.getComponent(cc.Animation);
                if (anim && !this.isAnimationPlaying) {
                    anim.play();
                    this.isAnimationPlaying = true;
                    
                    // Reset flag when animation finishes
                    anim.on('finished', () => {
                        this.isAnimationPlaying = false;
                    }, this);
                }
            }
        });
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
        
        // Clean up animation listeners
        this.nodesToAnimation.forEach(node => {
            if (node && cc.isValid(node)) {
                const anim = node.getComponent(cc.Animation);
                if (anim) {
                    anim.off('finished');
                }
            }
        });
    }
}
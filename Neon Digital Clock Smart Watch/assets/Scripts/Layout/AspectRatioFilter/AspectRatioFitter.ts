declare const cc: any;
const { _decorator, Component, Node, UITransform, view } = cc;
const { ccclass, property } = _decorator;

@ccclass('AspectRatioFitter')
export class AspectRatioFitter extends Component {
    @property
    private targetAspectRatio: number = 16/9;

    start() {
        this.updateAspectRatio();
        view.on('canvas-resize', this.updateAspectRatio, this);
    }

    private updateAspectRatio() {
        const uiTransform = this.node.getComponent(UITransform);
        if (uiTransform) {
            const currentRatio = uiTransform.width / uiTransform.height;
            if (currentRatio !== this.targetAspectRatio) {
                // Adjust size logic here
            }
        }
    }

    onDestroy() {
        view.off('canvas-resize', this.updateAspectRatio, this);
    }
}

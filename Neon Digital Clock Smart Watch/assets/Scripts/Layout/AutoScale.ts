declare const cc: any;
const { _decorator, Component, Node, UITransform, view } = cc;
const { ccclass, property } = _decorator;

@ccclass('AutoScale')
export class AutoScale extends Component {
    @property
    private referenceResolution: { width: number, height: number } = { width: 1920, height: 1080 };

    start() {
        this.updateScale();
        view.on('canvas-resize', this.updateScale, this);
    }

    private updateScale() {
        const uiTransform = this.node.getComponent(UITransform);
        if (uiTransform) {
            // Scale calculation logic here
        }
    }

    onDestroy() {
        view.off('canvas-resize', this.updateScale, this);
    }
}



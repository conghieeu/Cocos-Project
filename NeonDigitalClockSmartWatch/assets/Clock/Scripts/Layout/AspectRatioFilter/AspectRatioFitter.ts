import { MoveLayoutToCenter } from '../MoveLayoutToCenter';
const { ccclass, property, executeInEditMode } = cc._decorator;

enum AspectMode {
    None = 0,
    FitInside = 1,  // Giữ tỷ lệ khung hình mong muốn
    FitOutside = 2, // Giữ tỷ lệ khung hình mong muốn
}

@ccclass
@executeInEditMode
export default class AspectRatioFitter extends cc.Component {
    @property
    aspectRatio: number = 1.0;

    @property
    isFollowWidth: boolean = true;

    @property
    isFollowHeight: boolean = true;

    @property({
        type: cc.Enum(AspectMode)
    })
    aspectMode: AspectMode = AspectMode.FitInside;

    start() {
        MoveLayoutToCenter.ensureComponent(this.node);
    }

    onEnable() {
        this.getAspectRatio();
    }

    update() {
        if (this.aspectMode == AspectMode.FitInside) {
            this.InsideAspectRatio();
        }
        else if (this.aspectMode == AspectMode.FitOutside) {
            this.OutsideAspectRatio();
        }
    }

    getAspectRatio() {
        if (this.node) {
            const bounds = this.node.getBoundingBox();
            this.aspectRatio = bounds.width / bounds.height;
        }
    }

    getRotatedDimensions(width: number, height: number, angle: number): { width: number, height: number } {
        const rad = angle * Math.PI / 180;
        const cos = Math.abs(Math.cos(rad));
        const sin = Math.abs(Math.sin(rad));

        const rotatedWidth = width * cos + height * sin;
        const rotatedHeight = width * sin + height * cos;

        return { width: rotatedWidth, height: rotatedHeight };
    }

    InsideAspectRatio() {
        const parent = this.node.parent;
        if (!parent) return;

        const parentAngle = -parent.angle;
        const rotatedParent = this.getRotatedDimensions(
            parent.width,
            parent.height,
            parentAngle
        );

        let newWidth, newHeight;

        if (this.isFollowWidth && !this.isFollowHeight) {
            newWidth = rotatedParent.width;
            newHeight = newWidth / this.aspectRatio;
        } else if (this.isFollowHeight && !this.isFollowWidth) {
            newHeight = rotatedParent.height;
            newWidth = newHeight * this.aspectRatio;
        } else if (this.isFollowWidth && this.isFollowHeight) {
            if (rotatedParent.width / rotatedParent.height < this.aspectRatio) {
                newWidth = rotatedParent.width;
                newHeight = newWidth / this.aspectRatio;
            } else {
                newHeight = rotatedParent.height;
                newWidth = newHeight * this.aspectRatio;
            }
        }

        const nodeAngle = -this.node.angle;
        const adjustedDimensions = this.getRotatedDimensions(
            newWidth,
            newHeight,
            -nodeAngle
        );

        this.node.width = adjustedDimensions.width;
        this.node.height = adjustedDimensions.height;
    }

    OutsideAspectRatio() {
        const parent = this.node.parent;
        if (!parent) return;

        const parentAngle = -parent.angle;
        const rotatedParent = this.getRotatedDimensions(
            parent.width,
            parent.height,
            parentAngle
        );

        let newWidth, newHeight;

        if (this.isFollowWidth && !this.isFollowHeight) {
            newWidth = rotatedParent.width;
            newHeight = newWidth / this.aspectRatio;
        } else if (this.isFollowHeight && !this.isFollowWidth) {
            newHeight = rotatedParent.height;
            newWidth = newHeight * this.aspectRatio;
        } else if (this.isFollowWidth && this.isFollowHeight) {
            if (rotatedParent.width / rotatedParent.height > this.aspectRatio) {
                newWidth = rotatedParent.width;
                newHeight = newWidth / this.aspectRatio;
            } else {
                newHeight = rotatedParent.height;
                newWidth = newHeight * this.aspectRatio;
            }
        }

        const nodeAngle = -this.node.angle;
        const adjustedDimensions = this.getRotatedDimensions(
            newWidth,
            newHeight,
            -nodeAngle
        );

        this.node.width = adjustedDimensions.width;
        this.node.height = adjustedDimensions.height;
    }
}

const {ccclass, property} = cc._decorator;

@ccclass
export class PlayAnimationClips extends cc.Component {
    @property(cc.Animation)
    private anim: cc.Animation = null;

    private currentClipIndex: number = 0;

    @property({ type: cc.Integer, tooltip: "Clip sẽ được lập đi lập lại khi mảng hết" })
    clipLoopIndex: number = 0;

    onLoad() {
        if (this.anim) {
            this.anim.on('finished', this.onAnimationFinished, this);
            this.playCurrentClip();
        }
    }

    private playCurrentClip() {
        const clips = this.anim.getClips();
        if (!clips || clips.length === 0) return;

        if (this.currentClipIndex >= clips.length) {
            this.currentClipIndex = this.clipLoopIndex; // Quay lại clip được chỉ định
        }

        const clipName = clips[this.currentClipIndex].name;
        if (clipName && cc.isValid(this.anim)) {
            this.anim.play(clipName);
        }
    }

    private onAnimationFinished() {
        this.currentClipIndex++;
        this.playCurrentClip();
    }

    onDestroy() {
        if (this.anim && cc.isValid(this.anim)) {
            this.anim.off('finished', this.onAnimationFinished, this);
        }
    }
}

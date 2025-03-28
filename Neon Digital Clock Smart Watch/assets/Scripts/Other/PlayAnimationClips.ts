import { _decorator, Component, Node, Animation, AnimationClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutoPlayClips')
export class AutoPlayClips extends Component {
    @property(Animation)
    private anim: Animation = null;

    private currentClipIndex: number = 0;

    @property({ type: Number, tooltip: "Clip sẽ được lập đi lập lại khi mảng hết" })
    clipLoopIndex: number = 0;

    start() {
        if (this.anim) {
            this.anim.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
            this.playCurrentClip();
        }
    }

    private playCurrentClip() {
        const clips = this.anim.clips;
        if (clips.length > 0) {
            if (this.currentClipIndex >= clips.length) {
                this.currentClipIndex = this.clipLoopIndex; // Quay lại clip được chỉ định
            }
            this.anim.play(clips[this.currentClipIndex].name);
        }
    }

    private onAnimationFinished() {
        this.currentClipIndex++;
        this.playCurrentClip();
    }

    onDestroy() {
        if (this.anim) {
            this.anim.off(Animation.EventType.FINISHED, this.onAnimationFinished, this);
        }
    }
}

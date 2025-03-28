import { _decorator, Component, Node, Animation, AnimationClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayAnimationClips')
export class PlayAnimationClips extends Component {
    @property(Animation)
    private anim: Animation = null;

    private currentClipIndex: number = 0;

    start() {
        if (this.anim) {
            // Lắng nghe sự kiện khi animation kết thúc
            this.anim.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
            // Play animation đầu tiên
            this.playCurrentClip();
        }
    }

    private playCurrentClip() {
        const clips = this.anim.clips;
        if (clips.length > 0) {
            if (this.currentClipIndex >= clips.length) {
                this.currentClipIndex = 0; // Quay lại clip đầu tiên nếu đã hết
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
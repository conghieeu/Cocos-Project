const {ccclass, property} = cc._decorator;

@ccclass
export class AutoPlayClips extends cc.Component {
    @property(cc.Animation)
    private anim: cc.Animation = null;

    private currentClipIndex: number = 0;

    onLoad() {
        if (this.anim) {
            // Listen for animation finished event using Cocos 2.4.3 event system
            this.anim.on('finished', this.onAnimationFinished, this);
            // Play first animation
            this.playCurrentClip();
        }
    }

    private playCurrentClip() {
        if (!this.anim || !cc.isValid(this.anim)) return;

        const clips = this.anim.getClips();
        if (clips && clips.length > 0) {
            if (this.currentClipIndex >= clips.length) {
                this.currentClipIndex = 0; // Reset to first clip if we've reached the end
            }
            
            const clipName = clips[this.currentClipIndex].name;
            if (clipName) {
                this.anim.play(clipName);
            }
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

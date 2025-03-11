import { _decorator, Component, Node, VideoPlayer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('playVideo')
export class playVideo extends Component {
    @property(VideoPlayer)
    videoPlayer: VideoPlayer = null;

    start() {
        if (this.videoPlayer) {
            this.videoPlayer.play();
        }
    }

    update(deltaTime: number) {
        
    }
}
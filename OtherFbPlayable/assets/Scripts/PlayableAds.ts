declare const cc: any;
const { _decorator, Component, log, warn } = cc;
const { ccclass } = _decorator;

// Add interface for window object to avoid TypeScript errors
declare global {
    interface Window {
        gameReady?: () => void;
        gameStart?: () => void;
        gameEnd?: () => void;
        gameReplay?: () => void;
        install?: () => void;
    }
}

@ccclass('PlayableAds')
export class PlayableAds extends Component {

    start(): void {
        this.checkAPI();
        this.gameReady();
        this.startGame();
    }

    /** Kiểm tra xem API Playturbo có tồn tại không */
    private checkAPI(): void {
        if (typeof window !== 'undefined') {
            log("Checking Playturbo API...");
            log("gameStart exists:", typeof window.gameStart !== 'undefined');
            log("gameEnd exists:", typeof window.gameEnd !== 'undefined');
            log("gameReplay exists:", typeof window.gameReplay !== 'undefined');
            log("install exists:", typeof window.install !== 'undefined');
        }
    }

    /** Gọi khi game sẵn sàng */
    public gameReady(): void {
        if (typeof window !== 'undefined' && window.gameReady) {
            window.gameReady();
            log("Game is ready!");
        } else {
            warn("gameReady API không tồn tại!");
        }
    }

    /** Gọi khi người chơi bắt đầu chơi */
    public startGame(): void {
        if (typeof window !== 'undefined' && window.gameStart) {
            window.gameStart();
            log("Game Start!");
        } else {
            warn("gameStart API không tồn tại!");
        }
    }

    /** Gọi khi người chơi kết thúc game (win/lose) */
    public endGame(): void {
        if (typeof window !== 'undefined' && window.gameEnd) {
            window.gameEnd();
            log(" Game End!");
        } else {
            warn("gameEnd API không tồn tại!");
        }
    }

    /** Gọi khi người chơi bấm chơi lại */
    public replayGame(): void {
        if (typeof window !== 'undefined' && window.gameReplay) {
            window.gameReplay();
            log("Game Replay!");
        } else {
            warn("gameReplay API không tồn tại!");
        }
    }

    /** Gọi khi người chơi bấm tải game */
    public installGame(): void {
        if (typeof window !== 'undefined' && window.install) {
            window.install();
            log("Install Clicked!");
        } else {
            warn("install API không tồn tại!");
        }
    }
}
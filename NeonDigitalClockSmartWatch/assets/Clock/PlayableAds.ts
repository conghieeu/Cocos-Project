const {ccclass, property} = cc._decorator;

// Định nghĩa các global functions trước khi class được khởi tạo
declare global {
    interface Window {
        gameStart: () => void;
        gameClose: () => void;
        gameReady: () => void;
        gameEnd: () => void;
        install: () => void;
        gameRetry: () => void;
    }
}

// Định nghĩa global functions
window.gameStart = function() {
    console.log("Game Started");
    // Thêm logic khởi đầu game ở đây (countdown, music, etc.)
};

window.gameClose = function() {
    console.log("Game Closed");
    // Xử lý logic khi game đóng (tắt nhạc, etc.)
};

@ccclass
export default class PlayableAds extends cc.Component {
    @property(cc.Node)
    downloadBtn: cc.Node | null = null;

    onLoad() {
        // Setup download button
        if (this.downloadBtn) {
            this.downloadBtn.on(cc.Node.EventType.TOUCH_END, () => {
                this.onGameInstall();
            }, this);
        }

        // Báo game đã sẵn sàng
        if (window.gameReady) {
            window.gameReady();
        }
    }

    public onGameInstall()
    {
        if (window.install) {
            window.install();
        }
    }

    // Gọi khi game kết thúc (thắng hoặc thua)
    public onGameFinished() {
        if (window.gameEnd) {
            window.gameEnd();
        }
    }

    // Gọi khi người chơi muốn chơi lại
    public onGameRetry() {
        if (window.gameRetry) {
            window.gameRetry();
        }
    }

    onDestroy() {
        if (this.downloadBtn) {
            this.downloadBtn.off(cc.Node.EventType.TOUCH_END);
        }
    }
}

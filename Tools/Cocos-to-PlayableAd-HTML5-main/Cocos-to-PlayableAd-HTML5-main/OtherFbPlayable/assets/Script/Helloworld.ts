const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    playSound:cc.AudioSource;
    start () {
        // init logic
        this.label.string = this.text;
        this.playSound = this.getComponent(cc.AudioSource);
        cc.resources.load<cc.ParticleAsset>("particle", cc.ParticleAsset, (err, asset: cc.ParticleAsset) => {
            console.log("asset:"+asset);
            let nodeParticle = new cc.Node("Particle");
            let particleComp: cc.ParticleSystem = nodeParticle.addComponent(cc.ParticleSystem);
            particleComp.file = asset;
            particleComp.resetSystem();
            this.node.addChild(nodeParticle);
        });
    }
    onBtnClick(){
        this.playSound.play();
        console.log("Click me");
    }
}

/* console.log("loaded correctly");

class Intro extends Phaser.Scene {
    create() {
       let r = this.add.rectangle(0, 0, 2000, 1000, 0x5A76EE);
       r.alpha = 0;
       
       //animate alpha from 0 to 1 in 2 seconds
       this.tweens.add({
        targets: r,
        alpha: 1,
        duration: 2000,
       })
    }
}
const game = new Phaser.Game({
    width: 1000,
    height: 500,
    scene: [Intro]
}); */
'use scrict';

const config = {
    width: 800,
    height: 600,
    scene: [ homeScreen, loadScreen, jumpScreen ]
}

const game = new Phaser.Game(config)
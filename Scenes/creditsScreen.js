class creditsScreen extends Phaser.Scene {
    constructor () {
        super ('creditsScreenScene')
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png')
    }

    create() {
        let backgroundImage = this.add.image(400, 300, 'background');
            backgroundImage.setScale(.5);
    }

    update() {

    }
}
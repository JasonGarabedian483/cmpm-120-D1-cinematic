class loadScreen extends Phaser.Scene {
    constructor () {
        super('loadScreenScene')
    }
// TODO: Add everything
    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png')
        this.load.image('character', 'char.png')
    }

    create() {
        let backgroundImage = this.add.image(400, 300, 'background');
        backgroundImage.setScale(.5);

    }

    update() {

    }
}
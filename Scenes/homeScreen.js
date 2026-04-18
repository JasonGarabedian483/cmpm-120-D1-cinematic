class homeScreen extends Phaser.Scene {
    constructor () {
        super ('homeScreenscene')
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png')
        this.load.image('title', 'title.png')
    }

    create () {
        let backgroundImage = this.add.image(400, 300, 'background');
        backgroundImage.setScale(.5);

        let titleImage = this.add.image(400, 150, 'title');
        titleImage.setScale(.2);


    }

    update() {
    }
}
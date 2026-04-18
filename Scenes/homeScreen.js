class homeScreen extends Phaser.Scene {
    constructor () {
        super ('homeScreenscene')
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png')
        this.load.image('title', 'title.png')
        this.load.image('play', 'play.png')
        this.load.image('options', 'options.png')
        this.load.image('quit', 'quit.png')
        this.load.audio('menuTheme', 'MTV Music Generator.mp3')
        this.load.image('character', 'char.png')
    }

    create () {
        let backgroundImage = this.add.image(400, 300, 'background');
        backgroundImage.setScale(.5);

        let titleImage = this.add.image(400, 150, 'title');
        titleImage.setScale(.2);

        let playImage = this.add.image(400, 300, 'play');
        playImage.setScale(.25);

        let optionImage = this.add.image(400, 375, 'options');
        optionImage.setScale(.25);

        let quitImage = this.add.image(400, 450, 'quit');
        quitImage.setScale(.25);

        let charImage = this.add.image(300, 300, 'character');
        charImage.setScale(.25);

        let menuTheme = this.sound.add('menuTheme');
        menuTheme.play();


    }

    update() {
    }
}
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
 // TODO: make menu icons fade into the screen before character pops up and selects play
    create () {
        let menuTheme = this.sound.add('menuTheme');
        menuTheme.play();

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

        let charImage = this.add.image(-200, 300, 'character');
        charImage.setScale(.25);

        this.tweens.add({
            delay: 2000,
            targets: charImage,
            x: 300,
            y: 300,
            duration: 750,
            ease: 'linear',
        });

        this.tweens.add({
            targets: charImage,
            delay: 2750,
            angle: 360,
            duration: 750,
            repeat: 2
        })

        this.tweens.add({
            targets: charImage,
            delay: 5000,
            x: 900,
            y: 300,
            duration: 750,
            ease: 'linear'
        })

        this.tweens.add({
            targets: playImage,
            delay: 5000,
            x: 1000,
            y: 300,
            duration: 750,
            ease: 'linear'
        })



    }

    update() {
        this.time.delayedCall(6000, () => {
            this.sound.stopAll();
            this.scene.start('loadScreenScene');
        });
    }
}
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
        let menuTheme = this.sound.add('menuTheme');
        menuTheme.play();

        let backgroundImage = this.add.image(400, 300, 'background');
        backgroundImage.setScale(.5);

        let titleImage = this.add.image(400, 150, 'title');
        titleImage.setScale(.2);
        titleImage.setAlpha(0);

        this.tweens.add({
            delay: 500,
            targets: titleImage,
            alpha: 1,
            ease: 'linear',
            duration: 1000
        });

        let playImage = this.add.image(400, 300, 'play');
        playImage.setScale(.25);
        playImage.setAlpha(0);

        let optionImage = this.add.image(400, 375, 'options');
        optionImage.setScale(.25);
        optionImage.setAlpha(0);

        let quitImage = this.add.image(400, 450, 'quit');
        quitImage.setScale(.25);
        quitImage.setAlpha(0);

        this.tweens.add({
            delay: 1500,
            targets: [playImage, optionImage, quitImage],
            alpha: 1,
            ease: 'linear',
            duration: 1000
        })

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

        this.tweens.add({
            delay: 5750,
            targets: [titleImage, optionImage, quitImage],
            alpha: 0,
            ease: 'linear',
            duration: 1000
        })


    }

    update() {
        this.time.delayedCall(7000, () => {
            this.sound.stopAll();
            this.scene.start('loadScreenScene');
        });
    }
}
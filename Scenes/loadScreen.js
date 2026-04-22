class loadScreen extends Phaser.Scene {
    constructor () {
        super('loadScreenScene')
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png')
        this.load.image('character', 'char.png')
        this.load.audio('loadingTheme', 'loading_music.mp3')
    }

    create() {
        let loadingTheme = this.sound.add('loadingTheme', {
            loop: true
        });
            loadingTheme.play();

        let backgroundImage = this.add.image(400, 300, 'background');
            backgroundImage.setScale(.5);

        let charImage = this.add.image(560, 545, 'character');
            charImage.setScale(.25);
            charImage.setDepth(2);

        let charImage2 = this.add.image(240, 215, 'character');
            charImage2.setScale(.25);
            charImage2.setDepth(1);
            charImage2.setAlpha(0);

        const loadingText = this.add.text(600, 525, "Loading...", {
            font: "40px Arial", 
            color: "#000000",
        });
            loadingText.setDepth(1);

        const loadingBounds = loadingText.getBounds();
        const loadingHighlight = this.add.graphics();
            loadingHighlight.fillStyle('0xffffff');
            loadingHighlight.fillRect(loadingBounds.x, loadingBounds.y, loadingBounds.width, loadingBounds.height);

        const textBlock = this.add.text(100, 200, "When the          symbol is on screen in the bottom right, the games is saving. Do not power down! Save file may be lost!", {
            font: "24px Arial",
            wordWrap: { width: 600 },
            lineSpacing: 10,
            color: "#000000",
        });
            textBlock.setDepth(1);
            textBlock.setAlpha(0)

        const textBounds = textBlock.getBounds();
        const textHighlight = this.add.graphics();
            textHighlight.fillStyle('0xffffff');
            textHighlight.fillRect(textBounds.x, textBounds.y, textBounds.width, textBounds.height);
            textHighlight.setAlpha(0);

        

        this.tweens.add({
            delay: 750,
            targets: [charImage2, textBlock, textHighlight],
            alpha: 1,
            ease: 'linear',
            duration: 250
        })

        this.tweens.add({
            targets: charImage,
            angle: 360,
            repeat: 5,
            duration: 750
        })

        this.tweens.add({
            delay: 3750,
            targets: [charImage2, textBlock, textHighlight],
            alpha: 0,
            ease: 'linear',
            duration: 250
        })

        this.tweens.add({
            delay: 4500,
            targets: charImage,
            x: 900,
            ease: 'linear',
            duration: 750
        })

        this.tweens.add({
            delay: 4500,
            targets: [loadingText, loadingHighlight],
            alpha: 0,
            ease: 'linear',
            duration: 250
        })
    }

    

    update() {
        this.time.delayedCall(5600, () => {
            this.sound.stopAll();
            this.scene.start('jumpScreenScene');
        });
    }
}
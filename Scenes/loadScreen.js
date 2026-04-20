class loadScreen extends Phaser.Scene {
    constructor () {
        super('loadScreenScene')
    }
// TODO: Add everything, FIX AUDIO
    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png')
        this.load.image('character', 'char.png')
        this.load.audio('loadingTheme', 'loading_music.mp3')
    }

    create() {
        let loadingTheme = this.sound.add('loadingTheme');
        loadingTheme.play(); // figure out how to loop this

        let backgroundImage = this.add.image(400, 300, 'background');
        backgroundImage.setScale(.5);

        let charImage = this.add.image(560, 545, 'character');
        charImage.setScale(.25);

        let charImage2 = this.add.image(240, 215, 'character');
        charImage2.setScale(.25);
        charImage2.setDepth(1);

        const loadingText = this.add.text(600, 525, "Loading...", {
            font: "40px Arial", 
            color: "#000000"
        });

        const loadingBounds = loadingText.getBounds();
        const loadingHighlight = this.add.graphics();

        loadingHighlight.fillStyle('0xffffff');
        loadingHighlight.fillRect(loadingBounds.x, loadingBounds.y, loadingBounds.width, loadingBounds.height);
        loadingText.setDepth(1);

        const textBlock = this.add.text(100, 200, "When the          symbol is on screen in the bottom right, the games is saving. Do not power down! Save file may be lost!", {
            font: "24px Arial",
            wordWrap: { width: 600 },
            lineSpacing: 10,
            color: "#000000"
        });

        const textBounds = textBlock.getBounds();
        const textHighlight = this.add.graphics();

        textHighlight.fillStyle('0xffffff');
        textHighlight.fillRect(textBounds.x, textBounds.y, textBounds.width, textBounds.height);
        textBlock.setDepth(1);
    }

    update() {

    }
}
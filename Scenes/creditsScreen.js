class creditsScreen extends Phaser.Scene {
    constructor () {
        super ('creditsScreenScene')
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png')
        this.load.image('character', 'char.png')
        this.load.image('platform', 'ground.png')
        this.load.image('options', 'options.png')
        this.load.image('play', 'play.png')
        this.load.image('quitimage', 'quit.png')
        this.load.image('title', 'title.png')
    }

    create() {
        const creditText = this.add.text(200, 50, "Assets drawn by me", {
            font: "40px Arial", 
            color: "#ffffff"
        });
            creditText.setDepth(1);

        let backgroundImage = this.add.image(400, 300, 'background');
            backgroundImage.setScale(.5);
        
        let charImage = this.add.image(200, 200, 'character');
            charImage.setScale(.25);

        let platformImage = this.add.image(300, 200, 'platform');
            platformImage.setScale(.5);

        let optionsImage = this.add.image(450, 200, 'options');
            optionsImage.setScale(.25);

        let playImage = this.add.image(600, 200, 'play');
            playImage.setScale(.25);
            
        let quitImage = this.add.image(100, 200, 'quitimage');
            quitImage.setScale(.25);

        let titleImage = this.add.image(400, 350, 'title');
            titleImage.setScale(.25);

        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillTriangle(130, 120, 120, 160, 150, 130); // x of top left point, y of top left point, x of bottom point, y of bottom point
        this.graphics.fillTriangle(200, 120, 200, 160, 225, 130);
        this.graphics.fillTriangle(275, 130, 290, 160, 300, 130);
        this.graphics.fillTriangle(430, 130, 440, 160, 450, 130);
        this.graphics.fillTriangle(580, 130, 600, 160, 600, 125);
        this.graphics.fillTriangle(180, 340, 230, 360, 180, 390);
        this.graphics.fillRect(150, 350, 50, 26);
            
    }

    update() {

    }
}
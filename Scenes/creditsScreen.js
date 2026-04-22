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

        
            
    }

    update() {

    }
}
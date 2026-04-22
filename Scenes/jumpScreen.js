class jumpScreen extends Phaser.Scene {
    constructor () {
        super ('jumpScreenScene')
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png')
        this.load.image('character', 'char.png')
        this.load.image('platform', 'ground.png')
    }

    create() {
        let backgroundImage = this.add.image(400, 300, 'background');
            backgroundImage.setScale(.5);

        let charImage = this.add.image(200, -200, 'character');
            charImage.setScale(.5);
            charImage.setDepth(1);

        let charImage2 = this.add.image(600, -200, 'character');
            charImage2.setScale(.5);
            charImage2.setDepth(1);

        let platformOne = this.add.image(200, 400, 'platform');
            platformOne.setScale(.65);

        let platformTwo = this.add.image(600, 400, 'platform');
            platformTwo.setScale(.65);

        const bounceTextOne = this.add.text(250, 250, "Boing", {
            font: "32px Arial", 
            color: "#ffffff",
        });
            bounceTextOne.angle = -45;
            bounceTextOne.setAlpha(0);
        
        const bounceTextTwo = this.add.text(450, 250, "Boing", {
            font: "32px Arial", 
            color: "#ffffff",
        });
            bounceTextTwo.angle = 45;
            bounceTextTwo.setAlpha(0);

        this.tweens.add({
            delay: 500,
            targets: charImage,
            y: 350,
            ease: 'linear',
            yoyo: true,
            duration: 1000,
        })

        this.tweens.add({
            delay: 2750,
            targets: charImage2,
            y: 350,
            ease: 'linear',
            yoyo: true,
            duration: 1000,
        })

        this.tweens.add({
            delay: 1500,
            targets: bounceTextOne,
            alpha: 1,
            yoyo: true,
            duration: 500
        })

        this.tweens.add({
            delay: 3750,
            targets: bounceTextTwo,
            alpha: 1,
            yoyo: true,
            duration: 500
        })
    }

    update() {

    }
}
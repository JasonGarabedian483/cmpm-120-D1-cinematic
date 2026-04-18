class homeScreen extends Phaser.Scene {
    constructor () {
        super ('homeScreenscene')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('background', 'background.png')
        this.load.image(/*main menu icons here*/)
    }

    create () {
        this.object = this.add.image(0, 0, 'background');
    }

    update() {
        // switching to next scene / reloading scene?
        if(Phaser.Input.Keyboard.JustDown(this.reload)) {
            this.scene.start(/*next scene*/)
        }
        if(Phaer.Input.Keyboard.JustDown(this.swap)) {
            this.scene.start(/*previous screen?*/)
        }

    }
}
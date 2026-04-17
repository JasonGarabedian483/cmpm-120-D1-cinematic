class homeScreen extends Phaser.Scene {
    constructor () {
        super ('homeScreenscene')
    }

    preload() {
        this.load.image(/*background image here*/)
        this.load.image(/*main menu icons here*/)
    }

    create () {

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
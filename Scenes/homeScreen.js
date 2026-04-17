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
        if(Phaser.Input.Keyboard.JustDown(this.reload)) {}
    }
}
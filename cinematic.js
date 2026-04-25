'use scrict';

const config = {
    width: 800,
    height: 600,
    parent: "root",
    scene: [ homeScreen, loadScreen, jumpScreen, creditsScreen ]
}

const game = new Phaser.Game(config)
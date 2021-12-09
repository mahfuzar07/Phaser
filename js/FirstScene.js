class FirstScene extends Phaser.Scene {
  constructor() {
    super('FirstScene');
  }
  preload() {
    this.load.image('sky', '../assets/sky.png');
    this.load.image('button', '../assets/button.png');
    this.load.audio('audio1', '../assets/audio1.mp3');
  }
  create() {
    this.add.image(400, 300, 'sky');
    this.add.text(320, 200, 'PHASER FISRT GAME');
    let button = this.add.image(400, 300, 'button');
    // let button = this.add.image(400, 300, 'button').setInteractive();
    // button.on('pointerdown', function () {
    //   this.Scene.start('GameScene');
    // });
    let sound1 = this.sound.add('audio1');
    sound1.stop();
    this.input.on('pointerdown', () => this.scene.start('GameScene'));
  }
}
export default FirstScene;

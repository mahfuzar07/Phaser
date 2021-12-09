import FirstScene from './FirstScene.js';
import GameScene from './GameScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [FirstScene, GameScene],
};
new Phaser.Game(config);

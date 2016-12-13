/// <reference path="../tsDefs/phaser.d.ts" />

'use strict';

class MainState {
  game: Phaser.Game;

  init() {
  }

  preload() {
    this.game.load.image('logo', 'assets/images/phaser.png');
  }

  create() {
    var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.75, 0.75);

    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  }

  update() {
  }

  render() {
    //note: most things in phaser is automatically rendered.
  }

};

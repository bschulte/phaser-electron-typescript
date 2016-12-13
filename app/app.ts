'use strict';

window.onload = () => {
  let main_state = new MainState();

  let game = new Phaser.Game(768, 432, Phaser.AUTO, '', main_state);
}

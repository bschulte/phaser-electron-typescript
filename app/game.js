'use strict';
window.onload = function () {
    var main_state = new MainState();
    var game = new Phaser.Game(768, 432, Phaser.AUTO, '', main_state);
};
/// <reference path="../tsDefs/phaser.d.ts" />
'use strict';
var MainState = (function () {
    function MainState() {
    }
    MainState.prototype.init = function () {
    };
    MainState.prototype.preload = function () {
        this.game.load.image('logo', 'assets/images/phaser.png');
    };
    MainState.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.75, 0.75);
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    };
    MainState.prototype.update = function () {
    };
    MainState.prototype.render = function () {
        //note: most things in phaser is automatically rendered.
    };
    return MainState;
}());
;
//# sourceMappingURL=game.js.map
"use strict";
cc._RF.push(module, '2d2745sLR5Nv5BU7wqdW8rZ', 'ScoreAnim');
// scripts/ScoreAnim.js

"use strict";

cc.Class({
    extends: cc.Component,

    reuse: function reuse(game) {
        this.game = game;
    },
    despawn: function despawn() {
        this.game.despawnAnimRoot();
    }
});

cc._RF.pop();
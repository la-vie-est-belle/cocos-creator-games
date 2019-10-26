(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/ScoreAnim.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2d2745sLR5Nv5BU7wqdW8rZ', 'ScoreAnim', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ScoreAnim.js.map
        
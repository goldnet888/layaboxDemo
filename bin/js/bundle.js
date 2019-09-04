var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var runtime_1 = require("./runtime/runtime");
var fontTest_1 = require("./fontTest");
var myctrl_1 = require("./myctrl");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("runtime/runtime.ts", runtime_1.default);
        reg("fontTest.ts", fontTest_1.default);
        reg("myctrl.ts", myctrl_1.default);
    };
    GameConfig.width = 1920;
    GameConfig.height = 1080;
    GameConfig.scaleMode = "fixedauto";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "foo.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();
},{"./fontTest":3,"./myctrl":4,"./runtime/runtime":5}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var Main = /** @class */ (function () {
    function Main() {
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height);
        else
            Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        GameConfig_1.default.startScene && Laya.Scene.open(GameConfig_1.default.startScene);
    };
    return Main;
}());
//激活启动类
new Main();
},{"./GameConfig":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("./runtime/runtime");
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    function test() {
        var _this = _super.call(this) || this;
        /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
        _this.intType = 1000;
        /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
        _this.numType = 1000;
        /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
        _this.strType = "hello laya";
        /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
        _this.boolType = true;
        return _this;
    }
    test.prototype.onEnable = function () {
        console.log('kk test font');
        Laya.loader.load("res/HanyiSentyVimalkirti.ttf", Laya.Handler.create(this, this.mycode));
        // var text:Text = new Text();
        // text.fontSize=64;
        // text.color="#FF00FF";
        // text.text="test foo ggjjjyyyppp 現在是在測試中";
        // text.font="HanyiSentyVimalkirti"
        // text.pos(600,400);
        // Laya.stage.addChild(text);
    };
    test.prototype.onDisable = function () {
    };
    test.prototype.onUpdate = function () {
    };
    test.prototype.mycode = function () {
        console.log('kk loaded');
        var list = [1, 2, 3];
        var list2 = [];
        // let unused: void = 'test123'
        var someValue = 123549893;
        var strLength = someValue.length;
        var strLength2 = someValue.length;
        runtime_1.default.instance.testLabel.font = "HanyiSentyVimalkirti";
        // mainTestUI.instance.testLabel.color = '#ff0000'
        runtime_1.default.instance.testLabel.text = "Layabox是HTML5引擎技术jjppyy提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
        // mainTestUI.instance.testLabel.leading = 20;
        // mainTestUI.instance.testLabel.overflow = Text.SCROLL;
        // Text.defaultFont = "HanyiSentyVimalkirti"
        // text.fontSize=64;
        // text.color="#FF00FF";
        // text.text="test foo ggjjjyyyppp 現在是在測試中";
        // text.font="HanyiSentyVimalkirti"
        // text.pos(600,400);
        // Laya.stage.addChild(text);
    };
    test.prototype.fail = function () {
        while (true) {
        }
    };
    test.prototype.error = function (message) {
        throw new Error(message);
    };
    return test;
}(Laya.Script));
exports.default = test;
},{"./runtime/runtime":5}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("./runtime/runtime");
var myctrl = /** @class */ (function (_super) {
    __extends(myctrl, _super);
    function myctrl() {
        var _this = _super.call(this) || this;
        _this.longStr = 'fjowejofijoiwjeofij1231jfoijo測試';
        return _this;
    }
    myctrl.prototype.changeEvent = function () {
        console.log(this.displayWidth, this.ownerNode.width, this.ownerNode.height, this.displayHeight);
        if (this.ownerNode.width >= this.displayWidth) {
            this.ownerNode.scale(this.displayWidth / this.ownerNode.width, this.displayWidth / this.ownerNode.width);
            this.ownerNode.y = (this.displayHeight / 2) - (this.displayWidth / this.ownerNode.width) * (this.ownerNode.height / 2);
            console.log(this.ownerNode.y);
        }
        else {
            this.ownerNode.scale(1, 1);
            this.ownerNode.y = 0;
        }
    };
    myctrl.prototype.onLongStrClick = function () {
        this.ownerNode.text = this.longStr;
        console.log('long str', this.ownerNode.text);
    };
    myctrl.prototype.onEnable = function () {
        runtime_1.default.instance.long_btn.on(Laya.Event.CLICK, this, this.onLongStrClick);
        // mainScentUI.instance.short_btn.on(Laya.Event.CLICK, this, this.onShortStrClick);
        if (this.owner instanceof Laya.Text)
            this.ownerNode = this.owner;
        if (this.owner instanceof Laya.Label)
            this.ownerNode = this.owner;
        this.ownerNode.on(laya.events.Event.CHANGE, this, this.changeEvent);
        console.log('test', this.ownerNode.width);
    };
    myctrl.prototype.onDisable = function () {
    };
    myctrl.prototype.onUpdate = function () {
    };
    return myctrl;
}(Laya.Script));
exports.default = myctrl;
},{"./runtime/runtime":5}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("../ui/layaMaxUI");
var fooui = /** @class */ (function (_super) {
    __extends(fooui, _super);
    function fooui() {
        var _this = _super.call(this) || this;
        fooui.instance = _this;
        return _this;
    }
    return fooui;
}(layaMaxUI_1.ui.fooUI));
exports.default = fooui;
},{"../ui/layaMaxUI":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene = Laya.Scene;
var REG = Laya.ClassUtils.regClass;
var ui;
(function (ui) {
    var fooUI = /** @class */ (function (_super) {
        __extends(fooUI, _super);
        function fooUI() {
            return _super.call(this) || this;
        }
        fooUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.loadScene("foo");
        };
        return fooUI;
    }(Scene));
    ui.fooUI = fooUI;
    REG("ui.fooUI", fooUI);
})(ui = exports.ui || (exports.ui = {}));
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2tlbm5ldGguY2hhbi9Eb3dubG9hZHMvTGF5YUFpcklERS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL2ZvbnRUZXN0LnRzIiwic3JjL215Y3RybC50cyIsInNyYy9ydW50aW1lL3J1bnRpbWUudHMiLCJzcmMvdWkvbGF5YU1heFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBLGdHQUFnRztBQUNoRyw2Q0FBdUM7QUFDdkMsdUNBQWlDO0FBQ2pDLG1DQUE2QjtBQUM3Qjs7RUFFRTtBQUNGO0lBYUk7SUFBYyxDQUFDO0lBQ1IsZUFBSSxHQUFYO1FBQ0ksSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDN0MsR0FBRyxDQUFDLG9CQUFvQixFQUFDLGlCQUFPLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsYUFBYSxFQUFDLGtCQUFRLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsV0FBVyxFQUFDLGdCQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBbEJNLGdCQUFLLEdBQVEsSUFBSSxDQUFDO0lBQ2xCLGlCQUFNLEdBQVEsSUFBSSxDQUFDO0lBQ25CLG9CQUFTLEdBQVEsV0FBVyxDQUFDO0lBQzdCLHFCQUFVLEdBQVEsTUFBTSxDQUFDO0lBQ3pCLGlCQUFNLEdBQVEsUUFBUSxDQUFDO0lBQ3ZCLGlCQUFNLEdBQVEsUUFBUSxDQUFDO0lBQ3ZCLHFCQUFVLEdBQUssV0FBVyxDQUFDO0lBQzNCLG9CQUFTLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLGdCQUFLLEdBQVMsS0FBSyxDQUFDO0lBQ3BCLGVBQUksR0FBUyxLQUFLLENBQUM7SUFDbkIsdUJBQVksR0FBUyxLQUFLLENBQUM7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RE0sS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUM7O0lBQzdCLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FOQSxBQU1DLENBTmtDLGNBQUUsQ0FBQyxLQUFLLEdBTTFDOzs7OztBQ0pELElBQU8sS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDN0MsSUFBYyxFQUFFLENBZWY7QUFmRCxXQUFjLEVBQUU7SUFDWjtRQUEyQix5QkFBSztRQU81QjttQkFBZSxpQkFBTztRQUFBLENBQUM7UUFDdkIsOEJBQWMsR0FBZDtZQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQVpBLEFBWUMsQ0FaMEIsS0FBSyxHQVkvQjtJQVpZLFFBQUssUUFZakIsQ0FBQTtJQUNELEdBQUcsQ0FBQyxVQUFVLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxFQWZhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQWVmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgcnVudGltZSBmcm9tIFwiLi9ydW50aW1lL3J1bnRpbWVcIlxuaW1wb3J0IGZvbnRUZXN0IGZyb20gXCIuL2ZvbnRUZXN0XCJcbmltcG9ydCBteWN0cmwgZnJvbSBcIi4vbXljdHJsXCJcclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTE5MjA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZGF1dG9cIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiZm9vLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJydW50aW1lL3J1bnRpbWUudHNcIixydW50aW1lKTtcbiAgICAgICAgcmVnKFwiZm9udFRlc3QudHNcIixmb250VGVzdCk7XG4gICAgICAgIHJlZyhcIm15Y3RybC50c1wiLG15Y3RybCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHR9XHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTtcclxuIiwiXHJcbmltcG9ydCBUZXh0ID0gbGF5YS5kaXNwbGF5LlRleHQ7XHJcbmltcG9ydCBtYWluVGVzdFVJIGZyb20gXCIuL3J1bnRpbWUvcnVudGltZVwiO1xyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmludFR5cGUsIHRpcHM6XCLmlbTmlbDnsbvlnovnpLrkvotcIiwgdHlwZTpJbnQsIGRlZmF1bHQ6MTAwMH0qL1xyXG4gICAgcHVibGljIGludFR5cGU6IG51bWJlciA9IDEwMDA7XHJcbiAgICAvKiogQHByb3Age25hbWU6bnVtVHlwZSwgdGlwczpcIuaVsOWtl+exu+Wei+ekuuS+i1wiLCB0eXBlOk51bWJlciwgZGVmYXVsdDoxMDAwfSovXHJcbiAgICBwdWJsaWMgbnVtVHlwZTogbnVtYmVyID0gMTAwMDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdHJUeXBlLCB0aXBzOlwi5a2X56ym5Liy57G75Z6L56S65L6LXCIsIHR5cGU6U3RyaW5nLCBkZWZhdWx0OlwiaGVsbG8gbGF5YVwifSovXHJcbiAgICBwdWJsaWMgc3RyVHlwZTogc3RyaW5nID0gXCJoZWxsbyBsYXlhXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym9vbFR5cGUsIHRpcHM6XCLluIPlsJTnsbvlnovnpLrkvotcIiwgdHlwZTpCb29sLCBkZWZhdWx0OnRydWV9Ki9cclxuICAgIHB1YmxpYyBib29sVHlwZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvLyDmm7TlpJrlj4LmlbDor7TmmI7or7forr/pl646IGh0dHBzOi8vbGRjMi5sYXlhYm94LmNvbS9kb2MvP25hdj16aC1hcy0yLTQtMFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG4gICAgXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygna2sgdGVzdCBmb250JylcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKFwicmVzL0hhbnlpU2VudHlWaW1hbGtpcnRpLnR0ZlwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMubXljb2RlKSk7XHJcbiAgICAgICAgLy8gdmFyIHRleHQ6VGV4dCA9IG5ldyBUZXh0KCk7XHJcbiAgICAgICAgLy8gdGV4dC5mb250U2l6ZT02NDtcclxuICAgICAgICAvLyB0ZXh0LmNvbG9yPVwiI0ZGMDBGRlwiO1xyXG4gICAgICAgIC8vIHRleHQudGV4dD1cInRlc3QgZm9vIGdnampqeXl5cHBwIOePvuWcqOaYr+WcqOa4rOippuS4rVwiO1xyXG4gICAgICAgIC8vIHRleHQuZm9udD1cIkhhbnlpU2VudHlWaW1hbGtpcnRpXCJcclxuICAgICAgICAvLyB0ZXh0LnBvcyg2MDAsNDAwKTtcclxuICAgICAgICAvLyBMYXlhLnN0YWdlLmFkZENoaWxkKHRleHQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG15Y29kZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygna2sgbG9hZGVkJylcclxuICAgICAgICBsZXQgbGlzdDogbnVtYmVyW10gPSBbMSwgMiwgM107XHJcbiAgICAgICAgbGV0IGxpc3QyOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICAgICAgLy8gbGV0IHVudXNlZDogdm9pZCA9ICd0ZXN0MTIzJ1xyXG4gICAgICAgIGxldCBzb21lVmFsdWU6IGFueSA9IDEyMzU0OTg5MztcclxuICAgICAgICBsZXQgc3RyTGVuZ3RoOiBudW1iZXIgPSAoPHN0cmluZz5zb21lVmFsdWUpLmxlbmd0aDtcclxuICAgICAgICBsZXQgc3RyTGVuZ3RoMjogbnVtYmVyID0gKHNvbWVWYWx1ZSBhcyBzdHJpbmcpLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbWFpblRlc3RVSS5pbnN0YW5jZS50ZXN0TGFiZWwuZm9udCA9IFwiSGFueWlTZW50eVZpbWFsa2lydGlcIjtcclxuICAgICAgICAvLyBtYWluVGVzdFVJLmluc3RhbmNlLnRlc3RMYWJlbC5jb2xvciA9ICcjZmYwMDAwJ1xyXG4gICAgICAgIG1haW5UZXN0VUkuaW5zdGFuY2UudGVzdExhYmVsLnRleHQgPSBcIkxheWFib3jmmK9IVE1MNeW8leaTjuaKgOacr2pqcHB5eeaPkOS+m+WVhuS4juS8mOengOeahOa4uOaIj+WPkeihjOWVhu+8jOmdouWQkUFTL0pTL1RT5byA5Y+R6ICF5o+Q5L6bSFRNTDXlvIDlj5HmioDmnK/mlrnmoYjvvIFcXG5cIiArICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxheWFib3jmmK9IVE1MNeW8leaTjuaKgOacr+aPkOS+m+WVhuS4juS8mOengOeahOa4uOaIj+WPkeihjOWVhu+8jOmdouWQkUFTL0pTL1RT5byA5Y+R6ICF5o+Q5L6bSFRNTDXlvIDlj5HmioDmnK/mlrnmoYjvvIFcIjtcclxuICAgICAgICAvLyBtYWluVGVzdFVJLmluc3RhbmNlLnRlc3RMYWJlbC5sZWFkaW5nID0gMjA7XHJcbiAgICAgICAgLy8gbWFpblRlc3RVSS5pbnN0YW5jZS50ZXN0TGFiZWwub3ZlcmZsb3cgPSBUZXh0LlNDUk9MTDtcclxuXHJcbiAgICAgICAgLy8gVGV4dC5kZWZhdWx0Rm9udCA9IFwiSGFueWlTZW50eVZpbWFsa2lydGlcIlxyXG4gICAgICAgIC8vIHRleHQuZm9udFNpemU9NjQ7XHJcbiAgICAgICAgLy8gdGV4dC5jb2xvcj1cIiNGRjAwRkZcIjtcclxuICAgICAgICAvLyB0ZXh0LnRleHQ9XCJ0ZXN0IGZvbyBnZ2pqanl5eXBwcCDnj77lnKjmmK/lnKjmuKzoqabkuK1cIjtcclxuICAgICAgICAvLyB0ZXh0LmZvbnQ9XCJIYW55aVNlbnR5VmltYWxraXJ0aVwiXHJcbiAgICAgICAgLy8gdGV4dC5wb3MoNjAwLDQwMCk7XHJcbiAgICAgICAgLy8gTGF5YS5zdGFnZS5hZGRDaGlsZCh0ZXh0KTtcclxuICAgIH1cclxuICAgIGZhaWwoKTogbmV2ZXIge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogbmV2ZXIge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCBtYWluU2NlbnRVSSBmcm9tIFwiLi9ydW50aW1lL3J1bnRpbWVcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXljdHJsIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaXNwbGF5V2lkdGgsIHRpcHM6XCLoq4vovLjlhaXpoa/npLp3aWR0aOevhOWcjVwiLCB0eXBlOk51bWJlciwgZGVmYXVsdDpcIjIwMFwifSovXHJcbiAgICBwdWJsaWMgZGlzcGxheVdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRpc3BsYXlIZWlnaHQsIHRpcHM6XCLoq4vovLjlhaXpoa/npLpoZWlnaHTnr4TlnI1cIiwgdHlwZTpOdW1iZXIsIGRlZmF1bHQ6XCIyMDBcIn0qL1xyXG4gICAgcHVibGljIGRpc3BsYXlIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIG93bmVyTm9kZTogYW55O1xyXG4gICAgcHJpdmF0ZSBsb25nU3RyOiBzdHJpbmcgPSAnZmpvd2Vqb2Zpam9pd2plb2ZpajEyMzFqZm9pam/muKzoqaYnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICBzdXBlcigpOyBcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFdmVudCgpOiB2b2lke1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzcGxheVdpZHRoLCB0aGlzLm93bmVyTm9kZS53aWR0aCwgIHRoaXMub3duZXJOb2RlLmhlaWdodCwgdGhpcy5kaXNwbGF5SGVpZ2h0KVxyXG5cclxuICAgICAgICBpZiggdGhpcy5vd25lck5vZGUud2lkdGggPj0gdGhpcy5kaXNwbGF5V2lkdGggKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5vd25lck5vZGUuc2NhbGUodGhpcy5kaXNwbGF5V2lkdGggLyB0aGlzLm93bmVyTm9kZS53aWR0aCwgdGhpcy5kaXNwbGF5V2lkdGggLyB0aGlzLm93bmVyTm9kZS53aWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXJOb2RlLnkgPSAodGhpcy5kaXNwbGF5SGVpZ2h0LzIpIC0gKHRoaXMuZGlzcGxheVdpZHRoIC8gdGhpcy5vd25lck5vZGUud2lkdGgpICogKHRoaXMub3duZXJOb2RlLmhlaWdodCAvMik7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm93bmVyTm9kZS55KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXJOb2RlLnNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyTm9kZS55ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBvbkxvbmdTdHJDbGljaygpOiB2b2lke1xyXG4gICAgICAgIHRoaXMub3duZXJOb2RlLnRleHQgPSB0aGlzLmxvbmdTdHI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvbmcgc3RyJywgdGhpcy5vd25lck5vZGUudGV4dClcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQgeyBcclxuICAgICAgICBtYWluU2NlbnRVSS5pbnN0YW5jZS5sb25nX2J0bi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uTG9uZ1N0ckNsaWNrKTtcclxuICAgICAgICAvLyBtYWluU2NlbnRVSS5pbnN0YW5jZS5zaG9ydF9idG4ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblNob3J0U3RyQ2xpY2spO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLm93bmVyIGluc3RhbmNlb2YgTGF5YS5UZXh0KSB0aGlzLm93bmVyTm9kZSA9IHRoaXMub3duZXIgYXMgTGF5YS5UZXh0O1xyXG4gICAgICAgIGlmICh0aGlzLm93bmVyIGluc3RhbmNlb2YgTGF5YS5MYWJlbCkgdGhpcy5vd25lck5vZGUgPSB0aGlzLm93bmVyIGFzIExheWEuTGFiZWw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vd25lck5vZGUub24obGF5YS5ldmVudHMuRXZlbnQuQ0hBTkdFLCB0aGlzLCB0aGlzLmNoYW5nZUV2ZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcsIHRoaXMub3duZXJOb2RlLndpZHRoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgIH1cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvb3VpIGV4dGVuZHMgdWkuZm9vVUl7XHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6Zm9vdWk7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGZvb3VpLmluc3RhbmNlID0gdGhpcztcclxuXHR9ICBcclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbnZhciBSRUc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xuZXhwb3J0IG1vZHVsZSB1aSB7XHJcbiAgICBleHBvcnQgY2xhc3MgZm9vVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgdGVzdExhYmVsOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIGxvbmdfYnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBzaG9ydF9idG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIG1ib3g6TGF5YS5Cb3g7XG5cdFx0cHVibGljIG15dGV4dDpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgZGlzcGxheV93aWR0aDpMYXlhLkxhYmVsO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZm9vXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLmZvb1VJXCIsZm9vVUkpO1xyXG59XHIiXX0=

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, CameraComponent, RenderTexture, Sprite, Vec3, view, sys, find, Widget, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, PlayerCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CameraComponent = _cc.CameraComponent;
      RenderTexture = _cc.RenderTexture;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      sys = _cc.sys;
      find = _cc.find;
      Widget = _cc.Widget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f17cbzExe9K7Y8U+BgN/d0y", "playerCtrl", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = PlayerCtrl
       * DateTime = Thu Nov 18 2021 15:42:27 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = playerCtrl.ts
       * FileBasenameNoExtension = playerCtrl
       * URL = db://assets/scripts/adaptation/playerCtrl.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("PlayerCtrl", PlayerCtrl = (_dec = ccclass('PlayerCtrl'), _dec2 = property(CameraComponent), _dec3 = property(RenderTexture), _dec4 = property(Sprite), _dec5 = property([Node]), _dec6 = property([Node]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerCtrl, _Component);

        function PlayerCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "cam", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "render", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "show3d", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "player3dHps", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "uiHps", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PlayerCtrl.prototype;

        // 所有血条ui
        _proto.start = function start() {
          // 投影 吧3d照射的投影到2d ui上
          var renderTex = this.render;
          this.cam.targetTexture = renderTex;
          this.show3d.spriteFrame.texture = renderTex;
        };

        _proto.lateUpdate = function lateUpdate() {
          var _this2 = this;

          // 使用 worldToScreen 实现血条跟随
          this.player3dHps.forEach(function (item, i) {
            // 血条
            var ve1 = new Vec3(0, 0, 0);

            _this2.cam.worldToScreen(item.worldPosition, ve1);

            var design = view.getDesignResolutionSize(); // 这里就是计算一下  浏览器端屏幕是横屏的，实际我们canvas区域是中间手机屏，而且血条还不能加widget固定死，所有在pc端
            // 转出来的坐标是实际屏幕算的，不是中间手机位置的，我们要计算到中间手机位置的区域，计算出的位置+屏幕左侧到手机屏的左侧的距离，就是中间手机的显示区域
            // 这里计算offsetHeight，是因为手机端是适配宽度，不同机型的实际高度不一，可能血条高于正常值或者低于，所以在这里要-(根据设计分辨率求出的高度-实际屏幕的高度)/2
            // 对于offsetHeight不理解，可以尝试在手机浏览器运行一下就明白了，和pc显示的差别

            var canvasWidget = find("Canvas").getComponent(Widget);
            var offsetHeight = !sys.isMobile ? 0 : view.getVisibleSize().width * design.height / design.width - view.getVisibleSize().height; // 计算出高度比实际分辨率的差距，

            _this2.uiHps[i].worldPosition = ve1.add(new Vec3(canvasWidget.left, -offsetHeight / 2, 0));
            ;
          }); // // 使用convertToUINode 实现血条跟随
          // this.player3dHps.forEach((item, i) => {
          //     // 血条
          //     let ve1 = new Vec3(0, 0, 0)
          //     this.cam.convertToUINode(new Vec3(item.worldPosition), this.uiHps[i].parent, ve1);
          //     this.uiHps[i].setPosition(ve1)
          // })
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return PlayerCtrl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "render", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "show3d", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "player3dHps", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiHps", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=playerCtrl.js.map
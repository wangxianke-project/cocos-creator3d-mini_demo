System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, RenderTexture, Sprite, CameraComponent, quat, math, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, BagSHowModle;

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
      RenderTexture = _cc.RenderTexture;
      Sprite = _cc.Sprite;
      CameraComponent = _cc.CameraComponent;
      quat = _cc.quat;
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1bddyGYLFEc4Du9chjM3R3", "bagSHowModle", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = BagSHowModle
       * DateTime = Fri Oct 29 2021 15:54:56 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = bagSHowModle.ts
       * FileBasenameNoExtension = bagSHowModle
       * URL = db://assets/scripts/bagSHowModle.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("BagSHowModle", BagSHowModle = (_dec = ccclass('BagSHowModle'), _dec2 = property(RenderTexture), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BagSHowModle, _Component);

        function BagSHowModle() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "text", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "playr", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "modleUI", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "touchNode", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "startX", 0);

          return _this;
        }

        var _proto = BagSHowModle.prototype;

        _proto.start = function start() {
          // [3]
          this.node.getComponent(CameraComponent).targetTexture = this.text;
          this.modleUI.spriteFrame.texture = this.text;
          this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        _proto.touchStart = function touchStart(e) {
          this.startX = e.getLocationX();
        };

        _proto.touchMove = function touchMove(e) {
          var dis = e.getLocationX() - this.startX;
          var qu1 = quat();
          var qu2 = quat();
          var ro = math.Quat.rotateY(qu1, qu2, dis * 0.01);
          this.playr.rotate(ro);
          this.startX = e.getLocationX();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return BagSHowModle;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "modleUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "touchNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
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
//# sourceMappingURL=bagSHowModle.js.map
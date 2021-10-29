System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, quat, math, RenderTexture, Sprite, Camera, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, UiShow3d;

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
      quat = _cc.quat;
      math = _cc.math;
      RenderTexture = _cc.RenderTexture;
      Sprite = _cc.Sprite;
      Camera = _cc.Camera;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1df05hGgW9ODKOF44/oLNdY", "uiShow3d", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = UiShow3d
       * DateTime = Thu Oct 28 2021 18:28:29 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = uiShow3d.ts
       * FileBasenameNoExtension = uiShow3d
       * URL = db://assets/scripts/uiShow3d.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("UiShow3d", UiShow3d = (_dec = ccclass('UiShow3d'), _dec2 = property(RenderTexture), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UiShow3d, _Component);

        function UiShow3d() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "render", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "cube", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "touchScreenNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "content", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "touchStartPosX", 0);

          return _this;
        }

        var _proto = UiShow3d.prototype;

        _proto.start = function start() {
          this.touchScreenNode.on(Node.EventType.TOUCH_START, this.touchStart.bind(this), this);
          this.touchScreenNode.on(Node.EventType.TOUCH_MOVE, this.touchMove.bind(this), this); // 设置render

          var renderTex = this.render;
          var camera = this.getComponent(Camera);
          camera.targetTexture = renderTex;
          this.content.spriteFrame.texture = renderTex;
        } // 控制旋转
        ;

        _proto.touchStart = function touchStart(e) {
          this.touchStartPosX = e.getLocationX();
        };

        _proto.touchMove = function touchMove(e) {
          var ang = e.getLocationX() - this.touchStartPosX;
          var rotation1 = quat();
          var rotation2 = quat();
          var ro = math.Quat.rotateY(rotation1, rotation2, ang * 0.01);
          this.cube.rotate(ro);
          this.touchStartPosX = e.getLocationX();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return UiShow3d;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "render", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cube", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "touchScreenNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec5], {
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
//# sourceMappingURL=uiShow3d.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, systemEvent, SystemEvent, KeyCode, quat, math, SkeletalAnimation, Vec3, Camera, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, PlayerControll;

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
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      KeyCode = _cc.KeyCode;
      quat = _cc.quat;
      math = _cc.math;
      SkeletalAnimation = _cc.SkeletalAnimation;
      Vec3 = _cc.Vec3;
      Camera = _cc.Camera;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8104J33e5BRY6mHs9Mc0xK", "playerControll", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = PlayerControll
       * DateTime = Thu Oct 28 2021 19:09:09 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = playerControll.ts
       * FileBasenameNoExtension = playerControll
       * URL = db://assets/scripts/playerControll.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("PlayerControll", PlayerControll = (_dec = ccclass('PlayerControll'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerControll, _Component);

        function PlayerControll() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "camera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "hp3D", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "uiHp", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "move", false);

          return _this;
        }

        var _proto = PlayerControll.prototype;

        _proto.start = function start() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyup, this); // [3]
        };

        _proto.onKeyDown = function onKeyDown(event) {
          var ang = -1000;
          var rotation1 = quat();
          var rotation2 = quat();

          switch (event.keyCode) {
            case KeyCode.KEY_W:
              console.log('Press a key');
              ang = 180;
              break;

            case KeyCode.KEY_A:
              console.log('Press a key');
              ang = -90;
              break;

            case KeyCode.KEY_S:
              console.log('Press a key');
              ang = 90;
              break;

            case KeyCode.KEY_D:
              console.log('Press a key');
              ang = 0;
              break;
          }

          if (ang != -1000) {
            this.move = true;
            var ro = math.Quat.rotateY(rotation1, rotation2, ang);
            this.node.rotation = math.Quat.slerp(rotation1, rotation2, ro, 0.5);
          } else {
            this.move = false;
          }
        };

        _proto.onKeyup = function onKeyup() {
          this.move = false;
        };

        _proto.update = function update(deltaTime) {
          this.node.getComponent(SkeletalAnimation).play("cocos_anim_run");
          this.node.translate(this.node.forward, 0); // [4]

          if (this.move) {// this.node.translate(this.node.forward,0);
          } else {// this.node.getComponent(SkeletalAnimation).play("cocos_anim_idle")
            }

          var ve = new Vec3(0, 0, 0);
          this.uiHp.parent.getWorldPosition(ve);
          var ca = this.camera.getComponent(Camera);
          ca.convertToUINode(this.hp3D.worldPosition, this.uiHp.parent, ve);
          this.uiHp.setPosition(ve);
          var dis = Vec3.distance(this.node.worldPosition, this.camera.worldPosition);

          if (dis > 10) {
            this.uiHp.scale = new Vec3(0.021 * (100 / (dis - 10)), 0.021 * (100 / (dis - 10)), 0);
          } else {
            this.uiHp.scale = new Vec3((20 - dis) * 0.01, (20 - dis) * 0.01, (50 - dis) * 0.01);
          }
        };

        return PlayerControll;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hp3D", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uiHp", [_dec4], {
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
//# sourceMappingURL=playerControll.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, CameraComponent, geometry, systemEvent, SystemEvent, PhysicsSystem, ParticleSystem, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, HpSp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      CameraComponent = _cc.CameraComponent;
      geometry = _cc.geometry;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      PhysicsSystem = _cc.PhysicsSystem;
      ParticleSystem = _cc.ParticleSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5750dJcaaxOZIJwMqWVG6Ex", "hpSp", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = HpSp
       * DateTime = Fri Oct 29 2021 16:10:01 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = hpSp.ts
       * FileBasenameNoExtension = hpSp
       * URL = db://assets/scripts/hpSp.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("HpSp", HpSp = (_dec = ccclass('HpSp'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ParticleSystem), _dec(_class = (_class2 = (_temp = class HpSp extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "uiHp", _descriptor, this);

          _initializerDefineProperty(this, "hp3dNode", _descriptor2, this);

          _initializerDefineProperty(this, "camerr", _descriptor3, this);

          _initializerDefineProperty(this, "par", _descriptor4, this);

          _defineProperty(this, "ray", null);
        }

        start() {
          // [3]
          this.ray = new geometry.Ray();
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.touchEnd, this);
        }

        touchEnd(e) {
          // 射线检测碰撞
          let ca = this.camerr.getComponent(CameraComponent);
          ca.screenPointToRay(e.getLocationX(), e.getLocationY(), this.ray);

          if (PhysicsSystem.instance.raycast(this.ray)) {
            let arr = PhysicsSystem.instance.raycastResults;

            for (let i = 0; i < arr.length; i++) {
              if (arr[i].collider.node.name == "Terrain") {
                console.log("碰撞到地面");
                this.par.play();
                this.par.node.worldPosition = arr[i].hitPoint;
                this.node.worldPosition = arr[i].hitPoint;
              }
            }
          }
        }

        update(deltaTime) {
          // 血条跟随
          let ve = new Vec3(0, 0, 0);
          this.uiHp.parent.getWorldPosition(ve);
          let ca = this.camerr.getComponent(CameraComponent);
          ca.convertToUINode(this.hp3dNode.worldPosition, this.uiHp.parent, ve);
          this.uiHp.setPosition(ve); // 血条近大远小的效果

          let dis = Vec3.distance(this.node.worldPosition, this.camerr.worldPosition);

          if (dis > 10) {
            this.uiHp.scale = new Vec3(0.02 * (100 / (dis - 10)), 0.02 * (100 / (dis - 10)), 1);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiHp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hp3dNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camerr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "par", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=hpSp.js.map
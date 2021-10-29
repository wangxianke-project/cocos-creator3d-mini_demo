System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CapsuleCollider, ConstantForce, Vec3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Collision;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CapsuleCollider = _cc.CapsuleCollider;
      ConstantForce = _cc.ConstantForce;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0f24nbVKdFPosjX0toX+UY", "collision", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Collision
       * DateTime = Fri Oct 29 2021 15:20:01 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = collision.ts
       * FileBasenameNoExtension = collision
       * URL = db://assets/scripts/collision.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Collision", Collision = (_dec = ccclass('Collision'), _dec2 = property(CapsuleCollider), _dec(_class = (_class2 = (_temp = class Collision extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "player", _descriptor, this);
        }

        start() {
          // [3]
          this.player.on("onCollisionEnter", () => {}, this);
          this.player.on("onCollisionStay", () => {}, this);
          this.player.on("onTriggerEnter", () => {});
          let con = this.player.node.getComponent(ConstantForce);
          con.localForce = new Vec3(0, 20, 0);
          con.localTorque = new Vec3(0, 30, 0);
        }

        update(deltaTime) {// [4]
          // let ri = this.player.node.getComponent(RigidBody);
          // ri.applyForce(new Vec3(10,0,0));
          // ri.applyTorque(new Vec3(0,20,0))
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
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
//# sourceMappingURL=collision.js.map
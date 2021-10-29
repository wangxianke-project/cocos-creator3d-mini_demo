System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, RigidBody, Vec3, CapsuleCollider, ConstantForce, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Physicals;

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
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      CapsuleCollider = _cc.CapsuleCollider;
      ConstantForce = _cc.ConstantForce;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a668A4oHJMP5HUQIkLSJbh", "physicals", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Physicals
       * DateTime = Thu Oct 28 2021 16:39:03 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = Physicals.ts
       * FileBasenameNoExtension = Physicals
       * URL = db://assets/scripts/Physicals.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Physicals", Physicals = (_dec = ccclass('Physicals'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Physicals, _Component);

        function Physicals() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "role", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "constantNode", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Physicals.prototype;

        // 恒力
        _proto.start = function start() {
          // PhysicsSystem.instance.enable
          // PhysicsSystem.instance.gravity
          // PhysicsSystem.instance.maxSubSteps
          // PhysicsSystem.instance.minVolumeSize
          // PhysicsSystem.instance.allowSleep
          // PhysicsSystem.instance.fixedTimeStep
          // PhysicsSystem.instance.sleepThreshold
          // PhysicsSystem.instance.autoSimulation
          var rig = this.role.getComponent(RigidBody); // 运动学和静态类型刚体 让物体移动

          this.role.translate(new Vec3(0, 10, 0)); // 动力学刚体 让物体移动

          rig.applyForce(new Vec3(0, 10, 0)); // 施加一个方向的里

          rig.applyTorque(new Vec3(0, 10, 0)); //  施加扭矩

          rig.applyImpulse(new Vec3(0, 10, 0)); // 施加冲量

          rig.setLinearVelocity(new Vec3(0, 10, 0)); // 设置线性速度
          // 碰撞监听 触发监听

          var coll = this.role.getComponent(CapsuleCollider);
          coll.on("onCollisionStay", function (e) {}, this);
          coll.on('onTriggerStay', function (e) {}, this); // 如果是高速运动的物体防止碰撞穿透，刚体需要开启CCD,连续监测碰撞

          rig.useCCD = true; // 恒力组件，每帧给刚体给定的力 和扭矩

          var con = this.constantNode.getComponent(ConstantForce);
          con.force = new Vec3(0, 10, 0);
          con.localTorque = new Vec3(0, 10, 0);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Physicals;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "constantNode", [_dec3], {
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
//# sourceMappingURL=physicals.js.map
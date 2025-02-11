System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, CameraComponent, geometry, systemEvent, SystemEvent, PhysicsSystem, ParticleSystem, Quat, tween, SkeletalAnimation, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, HpSp;

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
      Quat = _cc.Quat;
      tween = _cc.tween;
      SkeletalAnimation = _cc.SkeletalAnimation;
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

      _export("HpSp", HpSp = (_dec = ccclass('HpSp'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ParticleSystem), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class HpSp extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "uiHp", _descriptor, this);

          _initializerDefineProperty(this, "hp3dNode", _descriptor2, this);

          _initializerDefineProperty(this, "camerr", _descriptor3, this);

          _initializerDefineProperty(this, "par", _descriptor4, this);

          _initializerDefineProperty(this, "cube", _descriptor5, this);

          _defineProperty(this, "useLerpMove", true);

          _defineProperty(this, "move", false);

          _defineProperty(this, "lerpFinishPos", null);

          _defineProperty(this, "finishPos", new Vec3(0, 0, 0));

          _defineProperty(this, "moveSpeed", 20);

          _defineProperty(this, "ray", null);
        }

        start() {
          // [3]
          // 先播放idle动画
          this.node.getComponent(SkeletalAnimation).play("cocos_anim_idle");
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
                // console.log("碰撞到地面",arr[i].hitPoint);
                this.par.play();
                this.par.node.worldPosition = arr[i].hitPoint; // 粒子位置直接设置过去

                this.finishPos = arr[i].hitPoint;
                const qut = new Quat();
                const qut1 = new Quat();
                const qutStart = this.node.rotation;
                const dir = arr[i].hitPoint.subtract(this.node.worldPosition); // 求出到目标点的方向向量

                Quat.fromViewUp(qut, dir.normalize(), new Vec3(0, 1, 0)); // 计算出目标点的四元数
                // tween实现旋转

                const tw = tween(this.node);
                tw.to(0.2, {}, {
                  onUpdate: (target, ratio) => {
                    // ratio : 0~1
                    // 这里使用球面插值，旋转时不会出现变形
                    qut1.set(qutStart).slerp(qut, ratio);
                    this.node.setRotation(qut1);
                  }
                }).call(() => {
                  // 通过translate移动
                  this.move = true; // 播放跑的动画

                  this.node.getComponent(SkeletalAnimation).play("cocos_anim_run");
                });
                tw.start();
              }
            }
          }
        }

        update(deltaTime) {
          // 开始移动
          if (this.move) {
            if (this.useLerpMove) {
              // 通知插值移动
              // 1. 插值移动到目标点，更有真实性
              let start = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
              let end = new Vec3(this.par.node.worldPosition.x, this.node.position.y, this.par.node.worldPosition.z);
              let ve = new Vec3(0, 0, 0); // 插值后终点

              Vec3.lerp(ve, start, end, this.moveSpeed * deltaTime); // 每次终点取起点和终点的中间值

              this.node.setWorldPosition(ve);
            } else {
              // 2. 通过translate移动到目标点,效果不够真实圆滑
              this.node.translate(new Vec3(0, 0, 1).multiplyScalar(deltaTime * this.moveSpeed)); // 旋转后 想对于自己本地坐标想自己的前方移动
            } // 判断距离终点距离


            let dis = Vec3.distance(this.node.position, this.par.node.position);

            if (dis <= 0.2) {
              this.move = false;
              this.node.getComponent(SkeletalAnimation).play("cocos_anim_idle");
            }
          } // 血条跟随


          let ve = new Vec3(0, 0, 0);
          this.uiHp.parent.getWorldPosition(ve);
          let ca = this.camerr.getComponent(CameraComponent);
          ca.convertToUINode(this.hp3dNode.worldPosition, this.uiHp.parent, ve);
          this.uiHp.setPosition(ve); // 血条近大远小的效果

          let dis = Vec3.distance(this.node.worldPosition, this.camerr.worldPosition);

          if (dis > 10) {
            this.uiHp.scale = new Vec3(0.06 * (100 / (dis - 10)), 0.06 * (100 / (dis - 10)), 1);
          } //   let qu = math.quat()
          //   this.cube.rotate(math.Quat.rotateAround( math.quat(), math.quat(), this.cube.position,0.001))

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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cube", [_dec6], {
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
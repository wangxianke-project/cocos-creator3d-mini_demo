System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, CameraComponent, geometry, systemEvent, SystemEvent, PhysicsSystem, ParticleSystem, Quat, tween, SkeletalAnimation, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, HpSp;

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("HpSp", HpSp = (_dec = ccclass('HpSp'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ParticleSystem), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HpSp, _Component);

        function HpSp() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "uiHp", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "hp3dNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "camerr", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "par", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "cube", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "move", false);

          _defineProperty(_assertThisInitialized(_this), "ray", null);

          return _this;
        }

        var _proto = HpSp.prototype;

        _proto.start = function start() {
          // [3]
          this.node.getComponent(SkeletalAnimation).play("cocos_anim_idle");
          this.ray = new geometry.Ray();
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.touchEnd, this);
        };

        _proto.touchEnd = function touchEnd(e) {
          var _this2 = this;

          // 射线检测碰撞
          var ca = this.camerr.getComponent(CameraComponent);
          ca.screenPointToRay(e.getLocationX(), e.getLocationY(), this.ray);

          if (PhysicsSystem.instance.raycast(this.ray)) {
            var arr = PhysicsSystem.instance.raycastResults;

            for (var i = 0; i < arr.length; i++) {
              if (arr[i].collider.node.name == "Terrain") {
                (function () {
                  // console.log("碰撞到地面",arr[i].hitPoint);
                  _this2.par.play();

                  _this2.par.node.worldPosition = arr[i].hitPoint; // 粒子位置直接设置过去

                  var qut = new Quat();
                  var qut1 = new Quat();
                  var qutStart = _this2.node.rotation;
                  var dir = arr[i].hitPoint.subtract(_this2.node.worldPosition); // 求出到目标点的方向向量

                  Quat.fromViewUp(qut, dir.normalize(), new Vec3(0, 1, 0)); // 计算出目标点的四元数
                  // tween实现旋转

                  var tw = tween(_this2.node);
                  tw.to(0.2, {}, {
                    onUpdate: function onUpdate(target, ratio) {
                      // ratio : 0~1
                      // 这里使用球面插值，旋转时不会出现变形
                      qut1.set(qutStart).slerp(qut, ratio);

                      _this2.node.setRotation(qut1);
                    }
                  }).call(function () {
                    _this2.move = true;

                    _this2.node.getComponent(SkeletalAnimation).play("cocos_anim_run");
                  });
                  tw.start();
                })();
              }
            }
          }
        };

        _proto.update = function update(deltaTime) {
          // 开始移动
          if (this.move) {
            this.node.translate(new Vec3(0, 0, 1).multiplyScalar(0.1)); // 旋转后 想对于自己本地坐标想自己的前方移动

            var _dis = Vec3.distance(this.node.worldPosition, this.par.node.worldPosition);

            if (_dis <= 0.2) {
              this.move = false;
              this.node.getComponent(SkeletalAnimation).play("cocos_anim_idle");
            }
          } // 血条跟随


          var ve = new Vec3(0, 0, 0);
          this.uiHp.parent.getWorldPosition(ve);
          var ca = this.camerr.getComponent(CameraComponent);
          ca.convertToUINode(this.hp3dNode.worldPosition, this.uiHp.parent, ve);
          this.uiHp.setPosition(ve); // 血条近大远小的效果

          var dis = Vec3.distance(this.node.worldPosition, this.camerr.worldPosition);

          if (dis > 10) {
            this.uiHp.scale = new Vec3(0.02 * (100 / (dis - 10)), 0.02 * (100 / (dis - 10)), 1);
          } //   let qu = math.quat()
          //   this.cube.rotate(math.Quat.rotateAround( math.quat(), math.quat(), this.cube.position,0.001))

        };

        return HpSp;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiHp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hp3dNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camerr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "par", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cube", [_dec6], {
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
//# sourceMappingURL=hpSp.js.map
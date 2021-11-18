System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, v3, Quat, quat, _dec, _class, _crd, ccclass, property, CubeRotate;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      v3 = _cc.v3;
      Quat = _cc.Quat;
      quat = _cc.quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "792ectn8FBFK7VP5ypp0xZB", "cubeRotate", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = CubeRotate
       * DateTime = Wed Nov 03 2021 10:37:06 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = cubeRotate.ts
       * FileBasenameNoExtension = cubeRotate
       * URL = db://assets/scripts/cubeRotate.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */
      //  触摸cube实现 绕轴旋转

      _export("CubeRotate", CubeRotate = (_dec = ccclass('CubeRotate'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CubeRotate, _Component);

        function CubeRotate() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = CubeRotate.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {
          // [3]
          // 监听全局touchmove
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.touchMove = function touchMove(t, e) {
          // console.log(e.getDelta());
          // 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
          var delta = e.getDelta();
          var axis = v3(-delta.y, delta.x, 0); //旋转轴，根据相似三角形求出

          var rad = delta.length() * 1e-2; //旋转角度

          var quat_cur = this.node.getRotation(); //当前的四元数

          var qu = quat();
          console.log(axis.normalize());
          Quat.rotateAround(qu, quat_cur, axis.normalize(), rad); //当面的四元数绕旋转轴旋转
          // 旋转后的结果 / 当前的四元数 / 旋转轴 / 旋转四元数

          this.node.setRotation(qu);
        };

        return CubeRotate;
      }(Component)) || _class));
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
//# sourceMappingURL=cubeRotate.js.map
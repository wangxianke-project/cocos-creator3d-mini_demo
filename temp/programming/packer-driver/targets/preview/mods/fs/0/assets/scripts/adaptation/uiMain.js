System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, view, sys, Widget, ResolutionPolicy, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UiMain;

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
      view = _cc.view;
      sys = _cc.sys;
      Widget = _cc.Widget;
      ResolutionPolicy = _cc.ResolutionPolicy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12fd9WBwn1AIbl2GXVgt5Uk", "uiMain", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = UiMain
       * DateTime = Thu Nov 18 2021 15:41:25 GMT+0800 (中国标准时间)
       * Author = fywxk
       * FileBasename = uiMain.ts
       * FileBasenameNoExtension = uiMain
       * URL = db://assets/scripts/adaptation/uiMain.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("UiMain", UiMain = (_dec = ccclass('UiMain'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UiMain, _Component);

        function UiMain() {
          var _this2;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this2 = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this2), "pcBg", _descriptor, _assertThisInitialized(_this2));

          return _this2;
        }

        var _proto = UiMain.prototype;

        _proto.onLoad = function onLoad() {
          var design = view.getDesignResolutionSize(); // 设计分辨率，。就是设置的 750 1334 根据不同端做适配

          if (!sys.isMobile) {
            // pc端
            view.setDesignResolutionSize(design.width, design.height, ResolutionPolicy.FIXED_HEIGHT);
          } else {
            // 手机端
            view.setDesignResolutionSize(design.width, design.height, ResolutionPolicy.FIXED_WIDTH);
          }

          this.updateSizeFit();

          var _this = this; // 监听浏览器窗口大小变化


          view.setResizeCallback(function () {
            _this.updateSizeFit(); // rect.left, rect.top, rect.width, rect.height (像素值)

          });
        } // 根据浏览器窗口变化适配
        ;

        _proto.updateSizeFit = function updateSizeFit() {
          var rect = view.getVisibleSize(); // 获取实际显示的尺寸

          var design = view.getDesignResolutionSize(); // 获取设计分辨率

          var wi = this.node.getComponent(Widget); // 设置手机端和pc端canvas的显示位置，在pc是横屏的，但是canvas应该是中间的手机位置。所以要左右减 
          //  实际屏幕宽度的一半减去手机屏宽的一半，就是pcBg距离Canvas左侧的距离

          if (!sys.isMobile) {
            // pc端加背景图，实现中间显示手机界面
            wi.right = rect.width / 2 - rect.height * design.width / design.height / 2;
            wi.left = rect.width / 2 - rect.height * design.width / design.height / 2;
            wi.top = 0;
            wi.bottom = 0;
            wi.updateAlignment();
          } else {
            // 手机端 屏幕宽度高，就是canvas的宽高。，距离是0就可以
            wi.right = 0;
            wi.left = 0;
            wi.top = 0;
            wi.bottom = 0;
            wi.updateAlignment();
          } // pc大背景全屏显示，大背景图平铺到pc上，相对于canvas 左右都是负的宽的的一半


          var widget = this.pcBg.getComponent(Widget);
          widget.right = -rect.width / 2;
          widget.left = -rect.width / 2;
          widget.top = 0;
          widget.bottom = 0;
          widget.target = this.node;
          widget.updateAlignment();
        };

        return UiMain;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pcBg", [_dec2], {
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
//# sourceMappingURL=uiMain.js.map
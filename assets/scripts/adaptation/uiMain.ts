
import { _decorator, Component, Node, view, sys, Widget, ResolutionPolicy } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('UiMain')
export class UiMain extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Node)
    pcBg: Node = null;

    onLoad() {

        let design = view.getDesignResolutionSize(); // 设计分辨率，。就是设置的 750 1334 根据不同端做适配
        if(!sys.isMobile)
        {// pc端
            view.setDesignResolutionSize(design.width, design.height, ResolutionPolicy.FIXED_HEIGHT);
        }
        else
        {// 手机端
            view.setDesignResolutionSize(design.width, design.height, ResolutionPolicy.FIXED_WIDTH);
        }

        this.updateSizeFit();
        let _this = this;
        // 监听浏览器窗口大小变化
        view.setResizeCallback(function () {
            _this.updateSizeFit();
            // rect.left, rect.top, rect.width, rect.height (像素值)
        });
    }
     // 根据浏览器窗口变化适配
     updateSizeFit() {
        var rect = view.getVisibleSize();// 获取实际显示的尺寸
        var design = view.getDesignResolutionSize();// 获取设计分辨率
        let wi = this.node.getComponent(Widget);
        // 设置手机端和pc端canvas的显示位置，在pc是横屏的，但是canvas应该是中间的手机位置。所以要左右减 
        //  实际屏幕宽度的一半减去手机屏宽的一半，就是pcBg距离Canvas左侧的距离
        if (!sys.isMobile) { // pc端加背景图，实现中间显示手机界面
            wi.right = rect.width/2-(rect.height*design.width/design.height)/2;
            wi.left = rect.width/2-(rect.height*design.width/design.height)/2;
            wi.top = 0;
            wi.bottom = 0;
            wi.updateAlignment();
        }
        else
        { // 手机端 屏幕宽度高，就是canvas的宽高。，距离是0就可以
            wi.right = 0;
            wi.left = 0;
            wi.top = 0;
            wi.bottom = 0;
            wi.updateAlignment();
        }
        // pc大背景全屏显示，大背景图平铺到pc上，相对于canvas 左右都是负的宽的的一半
        var widget = this.pcBg.getComponent(Widget)
        widget.right = -rect.width/2;
        widget.left = -rect.width/2;
        widget.top = 0;
        widget.bottom = 0;
        widget.target = this.node;
        widget.updateAlignment();
    }
}

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

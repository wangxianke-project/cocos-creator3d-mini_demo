
import { _decorator, Component, Node, CameraComponent, RenderTexture, Sprite, Vec3, view, sys, find, Widget } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlayerCtrl
 * DateTime = Thu Nov 18 2021 15:42:27 GMT+0800 (中国标准时间)
 * Author = fywxk
 * FileBasename = playerCtrl.ts
 * FileBasenameNoExtension = playerCtrl
 * URL = db://assets/scripts/adaptation/playerCtrl.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('PlayerCtrl')
export class PlayerCtrl extends Component {
    @property(CameraComponent)
    cam: CameraComponent = null!;// 照射角色的相机

    @property(RenderTexture)
    render: RenderTexture = null!; // 渲染投射图

    @property(Sprite)
    show3d: Sprite = null!; //  显示投射的ui

    @property([Node])
    player3dHps: Node[] = []; // 所有角色3d血条位置
    @property([Node])
    uiHps: Node[] = []; // 所有血条ui

    start() {
        // 投影 吧3d照射的投影到2d ui上
        const renderTex = this.render;
        this.cam.targetTexture = renderTex;
        this.show3d.spriteFrame.texture = renderTex;
    }

    lateUpdate()
    {
        this.player3dHps.forEach((item, i) => {
            // 血条
            let ve1 = new Vec3(0, 0, 0)
            this.cam.worldToScreen(item.worldPosition, ve1);
            let design = view.getDesignResolutionSize();
            // 这里就是计算一下  浏览器端屏幕是横屏的，实际我们canvas区域是中间手机屏，而且血条还不能加widget固定死，所有在pc端
            // 转出来的坐标是实际屏幕算的，不是中间手机位置的，我们要计算到中间手机位置的区域，计算出的位置+屏幕左侧到手机屏的左侧的距离，就是中间手机的显示区域
            // 这里计算offsetHeight，是因为手机端是适配宽度，不同机型的实际高度不一，可能血条高于正常值或者低于，所以在这里要-(根据设计分辨率求出的高度-实际屏幕的高度)/2
            // 对于offsetHeight不理解，可以尝试在手机浏览器运行一下就明白了，和pc显示的差别
            let canvasWidget = find("Canvas").getComponent(Widget)
            let offsetHeight = !sys.isMobile?0: ((view.getVisibleSize().width*design.height/design.width)-view.getVisibleSize().height);// 计算出高度比实际分辨率的差距，
            this.uiHps[i].worldPosition = ve1.add(new Vec3(canvasWidget.left,-offsetHeight/2,0));;
        })
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
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

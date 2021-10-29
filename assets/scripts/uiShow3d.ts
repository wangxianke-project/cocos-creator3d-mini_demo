
import { _decorator, Component, Node, EventTouch, quat, math, RenderTexture, Sprite, Camera } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UiShow3d
 * DateTime = Thu Oct 28 2021 18:28:29 GMT+0800 (中国标准时间)
 * Author = fywxk
 * FileBasename = uiShow3d.ts
 * FileBasenameNoExtension = uiShow3d
 * URL = db://assets/scripts/uiShow3d.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('UiShow3d')
export class UiShow3d extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(RenderTexture)
    public render: RenderTexture = null!;

    @property(Node)
    cube:Node = null;

    @property(Node)
    touchScreenNode:Node=null;

    @property(Sprite)
    content:Sprite=null;

    touchStartPosX = 0;

    start () {
        this.touchScreenNode.on(Node.EventType.TOUCH_START,this.touchStart.bind(this),this)
        this.touchScreenNode.on(Node.EventType.TOUCH_MOVE,this.touchMove.bind(this),this)
        // 设置render
        const renderTex = this.render;

        const camera = this.getComponent(Camera)!;
        camera.targetTexture = renderTex;

        this.content.spriteFrame.texture = renderTex;
    }
     // 控制旋转
     touchStart(e:EventTouch)
     {
         this.touchStartPosX = e.getLocationX();
     }
     touchMove(e:EventTouch)
     { 
         let ang = (e.getLocationX()-this.touchStartPosX)
        
         const rotation1 = quat();
         const rotation2 = quat();
         let ro = math.Quat.rotateY(rotation1,rotation2,ang*0.01);
         this.cube.rotate(ro);
         this.touchStartPosX = e.getLocationX();
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

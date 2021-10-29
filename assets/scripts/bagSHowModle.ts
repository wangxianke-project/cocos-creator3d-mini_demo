
import { _decorator, Component, Node, RenderTexture, Sprite, CameraComponent, quat, math } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BagSHowModle
 * DateTime = Fri Oct 29 2021 15:54:56 GMT+0800 (中国标准时间)
 * Author = fywxk
 * FileBasename = bagSHowModle.ts
 * FileBasenameNoExtension = bagSHowModle
 * URL = db://assets/scripts/bagSHowModle.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('BagSHowModle')
export class BagSHowModle extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(RenderTexture)
    text:RenderTexture = null;
    @property(Node)
    playr:Node = null;

    @property(Sprite)
    modleUI:Sprite = null;
    @property(Node)
    touchNode = null;

    startX =0;

    start () {
        // [3]
        this.node.getComponent(CameraComponent).targetTexture = this.text;

        this.modleUI.spriteFrame.texture = this.text;

        this.touchNode.on(Node.EventType.TOUCH_START,this.touchStart,this)
        this.touchNode.on(Node.EventType.TOUCH_MOVE,this.touchMove,this)
    }
    touchStart(e)
    {
        this.startX = e.getLocationX();
    }
    touchMove(e)
    {
        let dis = e.getLocationX() - this.startX;

        let qu1 = quat();
        let qu2 = quat();
        
        let ro = math.Quat.rotateY(qu1,qu2,dis*0.01);
        this.playr.rotate(ro);
        this.startX = e.getLocationX();
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

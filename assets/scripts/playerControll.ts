
import { _decorator, Component, Node, systemEvent, EventKeyboard, SystemEvent, KeyCode, quat, math, SkeletalAnimation, Vec3, Camera } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlayerControll
 * DateTime = Thu Oct 28 2021 19:09:09 GMT+0800 (中国标准时间)
 * Author = fywxk
 * FileBasename = playerControll.ts
 * FileBasenameNoExtension = playerControll
 * URL = db://assets/scripts/playerControll.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('PlayerControll')
export class PlayerControll extends Component {
    // [1]
    // dummy = 
    @property(Node)
    camera:Node = null;
    @property(Node)
    hp3D:Node = null;
    @property(Node)
    uiHp:Node = null;

    move = false
    start() {
     
        
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyup, this);
        // [3]
    }
    onKeyDown(event) {
        let ang = -1000;
        const rotation1 = quat();
        const rotation2 = quat();
    
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                console.log('Press a key');
                ang = 180
                break;
            case KeyCode.KEY_A:
                console.log('Press a key');
                ang = -90
                break;
            case KeyCode.KEY_S:
                console.log('Press a key');
                ang = 90
                break;
            case KeyCode.KEY_D:
                console.log('Press a key');
                ang = 0
                break;
        }
        if(ang!=-1000)
        {
            this.move = true;
            let ro = math.Quat.rotateY(rotation1,rotation2,ang);
            this.node.rotation = math.Quat.slerp(rotation1,rotation2,ro,0.5);
        }
        else
        {
            this.move = false;
        }
        
    }
    onKeyup()
    {
        this.move = false;
    }
    update (deltaTime: number) {
        this.node.getComponent(SkeletalAnimation).play("cocos_anim_run")
        this.node.translate(this.node.forward,0);
        // [4]
        if(this.move)
        {
         
            
            // this.node.translate(this.node.forward,0);
        }
        else
        {
            // this.node.getComponent(SkeletalAnimation).play("cocos_anim_idle")
        }
        let ve = new Vec3(0,0,0);
        this.uiHp.parent.getWorldPosition(ve);
        let ca = this.camera.getComponent(Camera);
        ca.convertToUINode(this.hp3D.worldPosition,this.uiHp.parent,ve);
        this.uiHp.setPosition(ve)
        let dis = Vec3.distance(this.node.worldPosition,this.camera.worldPosition);
        if(dis>10)
        {
            this.uiHp.scale =  new Vec3(0.021*(100/(dis-10)),0.021*(100/(dis-10)),0) ;
        }
        else
        {
            this.uiHp.scale =  new Vec3((20-dis)*0.01,(20-dis)*0.01,(50-dis)*0.01) ;
        }


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

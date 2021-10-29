
import { _decorator, Component, Node, CapsuleCollider, ConstantForce, Vec3, RigidBody } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Collision
 * DateTime = Fri Oct 29 2021 15:20:01 GMT+0800 (中国标准时间)
 * Author = fywxk
 * FileBasename = collision.ts
 * FileBasenameNoExtension = collision
 * URL = db://assets/scripts/collision.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Collision')
export class Collision extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(CapsuleCollider)
    player:CapsuleCollider = null;

    start () {
        // [3]
        this.player.on("onCollisionEnter",()=>{

        },this)
        this.player.on("onCollisionStay",()=>{

        },this)
        this.player.on("onTriggerEnter",()=>{

        })

        let con = this.player.node.getComponent(ConstantForce);
        con.localForce = new Vec3(0,20,0);
        con.localTorque = new Vec3(0,30,0);
        
     
    }

    update (deltaTime: number) {
        // [4]
        // let ri = this.player.node.getComponent(RigidBody);
        // ri.applyForce(new Vec3(10,0,0));
        // ri.applyTorque(new Vec3(0,20,0))
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


import { _decorator, Component, Node, PhysicsSystem, find, RigidBody, Vec3, CapsuleCollider, ConstantForce } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Physicals
 * DateTime = Thu Oct 28 2021 16:39:03 GMT+0800 (中国标准时间)
 * Author = fywxk
 * FileBasename = Physicals.ts
 * FileBasenameNoExtension = Physicals
 * URL = db://assets/scripts/Physicals.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Physicals')
export class Physicals extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property({type:Node})
    role:Node=null;

    @property({type:Node})
    constantNode:Node=null; // 恒力

    start () {
        // PhysicsSystem.instance.enable
        // PhysicsSystem.instance.gravity
        // PhysicsSystem.instance.maxSubSteps
        // PhysicsSystem.instance.minVolumeSize
        // PhysicsSystem.instance.allowSleep
        // PhysicsSystem.instance.fixedTimeStep
        // PhysicsSystem.instance.sleepThreshold
        // PhysicsSystem.instance.autoSimulation
        let rig:RigidBody = this.role.getComponent(RigidBody);
        // 运动学和静态类型刚体 让物体移动
        this.role.translate(new Vec3(0,10,0))
        // 动力学刚体 让物体移动
        rig.applyForce(new Vec3(0,10,0));// 施加一个方向的里
        rig.applyTorque(new Vec3(0,10,0));//  施加扭矩
        rig.applyImpulse(new Vec3(0,10,0));// 施加冲量
        rig.setLinearVelocity(new Vec3(0,10,0))// 设置线性速度

        // 碰撞监听 触发监听
        let coll = this.role.getComponent(CapsuleCollider)
        coll.on("onCollisionStay",(e)=>{},this)
        coll.on('onTriggerStay', (e)=>{}, this);

        // 如果是高速运动的物体防止碰撞穿透，刚体需要开启CCD,连续监测碰撞
        rig.useCCD = true;


        // 恒力组件，每帧给刚体给定的力 和扭矩
        let con:ConstantForce = this.constantNode.getComponent(ConstantForce)
        con.force = new Vec3(0,10,0);
        con.localTorque = new Vec3(0,10,0);
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

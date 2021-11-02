
import { _decorator, Component, Node, ParticleSystem, systemEvent, SystemEvent, geometry, CameraComponent, PhysicsSystem, Vec3, Canvas, Camera, RigidBody, math, Vec2, quat, BatchingUtility } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Ray
 * DateTime = Fri Oct 29 2021 09:34:06 GMT+0800 (中国标准时间)
 * Author = fywxk
 * FileBasename = ray.ts
 * FileBasenameNoExtension = ray
 * URL = db://assets/scripts/ray.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Ray')
export class Ray extends Component {
    // [1]
    // dummy = '';

    // [2]
    @property(ParticleSystem)
    par:ParticleSystem = null!;

    @property(Node)
    player:Node = null!;

    ray:geometry.Ray = null;
    // serializableDummy = 0;

    targetDir = new Vec3();
    move = false;
    start () {
        // [3]
        // BatchingUtility.batchStaticModel()
        this.ray = new geometry.Ray();
        systemEvent.on(SystemEvent.EventType.TOUCH_END,e=>{
            this.node.getComponent(CameraComponent).screenPointToRay(e.getLocation().x,e.getLocation().y, this.ray);
            if (PhysicsSystem.instance.raycast(this.ray)) {
                const r = PhysicsSystem.instance.raycastResults;
                for (let i = 0; i < r.length; i++) {
                    const item = r[i];
                    if (item.collider.node.name == "Terrain") {
                        console.log("点击了地面");
                        
                        this.par.node.worldPosition = item.hitPoint
                        this.par.play();
                        this.targetDir = item.hitPoint.subtract(this.player.worldPosition);
                        let rad = Vec3.angle(this.targetDir,this.player.forward)
                        this.player.rotate(math.Quat.fromEuler(quat(), 0,rad,0));
                        this.move = true
                    }
                }
            }
           
        },this)
    }

    update (deltaTime: number) {
        if(this.move)
        {
            this.player.setPosition( this.par.node.worldPosition );
          
            // this.player.position.add(ve3);   
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

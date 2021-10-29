
import { _decorator, Component, Node, Vec3, CameraComponent, geometry, systemEvent, SystemEvent, PhysicsSystem, ParticleSystem } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = HpSp
 * DateTime = Fri Oct 29 2021 16:10:01 GMT+0800 (中国标准时间)
 * Author = fywxk
 * FileBasename = hpSp.ts
 * FileBasenameNoExtension = hpSp
 * URL = db://assets/scripts/hpSp.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('HpSp')
export class HpSp extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Node)
    uiHp:Node = null; // UI

    @property(Node)
    hp3dNode:Node = null; // 3d 血条挂点

    @property(Node)
    camerr:Node = null;

    @property(ParticleSystem)
    par:ParticleSystem = null;

    ray:geometry.Ray = null;
    start () {
        // [3]
        this.ray = new geometry.Ray();

        systemEvent.on(SystemEvent.EventType.TOUCH_END,this.touchEnd,this)
    }
    touchEnd(e)
    {
        // 射线检测碰撞
        let ca = this.camerr.getComponent(CameraComponent);
        ca.screenPointToRay(e.getLocationX(),e.getLocationY(),this.ray);
        if(PhysicsSystem.instance.raycast(this.ray))
        {
            let arr = PhysicsSystem.instance.raycastResults;
            for(let i=0;i<arr.length;i++)
            {
                if(arr[i].collider.node.name=="Terrain")
                {
                    console.log("碰撞到地面");
                    this.par.play();
                    this.par.node.worldPosition = arr[i].hitPoint;
                    this.node.worldPosition = arr[i].hitPoint;
                }
            }
        }
    }
    update (deltaTime: number) {
        // 血条跟随
      let ve = new Vec3(0,0,0)
      this.uiHp.parent.getWorldPosition(ve);
      let ca = this.camerr.getComponent(CameraComponent);
      ca.convertToUINode(this.hp3dNode.worldPosition,this.uiHp.parent,ve);
      this.uiHp.setPosition(ve)
        // 血条近大远小的效果
      let dis  = Vec3.distance(this.node.worldPosition,this.camerr.worldPosition);
      if(dis>10)
      {
          this.uiHp.scale = new Vec3(0.02*(100/(dis-10)),0.02*(100/(dis-10)),1)
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

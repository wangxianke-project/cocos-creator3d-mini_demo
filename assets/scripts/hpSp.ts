
import { _decorator, Component, Node, Vec3, CameraComponent, geometry, systemEvent, SystemEvent, PhysicsSystem, ParticleSystem, math, quat, Quat, tween, SkeletalAnimation, ConstantForce, RigidBody } from 'cc';
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
    uiHp: Node = null; // UI

    @property(Node)
    hp3dNode: Node = null; // 3d 血条挂点

    @property(Node)
    camerr: Node = null;

    @property(ParticleSystem)
    par: ParticleSystem = null;


    @property(Node)
    cube: Node = null;

    move = false;

    ray: geometry.Ray = null;
    start() {
        // [3]
        // 先播放idle动画
        this.node.getComponent(SkeletalAnimation).play("cocos_anim_idle")
        this.ray = new geometry.Ray();

        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.touchEnd, this)
    }
    touchEnd(e) {
        // 射线检测碰撞
        let ca = this.camerr.getComponent(CameraComponent);
        ca.screenPointToRay(e.getLocationX(), e.getLocationY(), this.ray);
        if (PhysicsSystem.instance.raycast(this.ray)) {
            let arr = PhysicsSystem.instance.raycastResults;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].collider.node.name == "Terrain") {
                    // console.log("碰撞到地面",arr[i].hitPoint);
                    this.par.play();
                    this.par.node.worldPosition = arr[i].hitPoint;// 粒子位置直接设置过去
                    const qut = new Quat();
                    const qut1 = new Quat();
                    const qutStart = this.node.rotation
                    const dir = arr[i].hitPoint.subtract(this.node.worldPosition);// 求出到目标点的方向向量
                    Quat.fromViewUp(qut, dir.normalize(), new Vec3(0, 1, 0))// 计算出目标点的四元数
                    // tween实现旋转
                    const tw = tween(this.node);
                    tw.to(0.2, {}, {
                        onUpdate: (target, ratio: number) => {
                            // ratio : 0~1
                            // 这里使用球面插值，旋转时不会出现变形
                            qut1.set(qutStart).slerp(qut, ratio)
                            this.node.setRotation(qut1);
                        },
                    }).call(() => {
                        this.move = true;
                        // 播放跑的动画
                        this.node.getComponent(SkeletalAnimation).play("cocos_anim_run")
                    })
                    tw.start();

                }
            }
        }
    }
    update(deltaTime: number) {
        // 开始移动
        if (this.move) {
            this.node.translate(new Vec3(0, 0, 1).multiplyScalar(0.1)); // 旋转后 想对于自己本地坐标想自己的前方移动
            let dis = Vec3.distance(this.node.worldPosition, this.par.node.worldPosition)
            if (dis <= 0.2) {
                this.move = false;
                this.node.getComponent(SkeletalAnimation).play("cocos_anim_idle")
            }
        }
        // 血条跟随
        let ve = new Vec3(0, 0, 0)
        this.uiHp.parent.getWorldPosition(ve);
        let ca = this.camerr.getComponent(CameraComponent);
        ca.convertToUINode(this.hp3dNode.worldPosition, this.uiHp.parent, ve);
        this.uiHp.setPosition(ve)
        // 血条近大远小的效果
        let dis = Vec3.distance(this.node.worldPosition, this.camerr.worldPosition);
        if (dis > 10) {
            this.uiHp.scale = new Vec3(0.02 * (100 / (dis - 10)), 0.02 * (100 / (dis - 10)), 1)

        }


        //   let qu = math.quat()
        //   this.cube.rotate(math.Quat.rotateAround( math.quat(), math.quat(), this.cube.position,0.001))
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

import { Entity, type IEntityParams } from "../../entity/Entity";
import { Vec3 } from "../../math/Vec3";
export interface IRotationEntityParams extends IEntityParams {
}
export declare class RotateEntity extends Entity {
    constructor(params?: IRotationEntityParams);
    private _init;
    setCartesian3v(cart: Vec3, yaw?: number): void;
}

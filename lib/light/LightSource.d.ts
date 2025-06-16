import { Vec3 } from "../math/Vec3";
import { RenderNode } from "../scene/RenderNode";
export interface ILightSourceParams {
    position?: Vec3;
    ambient?: Vec3;
    diffuse?: Vec3;
    specular?: Vec3;
    shininess?: number;
}
declare class LightSource {
    protected _renderNode: RenderNode | null;
    _position: Vec3;
    protected _ambient: Vec3;
    protected _diffuse: Vec3;
    protected _specular: Vec3;
    protected _shininess: number;
    protected _active: boolean;
    protected _tempAmbient: Vec3;
    protected _tempDiffuse: Vec3;
    protected _tempSpecular: Vec3;
    protected _tempShininess: number;
    constructor(params: ILightSourceParams);
    isActive(): boolean;
    setPosition3v(position: Vec3): void;
    setPosition(x: number, y: number, z: number): void;
    getPosition(): Vec3;
    setAmbient3v(rgb: Vec3): void;
    setDiffuse3v(rgb: Vec3): void;
    setSpecular3v(rgb: Vec3): void;
    setAmbient(r: number, g: number, b: number): void;
    setDiffuse(r: number, g: number, b: number): void;
    setSpecular(r: number, g: number, b: number): void;
    setShininess(shininess: number): void;
    addTo(renderNode: RenderNode): void;
}
export { LightSource };

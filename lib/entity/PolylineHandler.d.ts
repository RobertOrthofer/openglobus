import { EntityCollection } from "./EntityCollection";
import { Polyline } from "./Polyline";
import { Renderer } from "../renderer/Renderer";
import { RenderNode } from "../scene/RenderNode";
import { Vec3 } from "../math/Vec3";
declare class PolylineHandler {
    static __counter__: number;
    protected __id: number;
    _entityCollection: EntityCollection;
    pickingEnabled: boolean;
    protected _renderer: Renderer | null;
    protected _polylines: Polyline[];
    _relativeCenter: Vec3;
    _rtcEyePositionHigh: Float32Array;
    _rtcEyePositionLow: Float32Array;
    constructor(entityCollection: EntityCollection);
    protected _initProgram(): void;
    setRenderNode(renderNode: RenderNode): void;
    add(polyline: Polyline): void;
    remove(polyline: Polyline): void;
    reindexPolylineArray(startIndex: number): void;
    draw(): void;
    drawPicking(): void;
    clear(): void;
    getRTCPosition(pos: Vec3, rtcPositionHigh: Vec3, rtcPositionLow: Vec3): void;
    setRelativeCenter(c: Vec3): void;
    protected _updateRTCEyePosition(): void;
}
export { PolylineHandler };

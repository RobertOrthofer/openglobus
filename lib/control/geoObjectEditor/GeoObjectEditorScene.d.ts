import { type EventsHandler } from '../../Events';
import { Planet } from "../../scene/Planet";
import { RenderNode } from '../../scene/RenderNode';
import { Vec2 } from '../../math/Vec2';
import { Vec3 } from '../../math/Vec3';
import { Quat } from '../../math/Quat';
import type { IMouseState } from "../../renderer/RendererEvents";
import { Ellipsoid } from "../../ellipsoid/Ellipsoid";
import { Entity } from "../../entity/Entity";
import { MoveAxisEntity } from "./MoveAxisEntity";
import { MovePlaneEntity } from "./MovePlaneEntity";
import { RotateEntity } from "./RotateEntity";
import { AxisTrackEntity } from "./AxisTrackEntity";
import { EntityCollection } from "../../entity/EntityCollection";
export interface IGeoObjectEditorSceneParams {
    planet?: Planet;
    name?: string;
}
type GeoObjectSceneEventsList = [
    "mousemove",
    "mouseenter",
    "mouseleave",
    "lclick",
    "rclick",
    "mclick",
    "ldblclick",
    "rdblclick",
    "mdblclick",
    "lup",
    "rup",
    "mup",
    "ldown",
    "rdown",
    "mdown",
    "lhold",
    "rhold",
    "mhold",
    "mousewheel",
    "touchmove",
    "touchstart",
    "touchend",
    "doubletouch",
    "touchleave",
    "touchenter",
    "select",
    "unselect",
    "change",
    "position",
    "pitch",
    "yaw",
    "roll",
    "scale"
];
declare class GeoObjectEditorScene extends RenderNode {
    events: EventsHandler<GeoObjectSceneEventsList>;
    protected _planet: Planet | null;
    protected _startPos: Vec2 | null;
    protected _startClick: Vec2;
    protected _moveLayer: EntityCollection;
    protected _planeLayer: EntityCollection;
    protected _rotateLayer: EntityCollection;
    protected _axisTrackLayer: EntityCollection;
    protected _selectedEntity: Entity | null;
    protected _selectedEntityCart: Vec3;
    protected _selectedEntityPitch: number;
    protected _selectedEntityYaw: number;
    protected _selectedEntityRoll: number;
    protected _clickPos: Vec2;
    protected _axisEntity: MoveAxisEntity;
    protected _planeEntity: MovePlaneEntity;
    protected _rotateEntity: RotateEntity;
    protected _axisTrackEntity: AxisTrackEntity;
    protected _selectedMove: string | null;
    protected _ops: Record<string, (mouseState: IMouseState) => void>;
    protected _axisTrackVisibility: boolean;
    constructor(options?: IGeoObjectEditorSceneParams);
    get ellipsoid(): Ellipsoid | undefined;
    get planet(): Planet | null;
    bindPlanet(planet: Planet): void;
    init(): void;
    onremove(): void;
    protected _addAxisLayers(): void;
    protected _onAxisLayerMouseEnter: (e: IMouseState) => void;
    protected _onAxisLayerMouseLeave: (e: IMouseState) => void;
    protected _navActivate(): void;
    protected _navDeactivate(): void;
    protected _onAxisLayerLUp: (e: IMouseState) => void;
    protected _onAxisLayerLDown: (e: IMouseState) => void;
    protected _onPlaneLayerMouseEnter: (e: IMouseState) => void;
    protected _onPlaneLayerMouseLeave: (e: IMouseState) => void;
    protected _onPlaneLayerLUp: (e: IMouseState) => void;
    protected _onPlaneLayerLDown: (e: IMouseState) => void;
    protected _onRotateLayerMouseEnter: (e: IMouseState) => void;
    protected _onRotateLayerMouseLeave: (e: IMouseState) => void;
    protected _onRotateLayerLUp: (e: IMouseState) => void;
    protected _onRotateLayerLDown: (e: IMouseState) => void;
    protected _onMouseMove: (e: IMouseState) => void;
    protected _removeAxisLayers(): void;
    activate(): void;
    protected deactivate(): void;
    protected _setAxisTrackVisibility(visibility: boolean): void;
    setVisibility(visibility: boolean): void;
    readyToEdit(entity: Entity): boolean;
    select(entity: Entity): void;
    unselect(): void;
    protected _onLclick: (e: IMouseState) => void;
    clear(): void;
    frame(): void;
    protected get _ellipsoid(): Ellipsoid | null;
    protected _moveX: (e: IMouseState) => void;
    protected _moveY: (e: IMouseState) => void;
    protected _moveZ: (e: IMouseState) => void;
    protected _moveXZ: (e: IMouseState) => void;
    protected _moveXY: (e: IMouseState) => void;
    protected _moveZY: (e: IMouseState) => void;
    getFrameRotation(cartesian: Vec3): Quat;
    protected _rotatePitch: (e: IMouseState) => void;
    protected _rotateYaw: (e: IMouseState) => void;
    protected _rotateRoll: (e: IMouseState) => void;
    protected _scale: (e: IMouseState) => void;
    protected _scaleX: (e: IMouseState) => void;
    protected _scaleY: (e: IMouseState) => void;
    protected _scaleZ: (e: IMouseState) => void;
    getSelectedEntity(): Entity | null;
    lockView(): void;
    unlockView(): void;
}
export { GeoObjectEditorScene };

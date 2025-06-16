import { Control } from "./Control";
import type { IControlParams } from "./Control";
import type { IMouseState } from "../renderer/RendererEvents";
import { Vec3 } from "../math/Vec3";
interface ISimpleNavigationParams extends IControlParams {
    speed?: number;
}
/**
 * Simple keyboard camera navigation with W,S,A,D and shift keys to fly around the scene.
 */
export declare class SimpleNavigation extends Control {
    speed: number;
    force: Vec3;
    vel: Vec3;
    mass: number;
    protected _lookPos: Vec3 | undefined;
    protected _up: Vec3 | null;
    protected _grabbedPoint: Vec3 | undefined;
    protected _eye0: Vec3;
    constructor(options?: ISimpleNavigationParams);
    oninit(): void;
    onactivate(): void;
    ondeactivate(): void;
    protected _onMouseLeftButtonClick: (e: IMouseState) => void;
    protected _onMouseLeftButtonUp: (e: IMouseState) => void;
    protected _onMouseLeftButtonDown: (e: IMouseState) => void;
    protected _onRHold: (e: IMouseState) => void;
    protected _onRDown: (e: IMouseState) => void;
    protected _onMouseWheel: (e: IMouseState) => void;
    protected onCameraMoveForward: () => void;
    protected onCameraMoveBackward: () => void;
    protected onCameraStrifeLeft: () => void;
    protected onCameraStrifeRight: () => void;
    protected onCameraLookUp: () => void;
    protected onCameraLookDown: () => void;
    protected onCameraTurnLeft: () => void;
    protected onCameraTurnRight: () => void;
    protected onCameraRollLeft: () => void;
    protected onCameraRollRight: () => void;
    protected get dt(): number;
    protected onDraw(): void;
}
export {};

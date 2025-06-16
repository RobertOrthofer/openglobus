import { Control, IControlParams } from "./Control";
import { Camera } from "../camera/Camera";
import { Framebuffer } from "../webgl/Framebuffer";
import { WebGLContextExt } from "../webgl/Handler";
type HandlerFunc = (camera?: Camera, framebuffer?: Framebuffer, gl?: WebGLContextExt | null) => void;
export interface ICameraFrameHadler {
    camera: Camera;
    frameBuffer: Framebuffer;
    handler: HandlerFunc;
}
export declare class CameraFrameHandler {
    camera: Camera;
    frameBuffer: Framebuffer;
    handler: HandlerFunc | null;
    protected _composer: CameraFrameComposer | null;
    protected _composerIndex: number;
    constructor(params: ICameraFrameHadler);
    addTo(composer: CameraFrameComposer): void;
    remove(): void;
    frame(): void;
}
export interface ICameraFrameComposerParams extends IControlParams {
    handlers: CameraFrameHandler[];
}
export declare class CameraFrameComposer extends Control {
    protected _handlers: CameraFrameHandler[];
    constructor(params: ICameraFrameComposerParams);
    get handlers(): CameraFrameHandler[];
    add(handler: CameraFrameHandler): void;
    oninit(): void;
    activate(): void;
    deactivate(): void;
    protected _onPostdraw: () => void;
}
export {};

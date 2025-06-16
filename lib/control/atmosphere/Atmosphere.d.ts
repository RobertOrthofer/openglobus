import { type AtmosphereParameters } from "../../shaders/atmos/atmos";
import { Framebuffer } from "../../webgl/Framebuffer";
import { Control, type IControlParams } from "../Control";
export interface IAtmosphereParams extends IControlParams {
    height?: number;
    rayleighScale?: number;
    mieScale?: number;
    groundAlbedo?: number;
    bottomRadius?: number;
    rayleighScatteringCoefficient_0?: number;
    rayleighScatteringCoefficient_1?: number;
    rayleighScatteringCoefficient_2?: number;
    mieScatteringCoefficient?: number;
    mieExtinctionCoefficient?: number;
    ozoneAbsorptionCoefficient_0?: number;
    ozoneAbsorptionCoefficient_1?: number;
    ozoneAbsorptionCoefficient_2?: number;
    sunAngularRadius?: number;
    sunIntensity?: number;
    ozoneDensityHeight?: number;
    ozoneDensityWide?: number;
}
export declare class Atmosphere extends Control {
    _transmittanceBuffer: Framebuffer | null;
    _scatteringBuffer: Framebuffer | null;
    opacity: number;
    protected _parameters: AtmosphereParameters;
    constructor(options?: IAtmosphereParams);
    setParameters(parameters: AtmosphereParameters): void;
    get parameters(): AtmosphereParameters;
    initPlanetAtmosphereShader(): void;
    oninit(): void;
    initLookupTexturesShaders(): void;
    initBackgroundShader(): void;
    removeBackgroundShader(): void;
    removeLookupTexturesShaders(): void;
    onactivate(): void;
    ondeactivate(): void;
    protected _initLookupTextures(): void;
    protected _renderLookupTextures(): void;
    drawLookupTextures(): void;
    protected _drawBackground(): void;
}

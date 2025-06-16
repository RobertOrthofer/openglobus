import { Program } from '../../webgl/Program';
export interface AtmosphereParameters {
    ATMOS_HEIGHT: number;
    RAYLEIGH_SCALE: number;
    MIE_SCALE: number;
    GROUND_ALBEDO: number;
    BOTTOM_RADIUS: number;
    rayleighScatteringCoefficient_0: number;
    rayleighScatteringCoefficient_1: number;
    rayleighScatteringCoefficient_2: number;
    mieScatteringCoefficient: number;
    mieExtinctionCoefficient: number;
    ozoneAbsorptionCoefficient_0: number;
    ozoneAbsorptionCoefficient_1: number;
    ozoneAbsorptionCoefficient_2: number;
    SUN_ANGULAR_RADIUS: number;
    SUN_INTENSITY: number;
    ozoneDensityHeight: number;
    ozoneDensityWide: number;
}
export declare function transmittance(atmosParams?: AtmosphereParameters): Program;
export declare function scattering(atmosParams?: AtmosphereParameters): Program;

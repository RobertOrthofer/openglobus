import type { TypedArray } from './utils/shared';
import { Vec3 } from './math/Vec3';
import type { NumberArray3 } from './math/Vec3';
import { Mat4 } from "./math/Mat4";
interface IObject3dParams {
    name?: string;
    vertices?: number[];
    texCoords?: number[];
    indices?: number[];
    normals?: number[];
    center?: boolean;
    color?: number[] | TypedArray | string;
    scale?: number | Vec3;
    ambient?: string | NumberArray3;
    diffuse?: string | NumberArray3;
    specular?: string | NumberArray3;
    shininess?: number;
    colorTexture?: string;
    normalTexture?: string;
    metallicRoughnessTexture?: string;
}
type MaterialParams = Pick<IObject3dParams, 'ambient' | 'diffuse' | 'specular' | 'shininess'>;
declare class Object3d {
    protected _name: string;
    protected _vertices: number[];
    protected _numVertices: number;
    protected _texCoords: number[];
    protected _indices: number[];
    protected _normals: number[];
    color: Float32Array;
    ambient: Float32Array;
    diffuse: Float32Array;
    specular: Float32Array;
    shininess: number;
    colorTexture: string;
    normalTexture: string;
    metallicRoughnessTexture: string;
    center: Vec3;
    constructor(data?: IObject3dParams);
    static getCenter(verts: number[]): Vec3;
    static centering(verts: number[]): void;
    /**
     * Sets the material properties for the 3D object.
     *
     * @param {MaterialParams} data - An object containing material properties.
     * @param {string | NumberArray3} [data.ambient] - Ambient color of the material, as a hex string (e.g., "#ffffff") or an array of three numbers [r, g, b].
     * @param {string | NumberArray3} [data.diffuse] - Diffuse color of the material.
     * @param {string | NumberArray3} [data.specular] - Specular color of the material.
     * @param {number} [data.shininess=100] - Shininess coefficient of the material, controlling specular highlight size.
     */
    setMaterial(data: MaterialParams): this;
    centering(): this;
    applyMat4(m: Mat4): this;
    scale(s: Vec3): this;
    translate(v: Vec3): this;
    get name(): string;
    get vertices(): number[];
    get normals(): number[];
    get indices(): number[];
    get texCoords(): number[];
    get numVertices(): number;
    static scale(vertices: number[], s: Vec3): void;
    static centroid(vertices: number[]): number[];
    static translate(vertices: number[], v: NumberArray3): void;
    static getNormals(vertices: number[]): number[];
    static createSphere(lonBands?: number, latBands?: number, radius?: number, offsetX?: number, offsetY?: number, offsetZ?: number): Object3d;
    static createDisc(radius?: number, height?: number, radialSegments?: number, isTop?: boolean, startIndex?: number, offsetX?: number, offsetY?: number, offsetZ?: number): Object3d;
    /**
     * Returns scale parameters for a frustum geoObject created with only Object3d.createFrustum();
     * @param length
     * @param horizontalAngle
     * @param verticalAngle
     */
    static getFrustumScaleByCameraAngles(length: number, horizontalAngle: number, verticalAngle: number): Vec3;
    /**
     * Returns scale parameters for a frustum geoObject created with only Object3d.createFrustum();
     * @param length
     * @param horizontalAngle
     * @param aspectRatio
     */
    static getFrustumScaleByCameraAspectRatio(length: number, horizontalAngle: number, aspectRatio: number): Vec3;
    static createFrustum(length?: number, width?: number, height?: number, xOffset?: number, yOffset?: number, zOffset?: number): Object3d;
    static createCylinder(radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, isTop?: boolean, isBottom?: boolean, offsetX?: number, offsetY?: number, offsetZ?: number): Object3d;
    static createCube(length?: number, height?: number, depth?: number, xOffset?: number, yOffset?: number, zOffset?: number): Object3d;
    static createPlane(width?: number, height?: number, xOffset?: number, yOffset?: number, zOffset?: number): Object3d;
    static createArrow(back?: number, height?: number, front?: number): Object3d;
    static readFileObj(objFile: File, mtlFile?: File | null, baseUrl?: string): Promise<Object3d[]>;
    static loadObj(src: string): Promise<Object3d[]>;
    merge(other: Object3d): Object3d;
    static merge(objects: Object3d[], maxSize?: number): Object3d;
}
export { Object3d };

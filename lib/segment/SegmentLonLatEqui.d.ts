import { Extent } from "../Extent";
import { Node } from "../quadTree/Node";
import { Planet } from "../scene/Planet";
import { SegmentLonLat } from "./SegmentLonLat";
import type { WebGLTextureExt } from "../webgl/Handler";
export declare const POLE_PIECE_SIZE: number;
export declare class SegmentLonLatEqui extends SegmentLonLat {
    constructor(node: Node, planet: Planet, tileZoom: number, extent: Extent);
    protected _getMaxZoom(): number;
    protected _assignTileYIndexes(extent: Extent): void;
    protected _assignTileXIndexes(extent: Extent): void;
    getDefaultTexture(): WebGLTextureExt | null;
}

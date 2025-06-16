import { Billboard } from "./Billboard";
import { EntityCollection } from "./EntityCollection";
import type { IBillboardParams } from "./Billboard";
import type { EntityCollectionEvents } from "./EntityCollection";
import { Extent } from "../Extent";
import { Geometry } from "./Geometry";
import { GeoObject } from "./GeoObject";
import type { IGeometryParams } from "./Geometry";
import type { IGeoObjectParams } from "./GeoObject";
import { LonLat } from "../LonLat";
import { Label } from "./Label";
import type { ILabelParams } from "./Label";
import { Vec3 } from "../math/Vec3";
import type { NumberArray3 } from "../math/Vec3";
import type { NumberArray2 } from "../math/Vec2";
import { PointCloud } from "./PointCloud";
import { Polyline } from "./Polyline";
import type { IPointCloudParams } from "./PointCloud";
import type { IPolylineParams } from "./Polyline";
import { Ray } from "./Ray";
import type { IRayParams } from "./Ray";
import { Strip } from "./Strip";
import type { IStripParams } from "./Strip";
import { Vector } from "../layer/Vector";
import type { VectorEventsType } from "../layer/Vector";
import { EntityCollectionNode } from "../quadTree/EntityCollectionNode";
import { Quat } from "../math/Quat";
/**
 * Interface for Entity parameters.
 * @typedef {Object} IEntityParams
 * @property {string} [name] - Name of the entity.
 * @property {any} [properties] - Additional properties of the entity.
 * @property {Vec3 | NumberArray3} [cartesian] - Cartesian position.
 * @property {LonLat | NumberArray3 | NumberArray2} [lonlat] - Geographic coordinates.
 * @property {number} [altitude] - Altitude.
 * @property {boolean} [visibility] - Visibility flag.
 * @property {Billboard | IBillboardParams} [billboard] - Billboard object or parameters.
 * @property {Label | ILabelParams} [label] - Label object or parameters.
 * @property {Polyline | IPolylineParams} [polyline] - Polyline object or parameters.
 * @property {Ray | IRayParams} [ray] - Ray object or parameters.
 * @property {PointCloud | IPointCloudParams} [pointCloud] - Point cloud object or parameters.
 * @property {Geometry | IGeometryParams} [geometry] - Geometry object or parameters.
 * @property {GeoObject | IGeoObjectParams} [geoObject] - Geo object or parameters.
 * @property {Strip | IStripParams} [strip] - Strip object or parameters.
 * @property {boolean} [independentPicking] - Independent picking flag.
 * @property {boolean} [relativePosition] - Parent relative position flag, otherwise position is absolute.
 * @property {number} [pitch] - Rotation around local X-axis.
 * @property {number} [yaw] - Rotation around local Y-axis.
 * @property {number} [roll] - Rotation around local Z-axis.
 * @property {number | Vec3 | NumberArray3} [scale] - Scaling factor.
 * @property {boolean} [forceGlobalPosition] - Forces global position for entity make the same position as its parent.
 * @property {boolean} [forceGlobalRotation] - Forces global rotation for the entity make the same rotation as its parent.
 */
export interface IEntityParams {
    name?: string;
    properties?: any;
    cartesian?: Vec3 | NumberArray3;
    lonlat?: LonLat | NumberArray3 | NumberArray2;
    altitude?: number;
    visibility?: boolean;
    billboard?: Billboard | IBillboardParams;
    label?: Label | ILabelParams;
    polyline?: Polyline | IPolylineParams;
    ray?: Ray | IRayParams;
    pointCloud?: PointCloud | IPointCloudParams;
    geometry?: Geometry | IGeometryParams;
    geoObject?: GeoObject | IGeoObjectParams;
    strip?: Strip | IStripParams;
    independentPicking?: boolean;
    relativePosition?: boolean;
    pitch?: number;
    yaw?: number;
    roll?: number;
    scale?: number | Vec3 | NumberArray3;
    forceGlobalPosition?: boolean;
    forceGlobalRotation?: boolean;
    forceGlobalScale?: boolean;
    localPosition?: Vec3 | NumberArray3;
}
/**
 * Entity instances aggregate multiple forms of visualization into a single high-level object.
 * They can be created manually and added to entity collection.
 *
 * @class
 * @param {IEntityParams} [options] - Entity options:
 * @param {string} [options.name] - Name of the entity.
 * @param {any} [options.properties] - Additional properties of the entity.
 * @param {Vec3 | NumberArray3} [options.cartesian] - Cartesian position.
 * @param {LonLat | NumberArray3 | NumberArray2} [options.lonlat] - Geographic coordinates.
 * @param {number} [options.altitude] - Altitude.
 * @param {boolean} [options.visibility] - Visibility flag.
 * @param {Billboard | IBillboardParams} [options.billboard] - Billboard object or parameters.
 * @param {Label | ILabelParams} [options.label] - Label object or parameters.
 * @param {Polyline | IPolylineParams} [options.polyline] - Polyline object or parameters.
 * @param {Ray | IRayParams} [options.ray] - Ray object or parameters.
 * @param {PointCloud | IPointCloudParams} [options.pointCloud] - Point cloud object or parameters.
 * @param {Geometry | IGeometryParams} [options.geometry] - Geometry object or parameters.
 * @param {GeoObject | IGeoObjectParams} [options.geoObject] - Geo object or parameters.
 * @param {Strip | IStripParams} [options.strip] - Strip object or parameters.
 * @param {boolean} [options.independentPicking] - Independent picking flag.
 * @param {boolean} [options.relativePosition] - Parent relative position flag, otherwise position is absolute.
 * @param {number} [options.pitch] - Rotation around local X-axis in radians.
 * @param {number} [options.yaw] - Rotation around local Y-axis in radians.
 * @param {number} [options.roll] - Rotation around local Z-axis in radians.
 * @param {number | Vec3 | NumberArray3} [options.scale] - Scaling factor.
 * @param {boolean} [options.forceGlobalPosition] - Forces global position for the entity make the same position as its parent.
 * @param {boolean} [options.forceGlobalRotation] - Forces global rotation for the entity make the same rotation as its parent.
 * @param {boolean} [options.forceGlobalScale] - Forces global scale for the entity make the same scale as its parent.
 */
declare class Entity {
    static __counter__: number;
    /**
     * Uniq identifier.
     * @public
     * @readonly
     */
    protected __id: number;
    /**
     * Entity user defined properties.
     * @public
     * @type {Object}
     */
    properties: any;
    /**
     * Children entities.
     * @public
     * @type {Array.<Entity>}
     */
    childEntities: Entity[];
    forceGlobalPosition: boolean;
    forceGlobalRotation: boolean;
    forceGlobalScale: boolean;
    /**
     * Parent entity.
     * @public
     * @type {Entity}
     */
    parent: Entity | null;
    /**
     * Entity cartesian position.
     * @protected
     * @type {Vec3}
     */
    _cartesian: Vec3;
    /**
     * Entity cartesian is equal root entity absolute cartesian.
     * @protected
     * @type {Vec3}
     */
    protected _rootCartesian: Vec3;
    protected _localPosition: Vec3;
    protected _absoluteLocalPosition: Vec3;
    /**
     * Geodetic entity coordinates.
     * @public
     * @type {LonLat}
     */
    _lonLat: LonLat;
    /**
     * World Mercator entity coordinates.
     * @public
     * @type {LonLat}
     */
    _lonLatMerc: LonLat;
    /**
     * Entity visible terrain altitude.
     * @public
     * @type {number}
     */
    _altitude: number;
    /**
     * Visibility flag.
     * @protected
     * @type {boolean}
     */
    protected _visibility: boolean;
    /**
     * Entity collection that this entity belongs to.
     * @public
     * @type {EntityCollection}
     */
    _entityCollection: EntityCollection | null;
    /**
     * Entity collection array store index.
     * @public
     * @type {number}
     */
    _entityCollectionIndex: number;
    /**
     * Assigned vector layer pointer.
     * @public
     * @type {Vector}
     */
    _layer: Vector | null;
    /**
     * Assigned vector layer entity array index.
     * @public
     * @type {number}
     */
    _layerIndex: number;
    /**
     * Picking color.
     * @public
     * @type {Vec3}
     */
    _pickingColor: Vec3;
    _independentPicking: boolean;
    protected _featureConstructorArray: Record<string, [any, Function]>;
    /**
     * Billboard entity.
     * @public
     * @type {Billboard | null}
     */
    billboard: Billboard | null;
    /**
     * Text label entity.
     * @public
     * @type {Label | null}
     */
    label: Label | null;
    /**
     * Polyline entity.
     * @public
     * @type {Polyline | null}
     */
    polyline: Polyline | null;
    /**
     * Ray entity.
     * @public
     * @type {Ray | null}
     */
    ray: Ray | null;
    /**
     * PointCloud entity.
     * @public
     * @type {PointCloud | null}
     */
    pointCloud: PointCloud | null;
    /**
     * Geometry entity(available for vector layer only).
     * @public
     * @type {Geometry | null}
     */
    geometry: Geometry | null;
    /**
     * Geo object entity
     * @public
     * @type {Geometry | null}
     */
    geoObject: GeoObject | null;
    /**
     * Strip entity.
     * @public
     * @type {Strip | null}
     */
    strip: Strip | null;
    _nodePtr?: EntityCollectionNode;
    protected _relativePosition: boolean;
    protected _pitchRad: number;
    protected _yawRad: number;
    protected _rollRad: number;
    protected _scale: Vec3;
    protected _qFrame: Quat;
    protected _qRot: Quat;
    _absoluteQRot: Quat;
    constructor(options?: IEntityParams);
    /**
     * Returns root entity object.
     * @public
     * @return {Entity}
     */
    get rootEntity(): Entity;
    /**
     * Sets relative position property
     * @param isRelative
     */
    set relativePosition(isRelative: boolean);
    /**
     * Gets relative position property
     * @public
     * @returns{boolean}
     */
    get relativePosition(): boolean;
    /**
     * Gets current entity collection container.
     * @public
     * @returns {EntityCollection | null}
     */
    get entityCollection(): EntityCollection | null;
    /**
     * Gets entity uniq id
     * @public
     * @returns {number}
     */
    get id(): number;
    /**
     * Checks if the given entity is equal to the current entity.
     * @param {Entity} entity - The entity to compare.
     * @returns {boolean} True if entities are equal, otherwise false.
     */
    isEqual(entity: Entity): boolean;
    /**
     * Gets the layer index of the entity.
     * @returns {number} The layer index.
     */
    get layerIndex(): number;
    /**
     * Gets the instance class name of the entity.
     * @returns {string} The instance name "Entity".
     */
    get instanceName(): string;
    protected _createOptionFeature<T, K>(featureName: string, options?: T | K): T | null;
    /**
     * Gets the collection index of the entity.
     * @returns {number} The entity collection index.
     */
    getCollectionIndex(): number;
    /**
     * Adds current entity into the specified entity collection.
     * @public
     * @param {EntityCollection | Vector} collection - Specified entity collection or vector layer.
     * @param {boolean} [rightNow=false] - Entity insertion option for vector layer.
     * @returns {Entity} - This object.
     */
    addTo(collection: EntityCollection | Vector, rightNow?: boolean): Entity;
    /**
     * Removes current entity from its collection or layer.
     * @public
     */
    remove(): void;
    /**
     * Sets the entity visibility.
     * @public
     * @param {boolean} visibility - Entity visibility.
     */
    setVisibility(visibility: boolean): void;
    /**
     * Returns entity visibility.
     * @public
     * @returns {boolean} -
     */
    getVisibility(): boolean;
    /**
     * Sets entity cartesian position.
     * @public
     * @param {Vec3} cartesian - Cartesian position in 3d space.
     */
    setCartesian3v(cartesian: Vec3): void;
    /**
     * Gets scale factor
     * @public
     * @returns {Vec3}
     */
    getScale(): Vec3;
    /**
     * Sets XYZ axis scale for the inner object such as GeoObject
     * @public
     * @param {Vec3} scale - Scale factor
     */
    setScale3v(scale: Vec3): void;
    /**
     * Sets scale for the inner object such as GeoObject
     * @public
     * @param {number} val - Scale factor
     */
    setScale(val: number): void;
    /**
     * Gets the absolute rotation direction of the entity.
     * @public
     * @returns {Quat} The absolute rotation quaternion.
     */
    getAbsoluteRotation(): Quat;
    /**
     * Gets the local rotation of the entity. For the root entity it is equal to the absolute rotation.
     * @public
     * @returns {Quat} The rotation quaternion.
     */
    getRotation(): Quat;
    /**
     * Rotates the entity to look at a given point in world coordinates.
     * @public
     * @param {Vec3} cart - The target position to look at.
     */
    setLook3v(cart: Vec3): void;
    /**
     * Rotates the entity to look at a given geographic coordinate.
     * @public
     * @param {LonLat} lonLat - The longitude and latitude to look at.
     */
    setLookLonLat(lonLat: LonLat): void;
    /**
     * Sets the absolute rotation of the entity.
     * @public
     * @param {Quat} rot - The new absolute rotation quaternion.
     */
    setAbsoluteRotation(rot: Quat): void;
    /**
     * Sets the local rotation of the entity.
     * @param {Quat} rot - The new rotation quaternion.
     */
    setRotation(rot: Quat): void;
    /**
     * Sets the pitch rotation of the entity.
     * @param {number} val - The new pitch angle in radians.
     */
    setPitch(val: number): void;
    /**
     * Sets the yaw rotation of the entity.
     * @param {number} val - The new yaw angle in radians.
     */
    setYaw(val: number): void;
    /**
     * Sets the roll rotation of the entity.
     * @public
     * @param {number} val - The new roll angle in radians.
     */
    setRoll(val: number): void;
    /**
     * Gets the pitch angle of the entity.
     * @public
     * @returns {number} The pitch angle in radians.
     */
    getPitch(): number;
    /**
     * Gets the yaw angle of the entity.
     * @public
     * @returns {number} The yaw angle in radians.
     */
    getYaw(): number;
    /**
     * Gets the roll angle of the entity.
     * @public
     * @returns {number} The roll angle in radians.
     */
    getRoll(): number;
    /**
     * Sets the absolute pitch of the entity.
     * @public
     * @param {number} val - The absolute pitch angle in radians.
     */
    setAbsolutePitch(val: number): void;
    /**
     * Sets the absolute yaw of the entity.
     * @public
     * @param {number} val - The absolute yaw angle in radians.
     */
    setAbsoluteYaw(val: number): void;
    /**
     * Sets the absolute roll of the entity.
     * @public
     * @param {number} val - The absolute roll angle in radians.
     */
    setAbsoluteRoll(val: number): void;
    /**
     * Gets the absolute pitch angle of the entity.
     * @public
     * @returns {number} The absolute pitch angle in radians.
     */
    getAbsolutePitch(): number;
    /**
     * Gets the absolute yaw angle of the entity.
     * @public
     * @returns {number} The absolute yaw angle in radians.
     */
    getAbsoluteYaw(): number;
    /**
     * Gets the absolute roll angle of the entity.
     * @public
     * @returns {number} The absolute roll angle in radians.
     */
    getAbsoluteRoll(): number;
    protected _getScaleByDistance(): number;
    /**
     * Sets the absolute cartesian position of the entity.
     * @public
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} z - Z coordinate.
     */
    setAbsoluteCartesian(x: number, y: number, z: number): void;
    /**
     * Sets the absolute cartesian position of the entity using a Vec3.
     * @public
     * @param {Vec3} absolutCartesian - The absolute cartesian position.
     */
    setAbsoluteCartesian3v(absolutCartesian: Vec3): void;
    /**
     * Returns absolute cartesian position.
     * @public
     * @returns {Vec3} -
     */
    getAbsoluteCartesian(): Vec3;
    /**
     * Sets entity cartesian position.
     * @public
     * @param {number} x - 3d space X - position.
     * @param {number} y - 3d space Y - position.
     * @param {number} z - 3d space Z - position.
     */
    setCartesian(x: number, y: number, z: number): void;
    protected _updatePitchYawRoll(): void;
    _updateAbsolutePosition(): void;
    /**
     * Sets entity cartesian position without event dispatching.
     * @public
     * @param {Vec3} cartesian - Cartesian position in 3d space.
     * @param {boolean} skipLonLat - skip geodetic calculation.
     */
    _setCartesian3vSilent(cartesian: Vec3, skipLonLat?: boolean): void;
    protected _updateLonLat(): void;
    /**
     * Gets entity geodetic coordinates.
     * @public
     * @returns {LonLat} -
     */
    getLonLat(): LonLat;
    /**
     * Sets geodetic coordinates of the entity point object.
     * @public
     * @param {LonLat} lonlat - coordinates.
     */
    setLonLat(lonlat: LonLat): void;
    /**
     * Sets geodetic coordinates of the entity point object.
     * @public
     * @param {number} lon - Longitude.
     * @param {number} lat - Latitude
     * @param {number} [height] - Height
     */
    setLonLat2(lon: number, lat: number, height?: number): void;
    /**
     * Sets entity altitude over the planet.
     * @public
     * @param {number} altitude - Altitude.
     */
    setAltitude(altitude: number): void;
    /**
     * Sets entity altitude over the planet.
     * @public
     * @return {number} Altitude.
     */
    getAltitude(): number;
    /**
     * Returns cartesian position.
     * @public
     * @returns {Vec3} -
     */
    getCartesian(): Vec3;
    /**
     * Sets entity billboard.
     * @public
     * @param {Billboard} billboard - Billboard object.
     * @returns {Billboard} -
     */
    setBillboard(billboard: Billboard): Billboard;
    /**
     * Sets entity label.
     * @public
     * @param {Label} label - Text label.
     * @returns {Label} -
     */
    setLabel(label: Label): Label;
    /**
     * Sets entity ray.
     * @public
     * @param {Ray} ray - Ray object.
     * @returns {Ray} -
     */
    setRay(ray: Ray): Ray;
    /**
     * Sets entity polyline.
     * @public
     * @param {Polyline} polyline - Polyline object.
     * @returns {Polyline} -
     */
    setPolyline(polyline: Polyline): Polyline;
    /**
     * Sets entity pointCloud.
     * @public
     * @param {PointCloud} pointCloud - PointCloud object.
     * @returns {PointCloud} -
     */
    setPointCloud(pointCloud: PointCloud): PointCloud;
    /**
     * Sets entity geometry.
     * @public
     * @param {Geometry} geometry - Geometry object.
     * @returns {Geometry} -
     */
    setGeometry(geometry: Geometry): Geometry;
    /**
     * Sets entity geoObject.
     * @public
     * @param {GeoObject} geoObject - GeoObject.
     * @returns {GeoObject} -
     */
    setGeoObject(geoObject: GeoObject): GeoObject;
    /**
     * Sets entity strip.
     * @public
     * @param {Strip} strip - Strip object.
     * @returns {Strip} -
     */
    setStrip(strip: Strip): Strip;
    /**
     * Gets layer container
     * @public
     * @returns {Vector | null}
     */
    get layer(): Vector | null;
    get rendererEvents(): VectorEventsType | EntityCollectionEvents | null;
    /**
     * Append child entity.
     * @public
     * @param {Entity} entity - Child entity.
     */
    appendChild(entity: Entity): void;
    /**
     * Appends entity items(billboard, label etc.) picking color.
     * @public
     */
    setPickingColor(): void;
    /**
     * Return geodetic extent.
     * @public
     * @returns {Extent} -
     */
    getExtent(): Extent;
}
export { Entity };

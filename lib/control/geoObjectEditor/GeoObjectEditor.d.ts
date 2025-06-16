import { Control, type IControlParams } from "../Control";
import { GeoObjectEditorScene } from "./GeoObjectEditorScene";
import { GeoObjectPropertiesDialog } from "./GeoObjectEditorDialog";
export interface IGeoObjectEditorParams extends IControlParams {
}
export declare class GeoObjectEditor extends Control {
    protected _geoObjectEditopScene: GeoObjectEditorScene;
    protected _dialog: GeoObjectPropertiesDialog;
    constructor(options?: IGeoObjectEditorParams);
    oninit(): void;
    onactivate(): void;
    ondeactivate(): void;
}

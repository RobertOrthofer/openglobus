import {
    Globe,
    control,
    Vector,
    LonLat,
    Entity,
    OpenStreetMap,
    EmptyTerrain,
    RgbTerrain,
    GlobusRgbTerrain,
    Object3d,
    mercator,
    Bing,
    GeoVideo,
    XYZ,
    utils,
    PlanetCamera,
    Framebuffer,
    input,
    Program,
    Vec4,
    Vec2,
    GeoImage,
    CanvasTiles
} from "../../lib/og.es.js";

let color = window.document.querySelector('#backgroundColorPicker').value;

const tg = new CanvasTiles("Tile grid", {
    visibility: true,
    isBaseLayer: false,
    drawTile: function (material, applyCanvas) {
        if (!material.segment) {
            applyCanvas();
            return;
        }
        //
        // This is important create canvas here!
        //
        let cnv = document.createElement("canvas");
        let ctx = cnv.getContext("2d");
        cnv.width = 256;
        cnv.height = 256;

        //Clear canvas
        ctx.clearRect(0, 0, cnv.width, cnv.height);

        //Draw border
        ctx.beginPath();
        ctx.rect(0, 0, cnv.width, cnv.height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        let size;

        if (material.segment.isPole) {
            let ext = material.segment.getExtentLonLat();

            ctx.fillStyle = 'black';
            ctx.font = 'normal ' + 29 + 'px Verdana';

            ctx.textAlign = 'center';
            ctx.fillText(`${ext.northEast.lon.toFixed(3)} ${ext.northEast.lat.toFixed(3)}`, cnv.width / 2, cnv.height / 2 + 20);
            ctx.fillText(`${ext.southWest.lon.toFixed(3)} ${ext.southWest.lat.toFixed(3)}`, cnv.width / 2, cnv.height / 2 - 20);
        } else {
            //Draw text
            if (material.segment.tileZoom > 14) {
                size = "26";
            } else {
                size = "32";
            }
            ctx.fillStyle = 'black';
            ctx.font = 'normal ' + size + 'px Verdana';
            ctx.textAlign = 'center';
            ctx.fillText(material.segment.tileX + "," + material.segment.tileY + "," + material.segment.tileZoom, cnv.width / 2, cnv.height / 2);
        }

        const timeout = (Math.random() * (200 - 100 + 1)) + 100; // random from 100 to 200 ms, for demo purpose only
        //Draw canvas tile
        window.setTimeout(() => {
            // og could dismiss the canvas in the meantime because of user interactions
            if (!material.segment?.initialized) {
                console.log('not initialized');
                return;
            }
            applyCanvas(cnv);
        }, timeout)
    }
});


const osmLayer = new OpenStreetMap()


const globus = new Globe({
    target: "earth",
    name: "Earth",
    terrain: new GlobusRgbTerrain(),
    layers: [osmLayer, tg],
    atmosphereEnabled: false,
    fontsSrc: "../../res/fonts",
});

let timer;
// this should be debounced in production
window.document.querySelector('#backgroundColorPicker').addEventListener('input', (event) => {
    tg.abortLoading();
    if (timer) {
        window.clearTimeout(timer);
    }
    globus.planet.quadTreeStrategy.clearLayerMaterial(tg, true);
    tg.animated = true; // temporarily mark as animated to force redraw without dismissing existing tiles
    color = event.target.value;
    timer = window.setTimeout(() => {
        timer = undefined;
        tg.animated = false;
    }, 200) // wait for a timeout then remove the "animated" flag, because it makes user interactions laggy.
})

globus.planet.addControl(new control.TimelineControl());
globus.planet.addControl(new control.CompassButton());
globus.planet.addControl(new control.DebugInfo());
globus.planet.addControl(new control.LayerSwitcher());
globus.planet.addControl(new control.DrawingSwitcher());

let tempCamera = new PlanetCamera(globus.planet);

function saveCamera() {

    let cam = globus.planet.camera
    tempCamera.copy(cam);
    depthHandler.camera.copy(cam);
}

function restoreCamera() {
    globus.planet.camera.copy(tempCamera);
}

globus.planet.renderer.events.on("charkeypress", input.KEY_C, () => {
    saveCamera();
});

globus.planet.renderer.events.on("charkeypress", input.KEY_V, () => {
    restoreCamera();
});



globus.planet.renderer.controls.SimpleSkyBackground.colorOne = "black";
globus.planet.renderer.controls.SimpleSkyBackground.colorTwo = "black";
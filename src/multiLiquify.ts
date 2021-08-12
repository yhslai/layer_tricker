import { PercentValue } from "photoshop/util/unit";
import { liquifyDialog, liquifyWithLastMesh } from "./ps-api/filter";
import { convertToSmartObject, duplicateActiveLayers, getActiveLayer, hideActiveLayer, mergeLayers, selectLayerContent, selectLayerMask, setActiveLayers as setActiveLayer, setLayerProperty, showActiveLayer } from "./ps-api/layer";
import { transformDialog } from "./ps-api/transform";
import { ps } from "./ps-api/wrapper";

function betterBackdropLiquify() {
    let layer = getActiveLayer();
    let oldFill = layer.fillOpacity / 255 * 100; // percentUnit

    setLayerProperty<PercentValue>('fillOpacity', {
        "_unit": "percentUnit",
        "_value": 0,
    })

    liquifyDialog();

    setLayerProperty<PercentValue>('fillOpacity', {
        "_unit": "percentUnit",
        "_value": oldFill,
    })
    
}

function packAndLiquify() {
    duplicateActiveLayers();
    showActiveLayer();
    mergeLayers();
    convertToSmartObject();
    betterBackdropLiquify();
}

function liquifyLayerRecur(id: Number) {
    setActiveLayer(id);
    let doc = ps.app.activeDocument;
    let layer = doc.activeLayers[0];
    let layerDesc = getActiveLayer();

    if (layerDesc.userMaskEnabled) {
        console.log(`Liquifying: ${layerDesc.name} (mask)`)
        liquifyWithLastMesh();
    }
    else {
        if (layerDesc.layerKind == 1) { // Pixel
            console.log(`Liquifying: ${layerDesc.name}`);
            liquifyWithLastMesh();
        }

        if (layerDesc.hasUserMask) {
            console.log(`Liquifying: ${layerDesc.name} (mask)`)
            selectLayerMask();
            liquifyWithLastMesh();
            selectLayerContent();
        }
    }

    if (layer.children) {
        for (let c of layer.children) {
            liquifyLayerRecur(c._id);
        };
    }
}

function liquifyActiveLayerTrees() {
    let doc = ps.app.activeDocument;
    let layers = doc.activeLayers;

    for (let layer of layers) {
        liquifyLayerRecur(layer._id);
    }
}

function multiLiquify() {
    // Store active layer IDs

    hideActiveLayer();
    packAndLiquify();

    // Delete packed smart object
    // Select original active layers
    // liquifyActiveLayerTrees();
}

export function setupMultiLiquify(): void {
    document.getElementById("modal-multi-liquify").addEventListener('click', (e) => {
        multiLiquify();
    });
    document.getElementById("modal-liquify-active-layer-trees").addEventListener('click', (e) => {
        liquifyActiveLayerTrees();
    });
}
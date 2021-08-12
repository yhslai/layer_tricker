import { PercentValue } from "photoshop/util/unit";
import { liquifyDialog, liquifyWithLastMesh } from "./ps-api/filter";
import { convertToSmartObject, duplicateActiveLayers, getActiveLayer, hideActiveLayers, mergeLayers, selectLayerContent, selectLayerMask, selectLayer as selectLayer, setLayerProperty, showActiveLayers, selectContinuousLayers, deleteActiveLayer } from "./ps-api/layer";
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


function liquifyLayerRecur(id: Number) {
    selectLayer(id);
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

function liquifyLayerTrees() {
    let doc = ps.app.activeDocument;
    let layers = doc.activeLayers;

    for (let layer of layers) {
        liquifyLayerRecur(layer._id);
    }
}

function packAndLiquify() {
    hideActiveLayers();
    duplicateActiveLayers();
    showActiveLayers();
    mergeLayers();
    convertToSmartObject();
    betterBackdropLiquify();
}

function multiLiquify() {
    let doc = ps.app.activeDocument;
    // Store original active layer IDs
    let ids = doc.activeLayers.map(layer => layer._id);

    packAndLiquify();

    // Delete packed smart object
    deleteActiveLayer();
    
    // Restore original selection
    selectContinuousLayers(ids[0], ids[ids.length-1]);
    showActiveLayers();
    liquifyLayerTrees();
}



export function setupMultiLiquify(): void {
    document.getElementById("modal-multi-liquify").addEventListener('click', (e) => {
        multiLiquify();
    });
    document.getElementById("modal-pack-and-liquify").addEventListener('click', (e) => {
        packAndLiquify();
    });
    document.getElementById("modal-liquify-layer-trees").addEventListener('click', (e) => {
        liquifyLayerTrees();
    });
}
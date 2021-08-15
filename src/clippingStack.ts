import { threshold } from './ps-api/adjustment';
import { fill } from './ps-api/edit';
import * as Layer from './ps-api/layer';
import { deselectAll, selectionByTransparency } from './ps-api/selection';
import { app } from './ps-api/wrapper';


function solidifyTransparency() {
    Layer.createMaskFromTransparency();
    threshold(1);
    Layer.applyMask();
}

function clippingStackToGroup() {
    const doc = app.activeDocument;

    const layers = doc.activeLayers;
    const clippingBase = layers[0];
    const firstClipped = layers[1];

    if (!firstClipped) {
        app.showAlert("Selected layers are not a clipping stack. Abort.");
        return;
    }

    const clippingBaseIntern = Layer.getLayer(clippingBase._id);
    const firstClippedIntern = Layer.getLayer(firstClipped._id);

    if (clippingBaseIntern.group || !firstClippedIntern.group) {
        app.showAlert("Selected layers are not a clipping stack. Abort.");
        return;
    }

    const name = clippingBase.name;
    Layer.createGroupFromLayer(name);

    const newGroup = doc.activeLayers[0];

    Layer.duplicateActiveLayers();
    Layer.mergeLayers();
    Layer.convertToSmartObject();
    selectionByTransparency();
    Layer.deleteActiveLayer();
    Layer.selectLayer(newGroup._id);

    Layer.createMaskBySelection();

    Layer.selectLayer(clippingBase._id);
    solidifyTransparency();

    Layer.releaseClippingMask(firstClipped._id);
}


function addToUpstreamMasks() {
    const doc = app.activeDocument;

    const layers = doc.activeLayers;

    if (layers.length != 2) {
        app.showAlert("Please select two layers (the newly painted one and the original one). Abort.");
    }

    const original = layers[0];
    const newlyPainted = layers[1];

    Layer.selectLayer(newlyPainted._id);
    selectionByTransparency();
    Layer.selectLayerToward(Layer.LayerToward.BOTTOM);
    const outerGroup = doc.activeLayers[0]; // Outer group should be right below newly painted

    Layer.selectLayerMask();
    fill("white"); // Revealing that part with transparency on the outer group

    Layer.selectLayer(newlyPainted._id);
    solidifyTransparency();
    selectionByTransparency();
    Layer.selectLayer(original._id);
    let innerGroup = original.parent;

    while (innerGroup._id != outerGroup._id) {
        Layer.selectLayer(innerGroup._id);
        const innerGroupIntern = Layer.getActiveLayer();
        if (innerGroupIntern.hasUserMask) {
            Layer.selectLayerMask();
            fill("white");
        }

        innerGroup = innerGroup.parent;
    }

    let originalIntern = Layer.getLayer(original._id);
    Layer.selectLayer(newlyPainted._id);
    Layer.moveLayerAboveIndex(originalIntern.itemIndex);
    Layer.mergeDown();
    deselectAll();
}


export function setupClippingStack() {
    document.getElementById("modal-clipping-stack-to-group").addEventListener('click', (e) => {
        clippingStackToGroup();
    });
    document.getElementById("modal-add-to-upstream-masks").addEventListener('click', (e) => {
        addToUpstreamMasks();
    });
}

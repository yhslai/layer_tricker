import { threshold } from './ps-api/adjustment';
import {
    convertToSmartObject,
    createGroupFromLayer,
    createMaskBySelection,
    createMaskFromTransparency,
    deleteActiveLayer,
    deleteMask,
    disableQuickMask,
    duplicateActiveLayers,
    enableQuickMask,
    getActiveLayer,
    getLayer,
    mergeLayers,
    releaseClippingMask,
    selectLayer,
} from './ps-api/layer';
import { selectByTransparency } from './ps-api/selection';
import { app } from './ps-api/wrapper';

function clippingStackToGroup() {
    let doc = app.activeDocument;

    let layers = doc.activeLayers;
    let clippingBase = layers[0];
    let firstClipped = layers[1];

    if (!firstClipped) {
        app.showAlert("Selected layers are not a clipping stack. Abort.");
        return;
    }

    let clippingBaseIntern = getLayer(clippingBase._id);
    let firstClippedIntern = getLayer(firstClipped._id);

    if (clippingBaseIntern.group || !firstClippedIntern.group) {
        app.showAlert("Selected layers are not a clipping stack. Abort.");
        return;
    }

    let name = clippingBase.name;
    createGroupFromLayer(name);

    let newGroup = doc.activeLayers[0];

    duplicateActiveLayers();
    mergeLayers();
    convertToSmartObject();
    selectByTransparency();
    deleteActiveLayer();
    selectLayer(newGroup._id);

    createMaskBySelection();

    selectLayer(clippingBase._id);
    createMaskFromTransparency();
    deleteMask();

    releaseClippingMask(firstClipped._id);

}


function addToUpstreamMasks() {

}


export function setupClippingStack() {
    document.getElementById("modal-clipping-stack-to-group").addEventListener('click', (e) => {
        clippingStackToGroup();
    });
    document.getElementById("modal-add-to-upstream-masks").addEventListener('click', (e) => {
        addToUpstreamMasks();
    });
}

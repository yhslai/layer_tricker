import {
    convertToSmartObject,
    createGroupFromLayer as createGroupFromActiveLayers,
    duplicateActiveLayers,
    mergeLayers
} from './ps-api/layer';
import { selectByTransparency } from './ps-api/selection';


function clippingStackToGroup() {
    createGroupFromActiveLayers();
    duplicateActiveLayers();
    mergeLayers();
    convertToSmartObject();
    selectByTransparency();
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

import { photoshopCore, photoshopAction } from 'photoshop/dom/CoreModules'
import * as photoshopConstants from "photoshop/dom/Constants";

class PhotoshopWrapper {
    app: import("photoshop/dom/Photoshop").Photoshop;
    core: typeof photoshopCore;
    action: typeof photoshopAction;
    constants: typeof photoshopConstants;
};

export const ps = window.require("photoshop") as PhotoshopWrapper;
export const app = ps.app
export const batchPlay = ps.action.batchPlay;

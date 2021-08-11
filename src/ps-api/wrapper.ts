import { photoshopCore, photoshopAction } from 'photoshop/dom/CoreModules'
import * as photoshopConstants from "photoshop/dom/Constants";

class PhotoshopWrapper {
    app: import("photoshop/dom/Photoshop").Photoshop;
    core: typeof photoshopCore;
    action: typeof photoshopAction;
    constants: typeof photoshopConstants;
};

export const photoshop = window.require("photoshop") as PhotoshopWrapper;
export const app = photoshop.app
export const batchPlay = photoshop.action.batchPlay;

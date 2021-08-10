import { BatchPlayCommandOptions, photoshopAction, photoshopCore } from 'photoshop/dom/CoreModules';
import { Photoshop } from 'photoshop/dom/Photoshop';
import * as photoshopConstants from "photoshop/dom/Constants";

declare class PhotoshopRequired {
    app: Photoshop;
    core: typeof photoshopCore;
    action: typeof photoshopAction;
    constants: typeof photoshopConstants;
};

let photoshop = window.require("photoshop") as PhotoshopRequired;

const app = photoshop.app
const batchPlay = photoshop.action.batchPlay;

// GET TOOL OPTIONS
async function getCurrentToolOptions() {
  const result = await batchPlay(
  [
     {
        "_obj": "get",
        "_target": [
           {
              "_property": "currentToolOptions"
           },
           {
              "_ref": "application",
              "_enum": "ordinal",
              "_value": "targetEnum"
           }
        ],
        "_options": {
           "dialogOptions": "dontDisplay"
        }
     }
  ],{
     "synchronousExecution": false
  } as BatchPlayCommandOptions);
  return result[0].currentToolOptions;
}

let options = getCurrentToolOptions().then((options) => {
    console.log(options);
});

console.log("Typescript!  ? ");

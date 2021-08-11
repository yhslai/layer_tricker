
import { ActionDescriptor } from 'photoshop/dom/CoreModules';
import { batchPlay } from './wrapper';
import { CurrentToolOptionsDescriptor, ToolName } from '../types/photoshop/Tool'
import { Reference } from '../types/photoshop/Reference';

export async function getTool() : Promise<ToolName> {
    const result = await batchPlay(
        [{
                "_obj": "get",
                "_target": [
                    { "_property": "tool" },
                    { "_ref": "application", "_enum": "ordinal", "_value": "targetEnum" }
                ],
                "_options": {
                    "dialogOptions": "dontDisplay"
                }
            }
        ],
        { "synchronousExecution": false, }
    );
    
    return result[0].tool._enum;
}

export async function setTool(tool: ToolName) {
    const result = await batchPlay(
        [
            {
                "_obj": "select",
                "_target": [
                    { "_ref": tool, }
                ],
                "dontRecord": true,
                "forceNotify": true,
                "_isCommand": false,
                "_options": {
                    "dialogOptions": "dontDisplay"
                }
            }
        ],
        { "synchronousExecution": false, }
    )
}


export async function getCurrentToolOptions<T extends CurrentToolOptionsDescriptor>()
    : Promise<T> {
    const result = await batchPlay(
        [
            {
                "_obj": "get",
                "_target": [
                    { "_property": "currentToolOptions" },
                    { "_ref": "application", "_enum": "ordinal", "_value": "targetEnum" }
                ],
                "_options": {
                    "dialogOptions": "dontDisplay"
                }
            }
        ], {
            "synchronousExecution": false
        });
    return result[0].currentToolOptions;
}


// 
export async function setCurrentToolOptions(tool: ToolName, currenttooloptions: any) {
    const result = await batchPlay(
        [
            {
                "_obj": "set",
                "_target": [
                    { "_ref": tool, }
                ],
                "to": currenttooloptions
            }
        ], {
            "synchronousExecution": false
        }
    );
}


export function isSelectingLayer(descriptor: ActionDescriptor): boolean {
    let target = descriptor._target as Array<Reference>;
    return target.length > 0 && target[0]._ref == 'layer';
}
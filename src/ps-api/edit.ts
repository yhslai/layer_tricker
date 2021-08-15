import { batchPlay } from './wrapper';


export type FillContents = "foregroundColor" | "backgroundColor" | "white" | "gray" | "black"
export interface FillContentsEnum {
    '_enum': "fillContents",
    '_value': FillContents
}


export function fill(color: FillContents, opacity: number = 100) {
    const result = batchPlay(
        [
            {
                "_obj": "fill",
                "using": {
                    "_enum": "fillContents",
                    "_value": color 
                } as FillContentsEnum,
                "opacity": {
                    "_unit": "percentUnit",
                    "_value": opacity
                },
                "_isCommand": true,
                "_options": {
                    "dialogOptions": "dontDisplay"
                }
            }
        ], {
        "synchronousExecution": true,
        "modalBehavior": "fail"
    });
}
    
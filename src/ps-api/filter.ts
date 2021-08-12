import { batchPlay } from './wrapper';

export function liquifyDialog() {
    const result = batchPlay(
        [
            {
                "_obj": "$LqFy",
                "_isCommand": true,
                "_options": {
                    "dialogOptions": "display"
                }
            }
        ], {
        "synchronousExecution": true,
        "modalBehavior": "fail"
    });
}

export function liquifyWithLastMesh() {
    const result = batchPlay(
        [
           {
              "_obj": "$LqFy",
              // Don't know how to get appdata folder dynamically...
              "$LqMD": "C:\\Users\\rainc\\AppData\\Roaming\\Adobe\\Adobe Photoshop 2021\\Adobe Photoshop 2021 Settings\\Liquify Last Mesh.psp",
              "_isCommand": true,
              "_options": {
                 "dialogOptions": "dontDisplay"
              }
           }
        ],{
           "synchronousExecution": true,
           "modalBehavior": "fail"
        });
        
}
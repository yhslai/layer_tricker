
import { batchPlay } from './wrapper';

export function selectByTransparency() {
    const result = batchPlay(
        [
        {
            "_obj": "set",
            "_target": [
                {
                    "_ref": "channel",
                    "_property": "selection"
                }
            ],
            "to": {
                "_ref": "channel",
                "_enum": "channel",
                "_value": "transparencyEnum"
            },
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
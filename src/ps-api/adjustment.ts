import { batchPlay } from './wrapper';


export function threshold(level: Number) {
   const result = batchPlay(
      [
         {
            "_obj": "thresholdClassEvent",
            "level": 1,
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
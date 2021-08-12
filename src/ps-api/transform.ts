import { batchPlay } from './wrapper';

export async function transformDialog() {
    const result = await batchPlay(
        [
           {
              "_obj": "transform",
              "_isCommand": true,
              "_options": {
                 "dialogOptions": "display"
              }
           }
        ], {
           "synchronousExecution": false,
           "modalBehavior": "fail"
        }
    );
}
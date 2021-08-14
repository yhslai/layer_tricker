import { setupAutoEyedropperSample } from './autoEyedropperSample'
import { setupMultiLiquify } from './multiLiquify'
import { setupClippingStack } from './clippingStack'


import "./css/styles.css";


// Continous Tasks
setupAutoEyedropperSample();

// One-time modals
setupMultiLiquify();
setupClippingStack();

console.log("Layer Tricker Loaded");


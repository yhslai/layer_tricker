import { ActionDescriptor } from 'photoshop/dom/CoreModules'
import { getCurrentToolOptions, setCurrentToolOptions, isTargetingLayer, getTool, setTool } from './ps-api/tool'
import { getActiveLayer } from './ps-api/layer'
import { photoshop } from './ps-api/wrapper'
import { EyedropperToolOptionsDescriptor, SampleSheet, ToolName } from './types/photoshop/Tool'
import { BlendMode } from './types/photoshop/Common'

export function setupAutoEyedropperSample(): void {
    photoshop.action.addNotificationListener(['select', 'set', 'make', 'delete'], async (event: string, descriptor: ActionDescriptor) => {
        // All these events can target a layer
        if (isTargetingLayer(descriptor)) {
            // Store current tool so we can switch back...
            let currentTool = await getTool();

            let layer = await getActiveLayer();
            let sampleSheet: SampleSheet;

            switch (layer.mode._value) {
                case BlendMode.MULTIPLY:
                case BlendMode.LINEAR_DODGE:
                case BlendMode.SUBTRACTION:
                case BlendMode.DIVIDE:
                case BlendMode.SOFT_LIGHT:
                case BlendMode.OVERLAY:
                case BlendMode.HARD_LIGHT:
                    sampleSheet = SampleSheet.CURRENT_LAYER;
                    break;
                default:
                    sampleSheet = SampleSheet.ALL_LAYERS;
            }

            await setTool(ToolName.EYEDROPPER);

            let eyedropperOptions = await getCurrentToolOptions<EyedropperToolOptionsDescriptor>();
            eyedropperOptions.eyeDropperSampleSheet = sampleSheet;
            await setCurrentToolOptions(ToolName.EYEDROPPER, eyedropperOptions);

            // ... switch back here
            await setTool(currentTool);
        }
    })
}
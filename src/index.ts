import { ActionDescriptor } from 'photoshop/dom/CoreModules'
import { getCurrentToolOptions, setCurrentToolOptions, isSelectingLayer, getTool, setTool } from './ps-action/tool'
import { getActiveLayer } from './ps-action/layer'
import { photoshop } from './ps-action/wrapper'
import { EyedropperToolOptionsDescriptor, SampleSheet, ToolName } from './types/photoshop/Tool'


photoshop.action.addNotificationListener(['select'], async (event: string, descriptor: ActionDescriptor) => {
    let currentTool = await getTool();

    if (isSelectingLayer(descriptor)) {
        let layer = await getActiveLayer();
        console.log(layer);
        await setTool(ToolName.EYEDROPPER);

        let eyedropperOptions = await getCurrentToolOptions<EyedropperToolOptionsDescriptor>();
        eyedropperOptions.eyeDropperSampleSheet = SampleSheet.ALL_LAYERS;
        await setCurrentToolOptions(ToolName.EYEDROPPER, eyedropperOptions);

        let result = await setTool(currentTool);
        console.log(result);
    }
})

console.log("Eyedroopper Switcher Loaded");

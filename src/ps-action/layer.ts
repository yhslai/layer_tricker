
import { LayerDescriptor } from '../types/photoshop/Layer';
import { batchPlay } from './wrapper';

export async function getActiveLayer() : Promise<LayerDescriptor> {
    const result = await batchPlay([
      {
        _obj: 'get',
        _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }],
      },
    ], { synchronousExecution: false })
    
    return result[0];
}

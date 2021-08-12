
import { LayerDescriptor, LayerDuplicatedDescriptor } from '../types/photoshop/Layer';
import { batchPlay } from './wrapper';

export function getActiveLayer() : LayerDescriptor {
    const result = batchPlay([
      {
        _obj: 'get',
        _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }],
      },
    ], { synchronousExecution: true })
    
    return result[0];
}

export function setActiveLayers(id: Number) {
	const result = batchPlay(
		[
			{
				"_obj": "select",
				"_target": [
					{
						"_ref": "layer",
						"_id": id,
					}
				],
				"makeVisible": false,
				"_isCommand": false,
				"_options": {
					"dialogOptions": "dontDisplay"
				}
			}
		], {
			"synchronousExecution": true,
			"modalBehavior": "fail"
		}
	);
}

function selectLayerChannel(channel: 'mask' | 'RGB') {
	const result = batchPlay(
		[
		   {
			  "_obj": "select",
			  "_target": [
				 {
					"_ref": "channel",
					"_enum": "channel",
					"_value": "mask"
				 }
			  ],
			  "makeVisible": false,
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

export function selectLayerMask() {
	selectLayerChannel('mask');
}

export function selectLayerContent() {
	selectLayerChannel('RGB');
}

export function setLayerProperty<T>(key: string, value: T) {
	console.log(key);
	console.log(value);
	const result = batchPlay(
		[
		   {
			  "_obj": "set",
			  "_target": [
				 {
					"_ref": "layer",
					"_enum": "ordinal",
					"_value": "targetEnum"
				 }
			  ],
			  "to": {
				 "_obj": "layer",
				 [key]: value,
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

export function duplicateActiveLayers() : Promise<LayerDuplicatedDescriptor> {
	const result = batchPlay(
    [
       {
          "_obj": "duplicate",
          "_target": [
             {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
             }
          ],
          "version": 5,
          "_isCommand": true,
          "_options": {
             "dialogOptions": "dontDisplay"
          }
       }
    ],{
       "synchronousExecution": true,
       "modalBehavior": "fail"
    });

	return result[0];
}

export function mergeLayers() {
	const result = batchPlay(
		[
		   {
			  "_obj": "mergeLayersNew",
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

export function convertToSmartObject() {
	const result = batchPlay(
		[
		   {
			  "_obj": "newPlacedLayer",
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

export function hideActiveLayer() {
	const result = batchPlay(
		[
		   {
			  "_obj": "hide",
			  "null": [
				 {
					"_ref": "layer",
					"_enum": "ordinal",
					"_value": "targetEnum"
				 }
			  ],
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

export function showActiveLayer() {
	const result = batchPlay(
		[
		   {
			  "_obj": "show",
			  "null": [
				 {
					"_ref": "layer",
					"_enum": "ordinal",
					"_value": "targetEnum"
				 }
			  ],
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
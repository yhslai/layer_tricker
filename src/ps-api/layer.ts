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

export function getLayer(id: number) : LayerDescriptor {
    const result = batchPlay([
      {
        _obj: 'get',
        _target: [{ _ref: 'layer', _id: id }],
      },
    ], { synchronousExecution: true })
    
    return result[0];
}

export function selectLayer(id: number) {
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

export enum LayerToward {
	TOP = "forewardEnum",
	BOTTOM = "backwardEnum"
}


export function selectLayerToward(toward: LayerToward) {
	const result = batchPlay(
		[
		{
			"_obj": "select",
			"_target": [
				{
					"_ref": "layer",
					"_enum": "ordinal",
					"_value": toward
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


export function selectContinuousLayers(firstID: number, lastID: number) {
	selectLayer(firstID);

	const result = batchPlay(
		[
		   {
			  "_obj": "select",
			  "_target": [
				 {
					"_ref": "layer",
					"_id": lastID
				 }
			  ],
			  "selectionModifier": {
				 "_enum": "selectionModifierType",
				 "_value": "addToSelectionContinuous"
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

export function deleteActiveLayer() {
    const result = batchPlay([
      {
        _obj: 'delete',
        _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }],
      },
    ], { synchronousExecution: true })
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

export function moveLayerAboveIndex(index: number) {
	const result = batchPlay(
		[{
			"_obj": "move",
			"_target": [
				{
					"_ref": "layer", "_enum": "ordinal", "_value": "targetEnum"
				}
			],
			"to": {
				"_ref": "layer",
				"_index": index
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

// Same function internally
export const mergeDown = mergeLayers


export function createGroupFromLayer(name: string) {
	const result =  batchPlay(
		[
		   {
			  "_obj": "make",
			  "_target": [
				 { "_ref": "layerSection" }
			  ],
			  "from": {
				 "_ref": "layer", "_enum": "ordinal", "_value": "targetEnum"
			  },
			  "using": {
				 "_obj": "layerSection", "name": name,
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

	return result[0];
}

export function createMaskBySelection() {
	const result = batchPlay(
	[
	{
		"_obj": "make",
		"new": {
			"_class": "channel"
		},
		"at": {
			"_ref": "channel",
			"_enum": "channel",
			"_value": "mask"
		},
		"using": {
			"_enum": "userMaskEnabled",
			"_value": "revealSelection"
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

export function createMaskFromTransparency() {
	batchPlay(
		[
		   {
			  "_obj": "make",
			  "new": {
				 "_class": "channel"
			  },
			  "at": {
				 "_ref": "channel",
				 "_enum": "channel",
				 "_value": "mask"
			  },
			  "using": {
				 "_enum": "userMaskEnabled",
				 "_value": "transparency"
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

export function deleteMask(apply: boolean = false) {
	const result = batchPlay(
		[
		   {
			  "_obj": "delete",
			  "_target": [
				 {
					"_ref": "channel",
					"_enum": "ordinal",
					"_value": "targetEnum"
				 }
			  ],
			  "_isCommand": false,
			  "apply": apply,
			  "_options": {
				 "dialogOptions": "dontDisplay"
			  }
		   }
		],{
		   "synchronousExecution": true,
		   "modalBehavior": "fail"
		});
}

export const applyMask = () => deleteMask(true)

export function releaseClippingMask(id: number) {
	
	const result = batchPlay(
		[
			{
				"_obj": "ungroup",
				"_target": [
					{
						"_ref": "layer",
						"_id": id,
					}
				],
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

export function hideActiveLayers() {
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

export function showActiveLayers() {
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

export function enableQuickMask() {
	const result = batchPlay(
		[
		{
			"_obj": "set",
			"_target": [
				{
					"_ref": "property",
					"_property": "quickMask"
				},
				{
					"_ref": "document",
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

export function disableQuickMask() {
	const result = batchPlay(
		[
		{
			"_obj": "clearEvent",
			"_target": [
				{
					"_ref": "property",
					"_property": "quickMask"
				},
				{
					"_ref": "document",
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


// For debugging
(window as any).getActiveLayer = getActiveLayer;

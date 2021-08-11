export enum BlendMode {
  NORMAL = 'normal',
  DISSOLVE = 'dissolve',
  DARKEN = 'darken',
  MULTIPLY = 'multiply',
  COLOR_BURN = 'colorBurn',
  LINEAR_BURN = 'linearBurn',
  DARKER_COLOR = 'darkerColor',
  LIGHTEN = 'lighten',
  SCREEN = 'screen',
  COLOR_DODGE = 'colorDodge',
  LINEAR_DODGE = 'linearDodge',
  LIGHTER_COLOR = 'lighterColor',
  OVERLAY = 'overlay',
  SOFT_LIGHT = 'softLight',
  HARD_LIGHT = 'hardLight',
  VIVID_LIGHT = 'vividLight',
  LINEAR_LIGHT = 'linearLight',
  PIN_LIGHT = 'pinLight',
  HARD_MIX = 'hardMix',
  DIFFERENCE = 'difference',
  EXCLUSION = 'exclusion',
  BLEND_SUBTRACTION = 'blendSubtraction',
  BLEND_DIVIDE = 'blendDivide',
  HUE = 'hue',
}

export interface BlendModeEnum {
  _enum: 'blendMode'
  _value: BlendMode
}
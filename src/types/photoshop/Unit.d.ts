import { UnitValue } from "photoshop/util/unit"

export type RulerUnit =
  'rulerPixels' |
  'rulerPoints' |
  'rulerInches' |
  'rulerCm' |
  'rulerMm' |
  'rulerPercent' |
  'rulerPicas'

export interface RulerUnitsEnum { 
  _enum: 'rulerUnits'
  _value: RulerUnit
}

export interface Fraction {
  numerator: number
  denominator: number
}

export interface NoneUnit extends UnitValue {
  _unit: "noneUnit";
}


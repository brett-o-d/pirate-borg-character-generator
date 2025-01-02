import React from 'react';
import { TextStyles, PositionStyles } from './styles.js';
import { classWeaponTable, weaponTable } from '../Tables/tables.js';
import { CabinFeverClassWeaponTable } from '../Tables/cabin-fever-tables.ts';

export function WeaponDisplay(weapon: string, classValue: number ): any {
  const textStyleClasses = TextStyles();
  const positionStyleClasses = PositionStyles();
  
  return (
    <div className={textStyleClasses.mediumText + " weapon " + positionStyleClasses.Weapon}>
      {classValue === 0 /* Brute */ 
        ? <div>Trusted Weapon</div> 
        : <div>{weapon}</div>}
    </div>
  )
}
 
export function DetermineWeapon(className: string, classValue: number, settings: any): string {
  let combinedClassWeaponTable = classWeaponTable;
  if (settings.includes('cabin-fever')){
    combinedClassWeaponTable = combinedClassWeaponTable.concat(CabinFeverClassWeaponTable);
  }
  const classWeaponValue = Math.floor((Math.random() * combinedClassWeaponTable[classValue]));

  // Buccaneer
  if (className === 'Buccaneer'){
    // Musket
    return weaponTable[9];
  }
  // The Mess
  if (className === 'The Mess'){
    // Doesn't start with a weapon?
    return ''
  }
  return weaponTable[classWeaponValue];
}
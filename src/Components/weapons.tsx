import React from 'react';
import { TextStyles, PositionStyles } from './styles.js';
import { bombTable, classWeaponTable, weaponTable } from '../Tables/tables.js';
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

  switch (className) {
    case 'Brute':
      return 'Trusted Weapon';
    case 'Buccaneer':
        return weaponTable[9];
    case 'The Mess':
      return 'Trusty Cleaver (d6)';
    case 'Powder Keg':
      return Math.ceil((Math.random() * 4)) + ' ' + bombTable[1];
    default:
      return weaponTable[classWeaponValue];
  }
}
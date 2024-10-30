import React from 'react';
import { containerTable, cheapGearTable, valuableGearTable, petTable,
    instrumentTable, relicTable, relicDescriptionTable} from '../Tables/tables.js';

export function GearDisplay(textStyleClass){

    const containerValue = Math.floor((Math.random() * containerTable.length));
    const cheapGearValue = Math.floor((Math.random() * cheapGearTable.length));
    const valuableGearValue = Math.floor((Math.random() * valuableGearTable.length));
    const petValue = Math.floor((Math.random() * petTable.length));
    const instrumentValue = Math.floor((Math.random() * instrumentTable.length));
    const relicValue = Math.floor((Math.random() * relicTable.length));

    const container = containerTable[containerValue];
    const cheapGear = cheapGearTable[cheapGearValue];
    const valuableGear = valuableGearTable[valuableGearValue];
    const pet = petTable[petValue];
    const instrument = instrumentTable[instrumentValue];
    const relic = relicTable[relicValue];
    const relicDescription = relicDescriptionTable[relicValue];

    return (
      <div>
        <div className={textStyleClass + " equipment"}>
          <div>{container}</div>
          <div>{cheapGear}</div>
          {cheapGearValue === 11 ? <div> {pet}</div> : null}
          <div>{valuableGear}</div>
          {valuableGearValue === 11 ? <div> {instrument}</div> : null}
        </div>
        {valuableGearValue === 3 ? 
          <div className={textStyleClass + " relic"}>
            <div><strong>{relic}</strong></div>
            <div><i>{relicDescription}</i></div>
          </div> 
          : null}

      </div>
    ); 
}

export default GearDisplay
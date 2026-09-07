import { TextStyles } from './styles.js';
import { containerTable, cheapGearTable, valuableGearTable, petTable,
    instrumentTable, relicTable, relicDescriptionTable, bombTable} from '../Tables/tables.ts';

export function EquipmentDisplay(className: string, clothesValue: number, hatValue: number ){

  const textStyleClasses = TextStyles();

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

  const antiquarianRelicValue = Math.floor((Math.random() * relicTable.length));
  const antiquarianRelic = relicTable[antiquarianRelicValue];
  const antiquarianRelicDescription = relicDescriptionTable[antiquarianRelicValue];

  return (
    <div className={textStyleClasses.mediumText}>
      <div className={"equipment"}>
        <div>{container}</div>
        {cheapGearValue === 11 ? <div>{pet}</div> : <div>{cheapGear}</div>}
        {valuableGearValue === 11 ? <div>{instrument}</div> : <div>{valuableGear}</div>}
        {className === 'The Sulphur' ? getTwoBombs(): null}
        {className === 'Powder Keg' && clothesValue < 2 && hatValue < 4 ? <div>{bombTable[5]}</div> : null}
        {className === 'Privateer' ? 'Letter of marque': null}
        {className === 'Angler' ? <div>fishing rod<br/>{Math.ceil((Math.random() * 8))} pieces of bait</div> : null}
        {className === 'Reaper' ? <div>tinderbox</div> : null}
        {className === 'Shipwright' ? <div>portable toolbox</div> : null}
      </div>
      <div className={"relic"}>
        {valuableGearValue === 3 ? 
          <div>
            <div><strong>{relic}</strong></div>
            <div><i>{relicDescription}</i></div>
          </div> 
          : null}
        {className === 'The Antiquarian' ? 
          <div>
            <div><strong>{antiquarianRelic}</strong></div>
            <div><i>{antiquarianRelicDescription}</i></div>
          </div> 
          : null}
      </div>
    </div>
  ); 
}

function getTwoBombs(){
  const bomb1Value = Math.floor((Math.random() * bombTable.length));
  const bomb2Value = Math.floor((Math.random() * bombTable.length));

  return (<div>{bombTable[bomb1Value]}<br/>{bombTable[bomb2Value]}</div>);
}

export default EquipmentDisplay
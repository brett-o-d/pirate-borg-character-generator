import React from 'react';
import {distinctiveFlawsTable, physicalAilmentTable, idiosyncraciesTable, 
        unfortunateIncidentsTable, thingOfImportanceTable, backgroundTable,
        containerTable, cheapGearTable, valuableGearTable, petTable,
        instrumentTable, clothingTable, hatTable, weaponTable, firstNamesTable, nicknameTable, 
        lastNameTable, statLookupTable, classTable, classAbilityTables, classStatsModifierTable, 
        classHatTable, classHpTable, classDevilsLuckTable, classClothingTable, classWeaponTable, 
        bruteWeaponTable, relicTable, relicDescriptionTable} from '../Tables/tables.js';
import PirateBorgCharacterSheetv3NoLines from '../Assets/PirateBorgCharacterSheetv3NoLines.jpg';
import './css/App.css';

function App() {
  const classValue = Math.floor((Math.random() * classTable.length));

  const className = classTable[classValue];

  const classDevilsLuck = classDevilsLuckTable[classValue];

  const classAbilityValue = Math.floor((Math.random() * classAbilityTables[classValue].length));
  const classAbility = classAbilityTables[classValue][classAbilityValue];

  const classClothingValue = Math.floor((Math.random() * classClothingTable[classValue]));
  const classHatValue = Math.floor((Math.random() * classHatTable[classValue]));
  const classWeaponValue = Math.floor((Math.random() * classWeaponTable[classValue]));

  const strengthStatRoll = Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6));
  const agilityStatRoll = Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6));
  const presenceStatRoll = Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6));
  const toughnessStatRoll = Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6));
  const spiritStatRoll = Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6)) + Math.ceil((Math.random() * 6));

  const strengthStat = parseInt(statLookupTable[strengthStatRoll]) + classStatsModifierTable[classValue][0];
  const agilityStat = parseInt(statLookupTable[agilityStatRoll]) + classStatsModifierTable[classValue][1];
  const presenceStat = parseInt(statLookupTable[presenceStatRoll]) + classStatsModifierTable[classValue][2];
  const toughnessStat = parseInt(statLookupTable[toughnessStatRoll]) + classStatsModifierTable[classValue][3];
  const spiritStat = parseInt(statLookupTable[spiritStatRoll]) + classStatsModifierTable[classValue][4];

  const classHp = Math.max(Math.floor((Math.random() * classHpTable[classValue])) + toughnessStat , 1);

  const distinctiveFlawValue = Math.floor((Math.random() * distinctiveFlawsTable.length));
  const physicalAilmentValue = Math.floor((Math.random() * physicalAilmentTable.length));
  const idiosyncraciesValue = Math.floor((Math.random() * idiosyncraciesTable.length));
  const unfortunateIncidentsValue = Math.floor((Math.random() * unfortunateIncidentsTable.length));
  const thingOfImportanceValue = Math.floor((Math.random() * thingOfImportanceTable.length));
  const backgroundValue = Math.floor((Math.random() * backgroundTable.length));
  const containerValue = Math.floor((Math.random() * containerTable.length));
  const cheapGearValue = Math.floor((Math.random() * cheapGearTable.length));
  const valuableGearValue = Math.floor((Math.random() * valuableGearTable.length));
  const petValue = Math.floor((Math.random() * petTable.length));
  const instrumentValue = Math.floor((Math.random() * instrumentTable.length));
  const relicValue = Math.floor((Math.random() * relicTable.length));
  const firstNamesValue = Math.floor((Math.random() * firstNamesTable.length));
  const nicknameValue = Math.floor((Math.random() * nicknameTable.length));
  const lastNameValue = Math.floor((Math.random() * lastNameTable.length));

  const distinctiveFlaw = distinctiveFlawsTable[distinctiveFlawValue];
  const physicalAilment = physicalAilmentTable[physicalAilmentValue];
  const idiosyncracies = idiosyncraciesTable[idiosyncraciesValue];
  const unfortunateIncidents = unfortunateIncidentsTable[unfortunateIncidentsValue];
  const thingOfImportance = thingOfImportanceTable[thingOfImportanceValue];
  const background = backgroundTable[backgroundValue];

  const container = containerTable[containerValue];
  const cheapGear = cheapGearTable[cheapGearValue];
  const valuableGear = valuableGearTable[valuableGearValue];
  const pet = petTable[petValue];
  const instrument = instrumentTable[instrumentValue];
  const relic = relicTable[relicValue];
  const relicDescription = relicDescriptionTable[relicValue];
  const clothing = clothingTable[classClothingValue];
  const hat = hatTable[classHatValue];
  const weapon = classValue === 2 /* Buccaneer */  ? weaponTable[9] /* Musket */ :  weaponTable[classWeaponValue];
  const firstNames = firstNamesTable[firstNamesValue];
  const nickname = nicknameTable[nicknameValue];
  const lastName = lastNameTable[lastNameValue];

  function WeaponDisplay(){
    return (
      <div className="weapon">
        {classValue === 0 /* Brute */ 
          ? <div>Trusted Weapon</div> 
          : <div>{weapon}</div>}
      </div>
    )
  }

  function GearDisplay(){
    return (
      <div>
        <div className="equipment">
          <div><strong>Container:</strong> {container}</div>
          <div><strong>Cheap Gear:</strong> {cheapGear}</div>
          {cheapGearValue === 11 ? <div><strong>Pet:</strong> {pet}</div> : null}
          <div><strong>Valuable Gear:</strong> {valuableGear}</div>
          {valuableGearValue === 11 ? <div><strong>Instrument:</strong> {instrument}</div> : null}
        </div>
        {valuableGearValue === 3 ? 
          <div className="relic">
            <div><strong>{relic}</strong></div>
            <div><i>{relicDescription}</i></div>
          </div> 
          : null}

      </div>
    );
    
  }
  
  return (
  <div>
    <div className="container">
      <img src={PirateBorgCharacterSheetv3NoLines} width="1690px" alt=""></img>
    </div>

    <div className="character-name-text">
      {firstNames + " “" + nickname + "” " + lastName}
    </div>
    <div className='class-name'>{className}</div>
    <div className="class-features">
      <div>{classAbility}</div>
      <br/>
      {classValue === 0 /* Brute */
          ? <div>{bruteWeaponTable[Math.floor((Math.random() * bruteWeaponTable.length))]}</div> 
          : null}
    </div>

    <div className="hp">
      <strong>{classHp}</strong>
    </div>

    <div className="strength">
      {strengthStat}
    </div>
    <div className="agility">
      {agilityStat}
    </div>
    <div className="presence">
      {presenceStat}
    </div>
    <div className="toughness">
      {toughnessStat}
    </div>    
    <div className="spirit">
      {spiritStat}
    </div>
    <div className="devils-luck">
      {classDevilsLuck}
    </div>

    <div className="distinctive-flaw">
      {distinctiveFlaw}
    </div>
    <div className="physical-ailment">
      {physicalAilment}
    </div>
    <div className="idiosyncracies">
      {idiosyncracies}
    </div>
    <div className="unfortunate-incidents">
      {unfortunateIncidents}
    </div>
    <div className="character-background">
      {background}
    </div>
    <div className="thing-of-importance">
      {thingOfImportance}
    </div>
    <div className="clothes-text">
      {clothing}
    </div>
    <div className="hat-text">
      {hat}
    </div>

    {WeaponDisplay()}
    {GearDisplay()}
  </div>
  );
}

export default App;

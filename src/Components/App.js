import React from 'react';
import {terribleTraitsTable, brokenBodyTable, badHabitTable, 
        troublingTaleTable, thingOfImportanceTable, backgroundTable,
        containerTable, cheapGearTable, valuableGearTable, petTable,
        instrumentTable, mythicArtifactTable, clothingTable,
        hatTable, weaponTable, firstNamesTable, nicknameTable, 
        lastNameTable, statLookupTable, classTable, classAbilityTables, classStatsModifierTable, 
        classHatTable, classHpTable, classDevilsLuckTable, classClothingTable, classWeaponTable, 
        bruteWeaponTable, mythicArtifactDescriptionTable} from '../Tables/tables.js';
import PirateBorgCharacterSheetv3 from '../Assets/PirateBorgCharacterSheetv3.jpg';
import './css/App.css';

function App() {
  const classValue = Math.floor((Math.random() * classTable.length));

  const className = classTable[classValue];

  const classHp = Math.floor((Math.random() * classHpTable[classValue])) + 1;
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

  const terribleTraitValue1 = Math.floor((Math.random() * terribleTraitsTable.length));
  const terribleTraitValue2 = Math.floor((Math.random() * (terribleTraitsTable.length - 1)) + terribleTraitValue1 + 1) % terribleTraitsTable.length;
  const brokenBodyValue = Math.floor((Math.random() * brokenBodyTable.length));
  const badHabitValue = Math.floor((Math.random() * badHabitTable.length));
  const troublingTaleValue = Math.floor((Math.random() * troublingTaleTable.length));
  const thingOfImportanceValue = Math.floor((Math.random() * thingOfImportanceTable.length));
  const backgroundValue = Math.floor((Math.random() * backgroundTable.length));
  const containerValue = Math.floor((Math.random() * containerTable.length));
  const cheapGearValue = Math.floor((Math.random() * cheapGearTable.length));
  const valuableGearValue = Math.floor((Math.random() * valuableGearTable.length));
  const petValue = Math.floor((Math.random() * petTable.length));
  const instrumentValue = Math.floor((Math.random() * instrumentTable.length));
  const mythicArtifact1Value = Math.floor((Math.random() * mythicArtifactTable.length));
  const mythicArtifact2Value = Math.floor((Math.random() * (mythicArtifactTable.length - 1)) + mythicArtifact1Value + 1) % mythicArtifactTable.length;
  const firstNamesValue = Math.floor((Math.random() * firstNamesTable.length));
  const nicknameValue = Math.floor((Math.random() * nicknameTable.length));
  const lastNameValue = Math.floor((Math.random() * lastNameTable.length));

  const terribleTrait1 = terribleTraitsTable[terribleTraitValue1];
  const terribleTrait2 = terribleTraitsTable[terribleTraitValue2];
  const brokenBody = brokenBodyTable[brokenBodyValue];
  const badHabit = badHabitTable[badHabitValue];
  const troublingTale = troublingTaleTable[troublingTaleValue];
  const thingOfImportance = thingOfImportanceTable[thingOfImportanceValue];
  const background = backgroundTable[backgroundValue];

  const container = containerTable[containerValue];
  const cheapGear = cheapGearTable[cheapGearValue];
  const valuableGear = valuableGearTable[valuableGearValue];
  const pet = petTable[petValue];
  const instrument = instrumentTable[instrumentValue];
  const mythicArtifact1 = mythicArtifactTable[mythicArtifact1Value];
  const mythicArtifactDescription1 = mythicArtifactDescriptionTable[mythicArtifact1Value];
  const mythicArtifact2 = mythicArtifactTable[mythicArtifact2Value];
  const mythicArtifactDescription2 = mythicArtifactDescriptionTable[mythicArtifact2Value];
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
          <div className="artifacts">
            <div><strong>Mythic Artifact 1:</strong> {mythicArtifact1}</div>
            <div><i>{mythicArtifactDescription1}</i></div>
            <br/>
            <div><strong>Mythic Artifact 2:</strong> {mythicArtifact2}</div>
            <div><i>{mythicArtifactDescription2}</i></div>
          </div> 
          : null}

      </div>
    );
    
  }
  
  return (
  <div>
    <div className="container">
      <img src={PirateBorgCharacterSheetv3} width="1690px" alt=""></img>
    </div>

    <div className="character-name-text">
      {firstNames + " “" + nickname + "” " + lastName}
    </div>
    <div className="class-and-abilities">
      <div><strong>Class:</strong> {className}</div>
      <div><strong>Class Ability:</strong> {classAbility}</div>
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

    <div className="terrible-trait-1">
      {terribleTrait1}
    </div>
    <div className="terrible-trait-2">
      {terribleTrait2}
    </div>
    <div className="broken-body">
      {brokenBody}
    </div>
    <div className="bad-habit">
      {badHabit}
    </div>
    <div className="troubling-tale">
      {troublingTale}
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

import React from 'react';
import {terribleTraitsTable, brokenBodyTable, badHabitTable, troublingTaleTable,
        placeOfImportanceTable, thingOfImportanceTable, backgroundTable,
        containerTable, cheapGearTable, valuableGearTable, petTable,
        instrumentTable, mythicArtifactTable, clothingTable,
        hatTable, weaponTable, firstNamesTable, nicknameTable, 
        lastNameTable, statLookupTable, classTable, classAbilityTables, classStatsModifierTable, 
        classHatTable, classHpTable, classDevilsLuckTable, classClothingTable, classWeaponTable, 
        bruteWeaponTable, mythicArtifactDescriptionTable} from '../Tables/tables.js';
import PirateBorgBackground from '../Assets/PirateBorgBackground.png';
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

  const strengthStatRoll = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + classStatsModifierTable[classValue][0];
  const agilityStatRoll = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + classStatsModifierTable[classValue][1];
  const presenceStatRoll = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + classStatsModifierTable[classValue][2];
  const toughnessStatRoll = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + classStatsModifierTable[classValue][3];

  const strengthStat = statLookupTable[strengthStatRoll];
  const agilityStat = statLookupTable[agilityStatRoll];
  const presenceStat = statLookupTable[presenceStatRoll];
  const toughnessStat = statLookupTable[toughnessStatRoll];

  const terribleTraitValue1 = Math.floor((Math.random() * terribleTraitsTable.length));
  const terribleTraitValue2 = Math.floor((Math.random() * (terribleTraitsTable.length - 1)) + terribleTraitValue1 + 1) % terribleTraitsTable.length;
  const brokenBodyValue = Math.floor((Math.random() * brokenBodyTable.length));
  const badHabitValue = Math.floor((Math.random() * badHabitTable.length));
  const troublingTaleValue = Math.floor((Math.random() * troublingTaleTable.length));
  const placeOfImportanceValue = Math.floor((Math.random() * placeOfImportanceTable.length));
  const thingOfImportanceValue = Math.floor((Math.random() * thingOfImportanceTable.length));
  const backgroundValue = Math.floor((Math.random() * backgroundTable.length));
  const containerValue = Math.floor((Math.random() * containerTable.length));
  const cheapGearValue = Math.floor((Math.random() * cheapGearTable.length));
  const valuableGearValue = Math.floor((Math.random() * valuableGearTable.length));
  const petValue = Math.floor((Math.random() * petTable.length));
  const instrumentValue = Math.floor((Math.random() * instrumentTable.length));
  // const enchantedArtifactValue = Math.floor((Math.random() * enchantedArtifactTable.length));
  const mythicArtifact1Value = Math.floor((Math.random() * mythicArtifactTable.length));
  const mythicArtifact2Value = Math.floor((Math.random() * (mythicArtifactTable.length - 1)) + mythicArtifact1Value + 1) % mythicArtifactTable.length;
  // const bombValue = Math.floor((Math.random() * bombTable.length));
  const firstNamesValue = Math.floor((Math.random() * firstNamesTable.length));
  const nicknameValue = Math.floor((Math.random() * nicknameTable.length));
  const lastNameValue = Math.floor((Math.random() * lastNameTable.length));

  const terribleTrait1 = terribleTraitsTable[terribleTraitValue1];
  const terribleTrait2 = terribleTraitsTable[terribleTraitValue2];
  const brokenBody = brokenBodyTable[brokenBodyValue];
  const badHabit = badHabitTable[badHabitValue];
  const troublingTale = troublingTaleTable[troublingTaleValue];
  const placeOfImportance = placeOfImportanceTable[placeOfImportanceValue];
  const thingOfImportance = thingOfImportanceTable[thingOfImportanceValue];
  const background = backgroundTable[backgroundValue];

  const container = containerTable[containerValue];
  const cheapGear = cheapGearTable[cheapGearValue];
  const valuableGear = valuableGearTable[valuableGearValue];
  const pet = petTable[petValue];
  const instrument = instrumentTable[instrumentValue];
  // const enchantedArtifact = enchantedArtifactTable[enchantedArtifactValue];
  const mythicArtifact1 = mythicArtifactTable[mythicArtifact1Value];
  const mythicArtifactDescription1 = mythicArtifactDescriptionTable[mythicArtifact1Value];
  const mythicArtifact2 = mythicArtifactTable[mythicArtifact2Value];
  const mythicArtifactDescription2 = mythicArtifactDescriptionTable[mythicArtifact2Value];
  const clothing = clothingTable[classClothingValue];
  const hat = hatTable[classHatValue];
  const weapon = classValue === 2 /* Buccaneer */  ? weaponTable[9] /* Musket */ :  weaponTable[classWeaponValue];
  // const bomb = bombTable[bombValue];
  const firstNames = firstNamesTable[firstNamesValue];
  const nickname = nicknameTable[nicknameValue];
  const lastName = lastNameTable[lastNameValue];

  function WeaponDisplay(){
    return (
      <div className="weapon">
        {classValue === 0 /* Brute */ 
          ? <div><strong>Weapon:</strong> {bruteWeaponTable[Math.floor((Math.random() * bruteWeaponTable.length))]}</div> 
          : <div><strong>Weapon:</strong> {weapon}</div>}
      </div>
    )
  }

  function GearDisplay(){
    return (
      <div className="gear">
        <div><strong>Container:</strong> {container}</div>
        <div><strong>Cheap Gear:</strong> {cheapGear}</div>
        {cheapGearValue === 11 ? <div><strong>Pet:</strong> {pet}</div> : null}
        <div><strong>Valuable Gear:</strong> {valuableGear}</div>
        {valuableGearValue === 3 ? <div>
            <div><strong>Mythic Artifact 1:</strong> {mythicArtifact1}</div>
            <div><i>{mythicArtifactDescription1}</i></div>
            <div><strong>Mythic Artifact 2:</strong> {mythicArtifact2}</div>
            <div><i>{mythicArtifactDescription2}</i></div>
          </div> 
          : null}
        {valuableGearValue === 11 ? <div><strong>Instrument:</strong> {instrument}</div> : null}
      </div>
    );
    
  }
  
  return (
  <div>
    <div className="container">
      <img src={PirateBorgBackground} alt=""></img>
    </div>

    <div className="character-name-text">
      <div><strong>First Name:</strong> {firstNames}</div>
      <div><strong>Nickname:</strong> {nickname}</div>
      <div><strong>Last Name:</strong> {lastName}</div>
    </div>
    <div className="class-and-abilities">
      <div><strong>Class:</strong> {className}</div>
      <div><strong>Class Ability:</strong> {classAbility}</div>
    </div>

    <div className="hp">
      <div><strong>HP:</strong> {classHp}</div>
    </div>

    <div className="strength">
      <div><strong>Strength:</strong> {strengthStat}</div>
    </div>
    <div className="agility">
      <div><strong>Agility:</strong> {agilityStat}</div>
    </div>
    <div className="presence">
      <div><strong>Presence:</strong> {presenceStat}</div>
    </div>
    <div className="toughness">
      <div><strong>Toughness:</strong> {toughnessStat}</div>
    </div>
    <div className="devils-luck">
      <div><strong>Devil's Luck:</strong> {classDevilsLuck}</div>
    </div>

    <div className="terrible-trait-1">
      <div><strong>Terrible Trait:</strong> {terribleTrait1}</div>
    </div>
    <div className="terrible-trait-2">
      <div><strong>Terrible Trait:</strong> {terribleTrait2}</div>
    </div>
    <div className="broken-body">
      <div><strong>Broken Body:</strong> {brokenBody}</div>
    </div>
    <div className="bad-habit">
      <div><strong>Bad Habit:</strong> {badHabit}</div>
    </div>
    <div className="troubling-tale">
      <div><strong>Troubling Tale:</strong> {troublingTale}</div>
    </div>
    <div className="character-background">
      <div><strong>Background:</strong> {background}</div>
    </div>
    <div className="thing-of-importance">
      <div><strong>Thing of Importance:</strong> {thingOfImportance}</div>
    </div>
    
    <br/>
    
    
    
    
    <br/>
    {/* <div><strong>Enchanted Artifact:</strong> {enchantedArtifact}</div> */}
    {/* <div><strong>Mythic Artifact:</strong> {mythicArtifact}</div> */}
    {WeaponDisplay()}
    <div><strong>Clothing:</strong> {clothing}</div>
    <div><strong>Hat:</strong> {hat}</div>
    {/* <div>Bomb:</strong> {bomb}</div> */}
    {GearDisplay()}
    <br/>
    
    
    
    
    
    <div><strong>Place of Importance:</strong> {placeOfImportance}</div>
    

  </div>
  );
}

export default App;

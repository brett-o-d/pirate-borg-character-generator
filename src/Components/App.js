import React from 'react';
import {terribleTraitsTable, brokenBodyTable, badHabitTable, troublingTaleTable,
        placeOfImportanceTable, thingOfImportanceTable, backgroundTable,
        containerTable, cheapGearTable, valuableGearTable, petTable,
        instrumentTable, enchantedArtifactTable, 
        mythicArtifactTable, clothingTable,
        hatTable, weaponTable, bombTable, firstNamesTable, nicknameTable, 
        lastNameTable, statLookupTable} from '../Tables/tables.js'

function App() {
  const strengthStatRoll = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6));
  const agilityStatRoll = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6));
  const presenceStatRoll = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6));
  const toughnessStatRoll = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6));

  const strengthStat = statLookupTable[strengthStatRoll];
  const agilityStat = statLookupTable[agilityStatRoll];
  const presenceStat = statLookupTable[presenceStatRoll];
  const toughnessStat = statLookupTable[toughnessStatRoll];

  const terribleTraitValue1 = Math.floor((Math.random() * terribleTraitsTable.length));
  const terribleTraitValue2 = Math.floor((Math.random() * (terribleTraitsTable.length - 1)) + terribleTraitValue1 + 1) % 20;
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
  const enchantedArtifactValue = Math.floor((Math.random() * enchantedArtifactTable.length));
  const mythicArtifactValue = Math.floor((Math.random() * mythicArtifactTable.length));
  const clothingValue = Math.floor((Math.random() * clothingTable.length));
  const hatValue = Math.floor((Math.random() * hatTable.length));
  const weaponValue = Math.floor((Math.random() * weaponTable.length));
  const bombValue = Math.floor((Math.random() * bombTable.length));
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
  const enchantedArtifact = enchantedArtifactTable[enchantedArtifactValue];
  const mythicArtifact = mythicArtifactTable[mythicArtifactValue];
  const clothing = clothingTable[clothingValue];
  const hat = hatTable[hatValue];
  const weapon = weaponTable[weaponValue];
  const bomb = bombTable[bombValue];
  const firstNames = firstNamesTable[firstNamesValue];
  const nickname = nicknameTable[nicknameValue];
  const lastName = lastNameTable[lastNameValue];
  
  return (
  <div>
    <div>Strength: {strengthStat}</div>
    <div>Agility: {agilityStat}</div>
    <div>Presence: {presenceStat}</div>
    <div>Toughness: {toughnessStat}</div>
    <br></br>
    <div>Terrible Trait: {terribleTrait1}</div>
    <div>Terrible Trait: {terribleTrait2}</div>
    <div>Broken Body: {brokenBody}</div>
    <div>Bad Habit: {badHabit}</div>
    <div>Troubling Tale: {troublingTale}</div>
    <div>Place of Importance: {placeOfImportance}</div>
    <div>Thing of Importance: {thingOfImportance}</div>
    <div>Background: {background}</div>
    <div>Container: {container}</div>
    <div>Cheap Gear: {cheapGear}</div>
    <div>Valuable Gear: {valuableGear}</div>
    <div>Pet: {pet}</div>
    <div>Instrument: {instrument}</div>
    <div>Enchanted Artifact: {enchantedArtifact}</div>
    <div>Mythic Artifact: {mythicArtifact}</div>
    <div>Clothing: {clothing}</div>
    <div>Hat: {hat}</div>
    <div>Weapon: {weapon}</div>
    <div>Bomb: {bomb}</div>
    <div>First Name: {firstNames}</div>
    <div>Nickname: {nickname}</div>
    <div>Last Name: {lastName}</div>
  </div>
  );
}

export default App;

import React from 'react';
import { TextStyles, PositionStyles } from './styles.js'
import { ThemeProvider } from '@material-ui/core/styles';
import {distinctiveFlawsTable, physicalAilmentTable, idiosyncraciesTable, 
        unfortunateIncidentsTable, thingOfImportanceTable, backgroundTable,
        containerTable, cheapGearTable, valuableGearTable, petTable,
        instrumentTable, clothingTable, hatTable, weaponTable, firstNamesTable, nicknameTable, 
        lastNameTable, statLookupTable, classTable, classAbilityTables, classStatsModifierTable, 
        classHatTable, classHpTable, classDevilsLuckTable, classClothingTable, classWeaponTable, 
        bruteWeaponTable, buccaneerWeaponTable, relicTable, relicDescriptionTable} from '../Tables/tables.js';
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

  const classHp = Math.max(Math.floor((Math.random() * classHpTable[classValue])) + toughnessStat, 1);

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

  //Import (material-ui) text styles
  const textStyleClasses = TextStyles();
  const positionStyleClasses = PositionStyles();

  function WeaponDisplay(){
    return (
      <div className={textStyleClasses.mediumText + " weapon " + positionStyleClasses.Weapon}>
        {classValue === 0 /* Brute */ 
          ? <div>Trusted Weapon</div> 
          : <div>{weapon}</div>}
      </div>
    )
  }

  function GearDisplay(){
    return (
      <div>
        <div className={textStyleClasses.mediumText + " equipment"}>
          <div><strong>Container:</strong> {container}</div>
          <div><strong>Cheap Gear:</strong> {cheapGear}</div>
          {cheapGearValue === 11 ? <div><strong>Pet:</strong> {pet}</div> : null}
          <div><strong>Valuable Gear:</strong> {valuableGear}</div>
          {valuableGearValue === 11 ? <div><strong>Instrument:</strong> {instrument}</div> : null}
        </div>
        {valuableGearValue === 3 ? 
          <div className={textStyleClasses.mediumText + " relic"}>
            <div><strong>{relic}</strong></div>
            <div><i>{relicDescription}</i></div>
          </div> 
          : null}

      </div>
    ); 
  }

  function ClothesDisplay(){
    return (
      <div className={textStyleClasses.mediumText + " clothes-text " + positionStyleClasses.Clothes}>
        <strong>Clothes:</strong> {clothing}
        <br/>
        <strong>Hat:</strong> {hat}
      </div>
    );
  }
  
  return (
    <div>
      <div className="container">
        <img src={PirateBorgCharacterSheetv3NoLines} className="character-sheet" alt=""></img>

        <div className={textStyleClasses.largeText + " character-name-text " + positionStyleClasses.CharacterName}>
          <span>{firstNames + " “" + nickname + "” " + lastName}</span>
        </div>
        <div className={textStyleClasses.largeText + " class-name " + positionStyleClasses.ClassName}>{className}</div>
        <div className={textStyleClasses.mediumText + " class-features " + positionStyleClasses.ClassFeatures}>
        {classValue === 2 /* Buccaneer */
              ? <div><div>{buccaneerWeaponTable[Math.floor((Math.random() * buccaneerWeaponTable.length))]}</div><br/></div>
              : null}
        <div>{classAbility}</div>
        <br/>
        {classValue === 0 /* Brute */
            ? <div>{bruteWeaponTable[Math.floor((Math.random() * bruteWeaponTable.length))]}</div> 
            : null}
        </div>

        <div className={textStyleClasses.extraLargeText + " hp " + positionStyleClasses.HitPoints}>
          <strong>{classHp}</strong>
        </div>

        <div className={textStyleClasses.extraLargeText + " strength " + positionStyleClasses.Strength}>
          {(strengthStat >= 0)? "+"+strengthStat : strengthStat}
        </div>
        <div className={textStyleClasses.extraLargeText + " agility " + positionStyleClasses.Agility}>
          {(agilityStat >= 0)? "+"+agilityStat : agilityStat}
        </div>
        <div className={textStyleClasses.extraLargeText + " presence " + positionStyleClasses.Presence}>
          {(presenceStat >= 0)? "+"+presenceStat : presenceStat}
        </div>
        <div className={textStyleClasses.extraLargeText + " toughness " + positionStyleClasses.Toughness}>
          {(toughnessStat >= 0)? "+"+toughnessStat : toughnessStat}
        </div>    
        <div className={textStyleClasses.extraLargeText + " spirit " + positionStyleClasses.Spirit}>
          {(spiritStat >= 0)? "+"+spiritStat : spiritStat}
        </div>
        <div className={textStyleClasses.extraLargeText + " devils-luck " + positionStyleClasses.DevilsLuck}>
          {classDevilsLuck}
        </div>

        {WeaponDisplay()}


        <div className={textStyleClasses.mediumText + " character-background"}>
          {background}
        </div>
        <div className={textStyleClasses.mediumText + " distinctive-flaw"}>
          {distinctiveFlaw}
        </div>
        <div className={textStyleClasses.mediumText + " physical-ailment"}>
          {physicalAilment}
        </div>
        <div className={textStyleClasses.mediumText + " idiosyncracies"}>
          {idiosyncracies}
        </div>
        <div className={textStyleClasses.mediumText + " unfortunate-incidents"}>
          {unfortunateIncidents}
        </div>
        <div className={textStyleClasses.mediumText + " thing-of-importance"}>
          {thingOfImportance}
        </div>

        {ClothesDisplay()}
        {GearDisplay()}
      </div>
    </div>
  );
}

export default App;

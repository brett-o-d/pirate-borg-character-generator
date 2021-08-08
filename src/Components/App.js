import React from 'react';
import {terribleTraitsTable, brokenBodyTable, badHabitTable, troublingTaleTable, placeOfImportanceTable, thingOfImportanceTable, backgroundTable} from '../Tables/tables.js'

function App() {
  const terribleTraitValue1 = Math.floor((Math.random() * 20));
  const terribleTraitValue2 = Math.floor((Math.random() * 19) + terribleTraitValue1) % 20;
  const brokenBodyValue = Math.floor((Math.random() * 20));
  const badHabitValue = Math.floor((Math.random() * 20));
  const troublingTaleValue = Math.floor((Math.random() * 20));
  const placeOfImportanceValue = Math.floor((Math.random() * 12));
  const thingOfImportanceValue = Math.floor((Math.random() * 100));
  const backgroundValue = Math.floor((Math.random() * 100));

  const terribleTrait1 = terribleTraitsTable[terribleTraitValue1];
  const terribleTrait2 = terribleTraitsTable[terribleTraitValue2];
  const brokenBody = brokenBodyTable[brokenBodyValue];
  const badHabit = badHabitTable[badHabitValue];
  const troublingTale = troublingTaleTable[troublingTaleValue];
  const placeOfImportance = placeOfImportanceTable[placeOfImportanceValue];
  const thingOfImportance = thingOfImportanceTable[thingOfImportanceValue];
  const background = backgroundTable[backgroundValue];
  
  return (
  <div>
    <div>{terribleTrait1}</div>
    <div>{terribleTrait2}</div>
    <div>{brokenBody}</div>
    <div>{badHabit}</div>
    <div>{troublingTale}</div>
    <div>{placeOfImportance}</div>
    <div>{thingOfImportance}</div>
    <div>{background}</div>
  </div>
  );
}

export default App;

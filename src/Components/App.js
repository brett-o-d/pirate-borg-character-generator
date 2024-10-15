import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Drawer from './drawer.tsx';
import CharacterSheet from './character-sheet.tsx';
import { PBButton } from './mui/pb-button.tsx'

function App() {
  const [settings, setSettings] = React.useState(['us-letter']);

  //Used to generate a new Pirate without refreshing the page
  const [throwaway, setThrowaway] = useState([0]);


  const PrintDiv = (() => {
      window.print();
  });

  const NewPirate = (() => {
    setThrowaway(Number(throwaway) + 1);
    console.log(throwaway);
  });
  
  return (
    <div>
      <div className='no-print'>
        <BrowserView>
          <Drawer settings={settings} setSettings={setSettings}/>
          <PBButton variant='outlined' onClick={PrintDiv}>Print this pirate</PBButton>
          <PBButton variant='outlined' onClick={NewPirate}>To Davey Jones wit' ye</PBButton>
        </BrowserView>        
        <MobileView>
          <input type="button" value="To Davey Jones wit' ye" onClick={NewPirate}></input>
        </MobileView>
      </div>
      <CharacterSheet settings={settings}/>
    </div>
  );
}

export default App;

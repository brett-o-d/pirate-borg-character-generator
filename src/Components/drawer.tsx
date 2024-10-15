import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { PBButton } from './mui/pb-button.tsx'
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import About from './about.tsx';
import { PBSettingListItem } from './mui/pb-setting-list-item.tsx';

export default function TemporaryDrawer(props) {
  const [open, setOpen] = React.useState(false);
  const settings = props.settings;
  const setSettings = props.setSettings;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  
  const handleToggle = (value: string) => () => {
    const currentIndex = settings.indexOf(value);
    const newSettings = [...settings];

    if (currentIndex === -1) {
      newSettings.push(value);
    } else {
      newSettings.splice(currentIndex, 1);
    }

    setSettings(newSettings);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <PBSettingListItem>
        <ListItemText primary="A4/US Letter" />
        <Switch
          edge="end"
          onChange={handleToggle('us-letter')}
          checked={settings.includes('us-letter')}
        />
      </PBSettingListItem>
      <PBSettingListItem>
        <ListItemText primary="Printer Friendly" />
        <Switch
          edge="end"
          disabled={!settings.includes('us-letter')}
          onChange={handleToggle('printer-friendly')}
          checked={settings.includes('printer-friendly')}
        />
      </PBSettingListItem>
      <Divider />
      <PBSettingListItem>
        <ListItemText primary="Tall Tale" secondary='coming soon'/>
        <Switch
          edge="end"
          disabled={true}
          onChange={handleToggle('tall-tale')}
          checked={settings.includes('tall-tale')}
        />
      </PBSettingListItem>
      <PBSettingListItem>
        <ListItemText primary="Haunted Soul" secondary='coming soon'/>
        <Switch
          edge="end"
          disabled={true}
          onChange={handleToggle('haunted-soul')}
          checked={settings.includes('haunted-soul')}
        />
      </PBSettingListItem>
      <Divider />
      <PBSettingListItem>
        <ListItemText primary="Tall Tale" secondary='coming soon'/>
        <Switch
          edge="end"
          disabled={true}
          onChange={handleToggle('tall-tale')}
          checked={settings.includes('tall-tale')}
        />
      </PBSettingListItem>
      <PBSettingListItem>
        <ListItemText primary="Cabin Fever" secondary='coming soon'/>
        <Switch
          edge="end"
          disabled={true}
          onChange={handleToggle('cabin-fever')}
          checked={settings.includes('cabin-fever')}
        />
      </PBSettingListItem>
      <Divider />
      <About/>
    </Box>
  );

  return (
    <span>
      <PBButton variant='outlined' onClick={toggleDrawer(true)}>Settings</PBButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </span>
  );
}

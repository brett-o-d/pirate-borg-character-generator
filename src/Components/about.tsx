import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton }  from '@mui/material';

export default function About() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClickOpen}>
        <ListItemText primary='About & Legal' />
      </ListItemButton>
      </ListItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"About & Legal"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pirate Generator is an independent production by Brett O'Donnell and is not affiliated with Ockult Örtmästare Games or Stockholm Kartell. It is published under the MÖRK BORG Third Party License. <br/><br/>
            Pirate Generator is an independent production by Brett O'Donnell. It is not affiliated with Limithron LLC. It is published under the PIRATE BORG Third Party License. PIRATE BORG is ©2022 Limithron LLC.”<br/><br/>
            <b>Problems or suggestions?</b> Contact @brett-o-d on Limithron's Discord Server: https://www.limithron.com/
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Close</Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}

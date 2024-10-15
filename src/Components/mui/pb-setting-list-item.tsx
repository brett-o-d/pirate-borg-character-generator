import { styled } from '@mui/material/styles';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import { red, grey } from '@mui/material/colors';

export const PBSettingListItem = styled(ListItem)<ListItemProps>(() => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "+ .MuiSwitch-track": {
        backgroundColor: red['A700'],
        opacity: '100'
      },
      ".MuiSwitch-thumb": {
        backgroundColor: "#000000"
      },

      "&.Mui-disabled": {
        "+ .MuiSwitch-track": {
          backgroundColor: red[100],
        },
          ".MuiSwitch-thumb": {
          backgroundColor: grey[400]
        },
      },
    },

    "+ .MuiSwitch-track": {
      backgroundColor: red[700]
    },
    ".MuiSwitch-thumb": {
      backgroundColor: "#000000"
    },

    "&.Mui-disabled": {
        "+ .MuiSwitch-track": {
          backgroundColor: red[700],
        },
          ".MuiSwitch-thumb": {
          backgroundColor: grey[400]
        },
      },
  }
}));

import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { red } from '@mui/material/colors';

export const PBButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[50]),
  backgroundColor: red[50],
  borderColor: '#000000',
  '&:hover': {
    backgroundColor: red[300],
    borderColor: '#000000',
  },
}));

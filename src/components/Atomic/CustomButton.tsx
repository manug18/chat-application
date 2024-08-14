import { styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const CustomButton = styled(LoadingButton)(({ theme }) => ({
  height: '3rem',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '75%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

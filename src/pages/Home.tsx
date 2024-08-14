import { Typography, Stack } from '@mui/material';
import { SideBar } from '../components/SideBar';

export function Home() {
  return (
    <Stack width="100%" height="100%" flexDirection={'row'}>
      <SideBar />
      <Typography variant="h3">Home</Typography>
    </Stack>
  );
}

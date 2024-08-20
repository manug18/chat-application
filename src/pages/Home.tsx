import { Typography, Stack } from '@mui/material';
import { SideBar } from '../components/SideBar';
import { MessageBar } from '../components/MessageBar';

export function Home() {
  return (
    <>
      <Stack width="100%" height="100%" flexDirection={'row'}>
        <SideBar />
        <MessageBar />
      </Stack>
    </>
  );
}

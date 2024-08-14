import { Typography, Stack } from '@mui/material';
import { colors } from '../styles/Colors';
import { ChatBar } from './ChatBar';

export function SideBar() {
  return (
    <Stack width="20%">
      <Stack height="10%" bgcolor={colors.skyBlue.skyBlue_100}>
        <Typography variant="h3" p={2}>
          Name
        </Typography>
      </Stack>
      <ChatBar />
      <ChatBar />
    </Stack>
  );
}

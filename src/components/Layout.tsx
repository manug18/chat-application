import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Outlet } from 'react-router-dom';

const AppGrid = styled(Box)(() => ({
  display: 'flex',
  height: '100vh',
}));

/**
 *  Host file for all routes, can contain page headers
 * @returns
 */
export function Layout() {
  return (
    <AppGrid>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 0, sm: 2 },
        }}
      >
        <Box
          id="outlet-box"
          sx={{
            height: '100%',
          }}
        >
          <Outlet key="LayoutOutlet" />
        </Box>
      </Box>
    </AppGrid>
  );
}

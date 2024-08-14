import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RoutesWrapper } from './router/RouteWrapper';
import { ThemeProvider } from '@mui/material';
import { customTheme } from './styles/Theme';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import pkgInfo from '../package.json';
import Logger from './utils/Logger';
import GlobalContextProvider from './state/GlobalContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 300000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

Logger.prodLog('Application version: ', pkgInfo.version);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <RoutesWrapper />
        </GlobalContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

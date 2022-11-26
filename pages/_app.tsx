import '../styles/globals.css';

import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import React from 'react';
import theme from '../themes/theme';


function MyApp({
  Component,
  pageProps,
}: AppProps ) {
  return (
   
    
    <ThemeProvider theme={theme.theme}>
      <CssBaseline />
      
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

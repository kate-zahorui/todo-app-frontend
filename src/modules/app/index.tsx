import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { MainRouter } from '../navigation';
import { theme } from '../theme';
import * as styles from './app.styled';

const inputGlobalStyles = <GlobalStyles styles={styles} />;

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    {inputGlobalStyles}
    <MainRouter />
  </ThemeProvider>
);

export default AppContainer;

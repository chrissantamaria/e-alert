import React from 'react';
import styled from 'styled-components';
import { responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import NotificationProvider from './providers/NotificationProvider';

import Content from './views/home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#6495ed', contrastText: '#fff' }
    }
  })
);

export default () => (
  <NotificationProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <NavBar />
        <Content />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  </NotificationProvider>
);

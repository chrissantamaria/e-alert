import React from 'react';
import { responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import NotificationProvider from './providers/NotificationProvider';

import Content from './views/home';
import { AppContainer, ContentContainer } from './styles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
        <ContentContainer>
          <Content />
        </ContentContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  </NotificationProvider>
);

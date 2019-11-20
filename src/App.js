import React from 'react';
import styled from 'styled-components';
import { responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Content from './views/home';
import { ContentContainer } from './styles';
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
  <ThemeProvider theme={theme}>
    <AppContainer>
      <NavBar />
      <ContentContainer>
        <Content />
      </ContentContainer>
      <Footer />
    </AppContainer>
  </ThemeProvider>
);

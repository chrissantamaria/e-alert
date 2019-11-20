import React from 'react';
import styled from 'styled-components';
import { Container, Paper as MuiPaper } from '@material-ui/core';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Paper = styled(MuiPaper)`
  margin: 2rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContentContainer = ({ children, ...props }) => (
  <Container maxWidth="sm">
    <Paper {...props}>{children}</Paper>
  </Container>
);

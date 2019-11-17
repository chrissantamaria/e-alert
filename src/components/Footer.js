import React from 'react';
import styled from 'styled-components';
import { Container as MuiContainer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Container = styled.footer`
  padding: 2rem;
  margin-top: auto;
  background-color: #6495ed;
  color: white;
`;

const ContentContainer = styled(MuiContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(2),
//     marginTop: 'auto',
//     backgroundColor: theme.palette.primary.main,
//     color: 'white'
//   },
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   }
// }));

export default () => (
  <Container>
    <ContentContainer maxWidth="sm">
      <Typography variant="h6">
        {'Made with '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        {'  by the E-Alert team'}
      </Typography>
    </ContentContainer>
  </Container>
);

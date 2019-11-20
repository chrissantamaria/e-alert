import React from 'react';
import { Grid } from '@material-ui/core';
import Register from './Register';
import Alert from './Alert';
import { ContentContainer } from './styles';

export default () => (
  <Grid container spacing={0}>
    <Grid item xs={12} sm={6}>
      <ContentContainer>
        <Register />
      </ContentContainer>
    </Grid>
    <Grid item xs={12} sm={6}>
      <ContentContainer>
        <Alert />
      </ContentContainer>
    </Grid>
  </Grid>
);

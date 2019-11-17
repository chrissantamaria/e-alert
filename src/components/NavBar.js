import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => (
  <div>
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4" component="h1">
          E-Alert
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../assets/logo.png';

export default () => (
  <div>
    <AppBar position="relative">
      <Toolbar>
        <img style={{ maxWidth: 300 }} src={logo} alt="E-Alert Logo" />
      </Toolbar>
    </AppBar>
  </div>
);

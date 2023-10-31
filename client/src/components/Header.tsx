import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from './shared/Logo';

function Header() {
  return (
    <AppBar sx={{ bccolor: "transparent", position:"static", boxShadow: "none" }}>
      <Toolbar sx={{display: "flex", }}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
}

export default Header
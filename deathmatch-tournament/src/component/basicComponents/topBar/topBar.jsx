import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './topBarCssModule.module.css'
import { StylesProvider } from '@mui/styles';



export default function TopBar() {


  return (
    <StylesProvider injectFirst>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color="secondary" className={styles.TopBar}>
        <Toolbar className={styles.TopBar}>


          
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}


          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography> */}

          
          <Button color="inherit" sx={{ my: 1, mx: 1.5 }}>my profile</Button>
          <Button color="inherit">browse games</Button>
          <Button color="inherit">about us</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </StylesProvider>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { StylesProvider } from '@mui/styles';
import Grid from '@mui/material/Grid'; 
import { useHistory } from 'react-router-dom'; 
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';




export default function TopBar() {


  return (
    <StylesProvider injectFirst>
    <Box sx={{ flexGrow: 1 }} sx={{paddingBottom:'30px'}}>
      <AppBar position="static"  color="secondary" >
        <Toolbar >
          <HomeOutlinedIcon fontSize="large"/>


          
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



      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
                >
          <Button color="inherit" sx={{ my: 1, mx: 1.5 }} variant="outlined">my profile</Button>
          <Button color="inherit" sx={{ my: 1, mx: 1.5 }} href="/games" variant="outlined">browse games</Button>
          <Button color="inherit" sx={{ my: 1, mx: 1.5 }} variant="outlined">about us</Button>
          <Button color="inherit" sx={{ my: 1, mx: 1.5 }} href ="/logIn" variant="outlined">LogIn</Button>
          <Button color="inherit" sx={{ my: 1, mx: 1.5 }} href ="/singUp" variant="outlined">SingUp</Button>

      </Grid>
        </Toolbar>
      </AppBar>
    </Box>
    </StylesProvider>
  );
}

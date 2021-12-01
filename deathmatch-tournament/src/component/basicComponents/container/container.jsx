import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';



export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
     
        <Box sx={{height:500}}>
       
            <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
              >
                <Grid  xs={8} justifyContent="space-around"
            alignItems="center">
                <Avatar
         
                  alt="Remy Sharp"
                  src="https://1000logos.net/wp-content/uploads/2020/09/Quake-logo.png"
                  sx={{ width: 500, height: 500,paddingLeft:'100px',paddingTop:'40px' }}
                  variant="square"
                  />
                </Grid>
                <Grid  xs={4}>
                  <Button variant="outlined" color="secondary">Create Game</Button>
                </Grid>

            </Grid>
      
        </Box>
    
    </React.Fragment>
  );
}

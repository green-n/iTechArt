import * as React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import {Stack} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import styles from './footer.module.css'



export default function Footer() {
    return (
        <AppBar position="fixed" className={styles.footer} sx={{top:'auto', bottom:0}}>
          <Container maxWidth="md">
            <Toolbar>
              <Grid
              container
              
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              >
                <Grid item>
                  <IconButton color="primary" aria-label="upload picture" component="span">     <Avatar
                    variant="square"              
                    src="/assets/images/fb.png"
                    sx={{ width: 15, height: 36 }}
                    />
                    </IconButton></Grid>
                    <Grid item>
                    <IconButton color="primary" aria-label="upload picture" component="span">     <Avatar
                    variant="square"              
                    src="/assets/images/ig.png"
                    sx={{ width: 30, height: 30 }}
                    />
                    </IconButton></Grid>
                    <Grid item>
                    <IconButton color="primary" aria-label="upload picture" component="span">     <Avatar
                    variant="square"              
                    src="/assets/images/tw.png"
                    sx={{ width: 30, height: 30 }}
                    />
                    </IconButton></Grid>
                </Grid>
                {/* <Stack direction="row" spacing={2} align='center' sx={{ justifyContent:'center', textAlign:'center'}}>
                    <div >       
                

                    <Avatar
                    variant="square"              
                    src="/assets/images/tw.png"
                    sx={{ width: 26, height: 26  }}
                    />
                   
                    
                    <Avatar
                    variant="square"              
                    src="/assets/images/ig.png"
                    sx={{ width: 26, height: 26 }}
                    />
                   
                    <Avatar
                    variant="square"              
                    src="/assets/images/fb.png"
                    sx={{ width: 18, height: 36 }}
                    />

                    </div>

                   </Stack> */}
                 

                   
            </Toolbar>
          </Container>
        </AppBar>
    )
}
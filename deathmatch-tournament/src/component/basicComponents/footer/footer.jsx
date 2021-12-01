import * as React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import {Stack} from '@mui/material';
import styles from './footer.module.css'

export default function Footer() {
    return (
        <AppBar position="fixed" color="" sx={{top:'auto', bottom:0}}>
          <Container maxWidth="md">
            <Toolbar>
                <Stack direction="row" spacing={2} align='center' sx={{ justifyContent:'center', textAlign:'center'}}>
                    <div className={styles.AvatarContainer}>       
                

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

                   </Stack>
                   
            </Toolbar>
          </Container>
        </AppBar>
    )
}
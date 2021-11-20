import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function TableGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Item>test</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>test</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>test</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>test</Item>
          </Grid>
        </Grid>
      </Box>
    );
  }

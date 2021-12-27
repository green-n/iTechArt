import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OneCard from '../oneCard/oneCard';
import { Component } from 'react'








export default function TableOfGames (props){


    return (
      console.log(props.obj),
      <Box sx={{ flexGrow: 1 }} sx={{paddingTop:'30px',paddingLeft:'70px', paddingBottom:'100px'}}> 
      <Grid  container  justifyContent="flex-start"  spacing={2}>
      {props.obj.map((obj)=>(
      <Grid item xs={6} md={3} key={obj.id}>
      <OneCard
       id = {obj.id}
       name = {obj.gameName}
       map = {obj.gameDifficulty}
       difficulty = {obj.gameDifficulty}
       desctiptionOfGame = {obj.gameDescription} 
       />
       </Grid>
     ))}
     </Grid>
     </Box>

     )
  }






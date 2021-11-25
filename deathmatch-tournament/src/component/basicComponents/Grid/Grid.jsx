import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cards from '../card/Card';
import { Component } from 'react'








class TableGrid extends Component {

  constructor() {
        
    super();

    this.state = {
      Game: [
        {
           id: 0,
           GameName: "Noobs",
           GameMap: "Du Hast Map",
           GameDifficulty:"begginer",
           GameDescription:"for the begginers"
        },
    
        {
            id: 1,
            GameName: "SportBoys",
            GameMap: "Du Hast Map",
            GameDifficulty:"intermediate",
            GameDescription:"Quick Game for fun"
        },
    
        {
            id: 2,
            GameName: "Pros",
            GameMap: "Du Hast Map",
            GameDifficulty:"profecionals",
            GameDescription:"only blood and tear"
        },   
    ]
   
    };
 
    };


  render()
  {
    return (this.state.Game.map((obj)=>(
      <Cards
       id = {obj.id}
       Name = {obj.GameName}
       Map = {obj.GameDifficulty}
       difficulty = {obj.GameDifficulty}
       desctiption = {obj.GameDescription} 
       />
     )))
  }
}




  export default TableGrid;
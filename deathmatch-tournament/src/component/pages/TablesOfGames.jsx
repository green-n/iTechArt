import React from "react";
import  TopBar  from "../basicComponents/topBar/topBar";
import SimpleContainer from "../basicComponents/container/container";
import CoreTableContainer from "../basicComponents/mainTableContainer/mainTableContainer";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const TableOfGames =  () => (
     <div className='PageStructure'>
      
       <SimpleContainer></SimpleContainer>
       <CoreTableContainer></CoreTableContainer>

     </div>
 

)


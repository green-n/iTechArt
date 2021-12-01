import React from "react";
import  TopBar  from "../basicComponents/topBar/topBar";
import SimpleContainer from "../basicComponents/container/container";
import CoreTableContainer from "../basicComponents/mainTableContainer/mainTableContainer";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TableOfGames from "../basicComponents/tableOfGames/tableOfGames";



export const Games =  () => (
     <div className='PageStructure'>
      
       <SimpleContainer/>
       <TableOfGames/>

     </div>
 

)


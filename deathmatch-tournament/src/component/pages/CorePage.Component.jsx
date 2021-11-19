import React from "react";
import  TopBar  from "../basicComponents/topBarComponent/topBar.component";
import SimpleContainer from "../basicComponents/container.component/container.component";
import CoreTableContainer from "../basicComponents/mainTableContainer.component/mainTableContainer.component";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const CorePage =  () => (
     <div className='PageStructure'>
       <TopBar/>
       <SimpleContainer></SimpleContainer>
       <CoreTableContainer></CoreTableContainer>

     </div>
 

)


import React from "react";
import  TopBar  from "../component/basicComponents/topBar/topBar";
import SimpleContainer from "../component/basicComponents/container/container";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TableOfGames from "../component/basicComponents/tableOfGames/tableOfGames";



export const Games =  (props) => (
     <div >
       {/* {console.log(props.prop)} */}
      
       <SimpleContainer/>
       <TableOfGames obj = {props.prop} />

     </div>
 

)


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import  TableOfGames  from '../tableOfGames/tableOfGames';

export default function CoreTableContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="80vp">
        <TableOfGames />
      </Container>
    </React.Fragment>
  );
}
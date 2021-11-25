import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TableGrid from '../Grid/Grid';

export default function CoreTableContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="80vp">
        <TableGrid />
      </Container>
    </React.Fragment>
  );
}
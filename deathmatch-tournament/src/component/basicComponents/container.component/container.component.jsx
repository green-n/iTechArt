import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{textAlign:'left'}}>
          <Button variant="outlined" color="secondary">Outlined</Button>
      </Container>
    </React.Fragment>
  );
}

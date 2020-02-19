import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function PersistentDrawerLeft() {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Button
          color="primary"
          component={RouterLink} to="/">
          Go back home
        </Button>
      </Grid>
    </>
  );
}

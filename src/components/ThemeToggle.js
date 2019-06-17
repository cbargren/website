import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

export default ({ theme, toggleTheme }) => (
  <Grid
    component="label"
    container
    alignItems="center"
    justify="center"
    spacing={1}
  >
    <Grid item>
      <FontAwesomeIcon icon={faMoon} />
    </Grid>
    <Grid item>
      <Switch checked={theme === 'light'} onChange={toggleTheme} />
    </Grid>
    <Grid item>
      <FontAwesomeIcon icon={faSun} />
    </Grid>
  </Grid>
);

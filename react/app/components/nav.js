import React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';

const TabNav = ({ match, props }) => {
  console.log('match', match, props);
  return (
    <AppBar color="primary">
      <Toolbar>
        <Grid container justify="space-between" align="center">
          <Grid item xs={4}>
            <Link to="/">
              <Button>tfp First Dibs Quiz</Button>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Text>{!match.isExact ? 'Item View' : 'Products View'}</Text>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TabNav;

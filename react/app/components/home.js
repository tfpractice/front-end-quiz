import React from 'react';
import Grid from 'material-ui/Grid';
import { Route, Switch } from 'react-router-dom';

import List from './list';
import NavBar from './nav';
import Item from './itemRoute';

const style = { marginTop: '5rem' };
const Home = props => (
  <Grid container justify="center">
    <Grid item xs={11}>
      <Route component={NavBar} />
    </Grid>
    <Grid item xs={11} style={style}>
      <Switch>
        <Route path="/item/:itemID" component={Item} />
        <Route exact path="/" component={List} />
      </Switch>
    </Grid>
  </Grid>
);

export default Home;

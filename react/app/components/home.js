import React from 'react';
import Grid from 'material-ui/Grid';
import List from './list';

const Home = (props) => {
  console.log('props', props);

  return (
    <Grid container justify="center">
      <Grid item xs={11}>
        I am the home page
      </Grid>
      <Grid item xs={11}>
        <List />
      </Grid>
    </Grid>
  );
};

export default Home;

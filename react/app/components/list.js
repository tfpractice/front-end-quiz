import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import { connect } from 'react-redux';
import { ProdCard } from './products';

// import tileData from './tileData';

const mapState = ({ products: { data }, favorites }) => {
  console.log('products', data, favorites);
  return { products: data };
};
const Connected = connect(mapState);
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

const Styled = withStyles(styles);

const TitlebarGridList = ({ products, classes, ...props }) => {
  console.log('props', props);
  return (
    <Grid container justify="center">
      <Grid item xs={11}>
        Products
      </Grid>
      {products.map(prod => (
        <Grid item xs={6} md={3} key={prod.id}>
          <ProdCard product={prod} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Connected(Styled(TitlebarGridList));

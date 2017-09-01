import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import Text from 'material-ui/Typography';

import { Products } from '../../imports/store';
import { ProdCard } from './products';

// import tileData from './tileData';

const mapState = ({ products: { data }, favorites }) => {
  console.log('products', data, favorites);
  return { products: data };
};
const Connected = connect(mapState, Products.actions);
const styles = theme => ({});

const Styled = withStyles(styles);

const TitlebarGridList = ({ products, getProducts }) => {
  const loadMore = () =>
    getProducts({ start: products.length, limit: products.length + 8 });

  return (
    <Grid container justify="center" align="center">
      <Grid item xs={11}>
        Products
      </Grid>
      {products.map(prod => (
        <Grid item xs={6} md={3} key={prod.id}>
          <ProdCard product={prod} />
        </Grid>
      ))}
      <Grid item xs={6}>
        <Button color="primary" onClick={loadMore}>
          Load more Products
        </Button>
      </Grid>
    </Grid>
  );
};

export default Connected(Styled(TitlebarGridList));

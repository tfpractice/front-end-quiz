import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import BottomNavigation, {
  BottomNavigationButton as NavBtn,
} from 'material-ui/BottomNavigation';
import { compose, withHandlers, withState } from 'recompose';

import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import Text from 'material-ui/Typography';

import { Products } from '../../imports/store';
import { ProdCard } from './products';

const isFav = favs => prod => new Set(favs).has(prod.id);
const favFilt = favs => prods => prods.filter(isFav(favs));

const withFilter = compose(
  withState('favs', 'flip', false),
  withHandlers({ toggle: ({ flip }) => () => flip(x => !x) })
);
const mapState = ({ products: { data }, favorites }, { favs }) => {
  console.log('rest', favorites);
  return { products: favs ? favFilt(favorites)(data) : data };
};
const Connected = connect(mapState, Products.actions);

const styles = theme => ({
  bNav: { backgroundColor: theme.palette.primary[500] },
  btn: { backgroundColor: theme.palette.accent[500] },
  grid: { backgroundColor: 'rgba(0,150,136, 0.17)' },
});

const Styled = withStyles(styles);

const TitlebarGridList = ({ favs, toggle, products, classes, getProducts }) => {
  const loadMore = () =>
    getProducts({ start: products.length, limit: products.length + 8 });

  return (
    <Grid container justify="center" spacing={24}>
      <Grid item xs={11}>
        <Toolbar>
          <Button onClick={toggle}>{favs ? 'show all' : 'my favorites'}</Button>
        </Toolbar>
      </Grid>
      {products.map(prod => (
        <Grid item xs={6} md={3} key={prod.id} className={classes.grid}>
          <ProdCard product={prod} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <BottomNavigation value={0} className={classes.btn}>
          <NavBtn value={0} onClick={loadMore} label="Load More" />
        </BottomNavigation>
      </Grid>
    </Grid>
  );
};

export default withFilter(Connected(Styled(TitlebarGridList)));

import React from 'react';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Text from 'material-ui/Typography';
import Heart from 'material-ui-icons/Favorite';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationButton as NavBtn,
} from 'material-ui/BottomNavigation';
import { CardActions } from 'material-ui/Card';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import { Products } from '../../imports/store';
import { ProdCard } from './products';

const isFav = favs => prod => new Set(favs).has(prod.id);
const favFilt = favs => prods => prods.filter(isFav(favs));

const withFilter = compose(
  withState('favs', 'flip', false),
  withHandlers({ toggle: ({ flip }) => () => flip(x => !x) })
);

const mapState = ({ products: { data }, favorites }, { favs }) => ({ products: favs ? favFilt(favorites)(data) : data });
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
      {products.map(prod => (
        <Grid item xs={6} md={3} key={prod.id}>
          <ProdCard product={prod} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <BottomNavigation showLabels value className={classes.bNav}>
          <NavBtn
            label={
              <Button color="accent" component={Avatar} fab onClick={loadMore}>
                More
              </Button>
            }
          />
          <NavBtn
            label={
              <Button color="accent" component={Avatar} fab onClick={toggle}>
                {favs ? 'All' : <Heart />}
              </Button>
            }
          />
        </BottomNavigation>
      </Grid>
    </Grid>
  );
};

export default withFilter(Connected(Styled(TitlebarGridList)));

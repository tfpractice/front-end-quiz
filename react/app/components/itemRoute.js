import React from 'react';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Heart from 'material-ui-icons/Favorite';
import XHeart from 'material-ui-icons/HighlightOff';
import Chip from 'material-ui/Chip';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import { Favorites, Products } from '../../imports/store';

const matchesID = id => p => p.id === id;
const mapState = ({ products: { data }, favorites }, { match: { params }}) => {
  const product = data.find(matchesID(params.itemID));

  return { product, isFav: new Set(favorites).has(product.id) };
};
const Connected = connect(mapState, {
  ...Products.actions,
  ...Favorites.actions,
});

const styles = theme => ({
  item: { listStyle: 'none' },
  card: { backgroundColor: 'rgba(66,66,66,0.7)' },
  noPad: { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
  media: {
    minHeight: '15rem',
    backgroundColor: '#fff',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': { backgroundSize: 'contain' },
  },
});
const Styled = withStyles(styles);

const Item = ({
  product,
  classes,
  isFav,
  dropFavorites,
  addFavorites,
  ...props
}) => {
  console.log('product', props);
  const FavAction = () =>
    isFav ? dropFavorites(product.id) : addFavorites(product.id);

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.noPad}
        avatar={
          <Avatar>
            <IconButton onClick={FavAction}>
              {isFav ? (
                <XHeart color="rgba(255, 0, 255, 0.7)" />
              ) : (
                <Heart color="rgba(255, 0, 255, 0.7)" />
              )}
            </IconButton>
          </Avatar>
        }
        title={product.title}
      />

      <CardContent className={classes.noPad}>
        <Grid container justify="center" align="center" spacing={0}>
          <Grid item xs={11} sm={4}>
            <GridListTile className={classes.item}>
              <CardMedia
                className={classes.media}
                image={product.image}
                alt={product.title}
              />

              <GridListTileBar
                title={
                  <CardActions>
                    <Button>Buy</Button>
                    <Button>Bid</Button>
                  </CardActions>
                }
              />
            </GridListTile>
          </Grid>
          <Grid item xs={11} sm={8}>
            <Grid container justify="center" align="center">
              <Grid item xs={11}>
                <CardHeader subheader={product.description} />
              </Grid>
              <Grid item xs={11}>
                <CardHeader subheader={product.attributes} />
                {product.price && (
                  <CardActions>
                    {product.price.amounts.GBP && (
                      <Chip
                        avatar={<Avatar>{product.price.amounts.GBP[0]}</Avatar>}
                        label={product.price.amounts.GBP.slice(1)}
                      />
                    )}
                    {product.price.amounts.USD && (
                      <Chip
                        avatar={<Avatar>{product.price.amounts.USD[0]}</Avatar>}
                        label={product.price.amounts.USD.slice(1)}
                      />
                    )}
                    {product.price.amounts.EUR && (
                      <Chip
                        avatar={<Avatar>{product.price.amounts.EUR[0]}</Avatar>}
                        label={product.price.amounts.EUR.slice(1)}
                      />
                    )}
                  </CardActions>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Connected(Styled(Item));

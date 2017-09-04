import React from 'react';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Text from 'material-ui/Typography';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Heart from 'material-ui-icons/Favorite';
import XHeart from 'material-ui-icons/HighlightOFF';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import { Favorites } from '../../../imports/store';

const mapState = ({ favorites }, { product }) => ({ isFav: new Set(favorites).has(product.id) });
const Connected = connect(mapState, Favorites.actions);

const styles = theme => ({
  item: { listStyle: 'none' },
  card: {
    height: '100%',
    maxHeight: '100%',
    backgroundColor: 'rgba(66,66,66,0.8)',
  },
  media: {
    backgroundColor: '#fff',
    height: '20rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': { backgroundSize: 'contain' },
  },
});
const Styled = withStyles(styles);

const ProdCard = ({ product, isFav, dropFavorites, classes, addFavorites }) => {
  const FavAction = () =>
    isFav ? dropFavorites(product.id) : addFavorites(product.id);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Link to={`/item/${product.id}`}>
            <Avatar src={product.image} />
          </Link>
        }
        subheader={product.title}
      />
      <CardContent>
        <GridListTile className={classes.item}>
          <Link to={`/item/${product.id}`}>
            <CardMedia
              className={classes.media}
              image={product.image}
              alt={product.title}
            />
          </Link>

          <GridListTileBar
            title={<Text>{product.sold ? 'SOLD' : 'available'}</Text>}
            actionIcon={
              <IconButton onClick={FavAction}>
                {isFav ? (
                  <XHeart color="rgba(255, 0, 255, 0.7)" />
                ) : (
                  <Heart color="rgba(255, 0, 255, 0.7)" />
                )}
              </IconButton>
            }
          />
        </GridListTile>
      </CardContent>
      {product.price && (
        <CardActions>
          <Grid container justify="center">
            {product.price.amounts.GBP && (
              <Grid item xs={4}>
                <Chip
                  avatar={<Avatar>{product.price.amounts.GBP[0]}</Avatar>}
                  label={
                    <Text type="caption">
                      {product.price.amounts.GBP.slice(1)}
                    </Text>
                  }
                />
              </Grid>
            )}
            {product.price.amounts.USD && (
              <Grid item xs={4}>
                <Chip
                  avatar={<Avatar>{product.price.amounts.USD[0]}</Avatar>}
                  label={
                    <Text type="caption">
                      {product.price.amounts.USD.slice(1)}
                    </Text>
                  }
                />
              </Grid>
            )}
            {product.price.amounts.EUR && (
              <Grid item xs={4}>
                <Chip
                  avatar={<Avatar>{product.price.amounts.EUR[0]}</Avatar>}
                  label={
                    <Text type="caption">
                      {product.price.amounts.EUR.slice(1)}
                    </Text>
                  }
                />
              </Grid>
            )}
          </Grid>
        </CardActions>
      )}
    </Card>
  );
};

export default Connected(Styled(ProdCard));

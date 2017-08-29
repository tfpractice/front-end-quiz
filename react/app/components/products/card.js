import React from 'react';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Text from 'material-ui/Typography';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Heart from 'material-ui-icons/Favorite';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  item: { listStyle: 'none' },
  card: { minHeight: '100%' },
  media: {
    minHeight: '20rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': { backgroundSize: 'contain' },
  },
});
const Styled = withStyles(styles);
const ProdCard = ({ product, classes }) => {
  console.log('product', product);
  return (
    <Card className={classes.card}>
      <CardHeader

        // title={product.title}
        subheader={product.title}

        // subheader={`producy}`}
      />
      <CardContent>
        <GridListTile className={classes.item}>
          <CardMedia
            className={classes.media}
            image={product.image}
            alt={product.title}
          />

          <GridListTileBar
            title={`sold: ${product.sold}`}
            actionIcon={
              <IconButton>
                <Heart color="rgba(255, 0, 255, 0.54)" />
              </IconButton>
            }
          />
        </GridListTile>
      </CardContent>
      {product.price && (
        <CardActions>
          {product.price.amounts.GBP && (
            <Text>GBP: {product.price.amounts.GBP}</Text>
          )}
          {product.price.amounts.USD && (
            <Text>USD: {product.price.amounts.USD}</Text>
          )}
          {product.price.amounts.EUR && (
            <Text>EUR: {product.price.amounts.EUR}</Text>
          )}
        </CardActions>
      )}
    </Card>
  );
};

export default Styled(ProdCard);

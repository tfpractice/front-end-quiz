const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('../webpack/webpack.config');

const compiler = webpack(config);
const app = express();
const port = process.env.PORT || 3000;

// console.log('compiler', compiler);
console.log('(path.resolve()', path.resolve('/bundle'));
console.log(
  'compiler.options.output.publicPath,',
  compiler.options.output.publicPath
);

const options = {
  quiet: false,
  noInfo: false,
  stats: { colors: true },

  serverSideRender: true,
  publicPath: compiler.options.output.publicPath,
};

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(webpackDevMiddleware(compiler, options));

app.use(express.static(path.resolve('/bundle')));

app.use('/', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

const server = app.listen(port, () => {
  console.log('Example app listening at localhost:%s', port);
});

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack/webpack.config');

const compiler = webpack(config);
const app = express();
const port = process.env.PORT || 3000;

const options = {
    quiet: true,
    noInfo: true,
    stats: { colors: true },
    serverSideRender: true,
    publicPath: compiler.options.output.publicPath,
};
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(webpackDevMiddleware(compiler, options));

app.use(express.static(path.resolve('bundle')));

app.use('/', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

const server = app.listen(port, function() {
    console.log('Example app listening at localhost:%s', port);
});

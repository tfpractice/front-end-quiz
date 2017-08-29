const path = require('path');
const webpack = require('webpack');
console.log('__dirname', __dirname);
module.exports = {
    context: path.resolve(__dirname, '../app'),
    // context: path.resolve(__dirname, '../app'),
    // context: './',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        browse: './entries/browse.js',
        item: './entries/item.js',
    },
    output: {
        path: path.resolve(__dirname, '../bundle'),
        publicPath: '',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            { test: /\.json$/, loader: 'json-loader' },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //
            //     loaders: [
            //         'style-loader',
            //         'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            //         'postcss-loader',
            //     ],
            // },
        ],
    },
    resolve: {
        modules: ['node_modules'],
        // aliasFields: ['browser'],
        // packageAlias: 'browser',
        // root: path.resolve(__dirname, '/../app'),
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest'],
        // }),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin(),
        // new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
        }),
    ],
    node: {
        fs: 'empty',
        net: 'mock',
        tls: 'mock',
        dns: 'mock',
    },
    // postcss: function() {
    //     return [require('autoprefixer'), require('precss')];
    // },
    // stats: { colors: true },
};

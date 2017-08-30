const webpack = require('webpack');

const getPlugins = () => {
    const plugins = [
      new webpack.optimize.CommonsChunkPlugin({
        names: 'vendor',
        minChunks: (m) => /node_modules/.test(m.context)
      })
    ];
    return plugins;
  };

module.exports = {
    entry: './src/index.jsx',
    output:{
        path: __dirname + '/public/js',
        filename: '[name].bundle.js'
    },
    plugins: getPlugins(),
    module:{
        loaders:[
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /(\.css)$/,
                loaders: ['style-loader', 'css-loader']
            },
        ]
    }
}
var path = require('path');
var babiliPlugin = require('babili-webpack-plugin');

var plugins = [];

if( process.env.NODE_ENV === 'production' ) {
  
  plugins.push( new babiliPlugin );
}

module.exports = {
  entry: './app-src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: plugins
}
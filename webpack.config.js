const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
function resolve(filePath){
  return path.join(__dirname,filePath)
}
module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  devServer: {
    host: 'localhost',
    port: '1099',
    open: true,
    proxy: {}
  },
  output: {
    path: path.join(__dirname, 'dist')
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias:{
      "@": "./src"
    }
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./public/index.html')
    })
  ],
  stats: {
    errorDetails: true
  }
}
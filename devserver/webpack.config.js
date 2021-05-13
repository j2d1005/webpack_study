var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // styled-loader을 사용하지 않고 css를 별도 파일로 분리해주는 플러그인을 사용
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(), // css를 js에 번들링하지않고 별도의 파일로 따로 번들링해주는 플러그인
    new HtmlWebpackPlugin({
      // 빌드한 결과물을 포함한 index.html파일을 생성해줌
      template: 'index.html',
    }),
  ],
};
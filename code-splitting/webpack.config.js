var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // production , development, none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      //   // css-loader - css를 js파일 내부로 넣어주는 역할
      //   // style-loader - js내부의 style 내용을 html head태그 안에 넣어주는 역할
      //   // 순서 의존도 있음
      //   // 로더는 오른쪽 부터 읽는다 1.css-loader 2.styled-loader
      //   // scss 추가하면 css-loader 보다 더 빨리 호출이 되어야 함 ( 제일 오른쪽에 배치 )
      // }
      {
        test: /\.css$/,
        use: [
          // styled-loader을 사용하지 않고 css를 별도 파일로 분리해주는 플러그인을 사용
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin() // css를 js에 번들링하지않고 별도의 파일로 따로 번들링해주는 플러그인
  ],
}
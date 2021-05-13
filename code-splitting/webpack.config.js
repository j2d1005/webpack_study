var path = require('path');

module.exports = {
  mode: 'none', // production , development, none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // css-loader - css를 js파일 내부로 넣어주는 역할
        // style-loader - js내부의 style 내용을 html head태그 안에 넣어주는 역할
        // 순서 의존도 있음
        // 로더는 오른쪽 부터 읽는다 1.css-loader 2.styled-loader
        // scss 추가하면 css-loader 보다 더 빨리 호출이 되어야 함 ( 제일 오른쪽에 배치 )
      }
    ]
  },
}
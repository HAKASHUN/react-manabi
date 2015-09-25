# 012_redux

## 環境構築

はじめに、開発環境を整備しました。以下のコマンドで、起点となるローカルサーバーを立ち上げることを目指します。

```bash
npm start
```

### 使うライブラリの整理

- babel
- react
- redux
- webpack

### package.jsonの定義

```json
// package.json
"scripts": {
  "start": "node server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
"dependencies": {
  "redux": "^3.0.0",
  "react-redux": "^3.0.0"
},
"devDependencies": {
  "babel-core": "^5.8.25",
  "webpack": "^1.12.2",
  "webpack-dev-middleware": "^1.2.0",
  "webpack-hot-middleware": "^2.2.0",
  "babel-loader": "^5.3.2",
  "express": "^4.13.3"
}
```

### ディレクトリ構成

```bash
(root)
├── dist
│   └── app.js
├── node_modules
├── package.json
├── server.js
├── src
│   ├── index.html
│   └── index.js
└── webpack.config.js
```

### webpackの設定

webpackはあまり慣れていなかったけれど、先人の知恵を借りて意外に簡単に構築できた

#### webpack.config.jsの定義

```javascript
var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
```

#### server.jsの定義

`node server.js`でexpressを用いて、ローカルサーバーを実行しました。同時に、webpackのコンパイルや`watch`して再コンパイルする機能も作ります。

```javascript
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new require('express')();
var port = 3000;

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
```

#### 参考文献

[redux/examples/todomvc](https://github.com/rackt/redux/blob/master/examples/todomvc/webpack.config.js)
[boilerplate-webpack-react](https://github.com/tcoopman/boilerplate-webpack-react)


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

## エントリーポイントの実装

### <Provider> 

[<Provider store> | 公式ドキュメント](https://github.com/rackt/react-redux/blob/master/docs/api.md#provider-store)

- ルートのコンポーネント
- reduxで１元的に管理するstoreを持たせる
- 少し特殊な書き方で、アプリのコンポーネントを定義する
    - React0.13のバグ対応？

```javascript
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);
```

### storeの作成

```javascript
import { createStore } from 'redux';
import todoApp from './reducers/index';

let store = createStore(todoApp);
```

### reducerの作成

- combineReducersを使って、複数のreducerをつなげる
- ここでは必ず`['hoge', 'foo', 'bar']`を返すように実装した
- `(previousState, action) => newState`の形をもつただのfunctionがreducerであり、あまり複雑なものではない

```javascript
import { combineReducers } from 'redux';

function todos(state = ['hoge', 'foo', 'bar'], action) {
  return state;
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
```

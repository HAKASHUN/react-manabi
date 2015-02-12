## 002-flux-short

### setup package.json

#### devDependencies

- `gulp`
- `gulp-browserify`
- `gulp-concat`
- `react`
- `reactify`


#### browserify

> node.jsと同じように (npm、requireなどを使って) モジュール化されたフロントエンドJSが書けるツール。便利。
> http://qiita.com/seanchas_t/items/96fbb63e5fe36f94a42e

> Node.js的な var myModule = require('myModule')式の記述が、ブラウザのスクリプトでも使えるようになって、ついでに1ファイルにまとめるのもやってくれるツールです。ポストRequireJSとして期待されています。
> http://qiita.com/cognitom/items/4c63969b5085c90639d4

#### reactify

https://github.com/andreypopp/reactify

### entry point

``` bash
root/src
├── index.html
└── js
    └── main.js
```

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
  <div id="main" class="container"></div>
  <!-- entry point -->
  <script src="js/main.js"></script>
</body>
</html>
```
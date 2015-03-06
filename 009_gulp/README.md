## gulp

### 問題

- `browserify`で、コンパイルエラーが面倒
- 

### 改善

- `gulp-browserify`は使わない

> http://qiita.com/mizchi/items/10a8e2b3e6c2c3235e61
> gulp-browserifyはgulp公式的には規約違反でBlacklistedらしい。

- `watchify`を使う

  `watchify`を使って、`js`を監視し、`rebundle`処理を行う

- `watchify`に登録する`js`は1枚だが、起点となる所が登録されていればOK

- `css`と`html`などの`watch`は、通常の`gulp.watch`を使う



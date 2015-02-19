## 007_flux-env

### Rule

#### <name>.react.js

reactComponentのファイル名の命名規則は`<name>.react.js`

#### /** @jsx React.DOM */

http://facebook.github.io/react/blog/2014/10/28/react-v0.12.html

> The /** @jsx React.DOM */ header is no longer required when writing JSX syntax
0.12からいらなくなった

### Tips

#### フォルダを消すときの処理
- https://github.com/kriasoft/react-starter-kit/blob/master/gulpfile.js#L46

#### gulpコマンドからオプションを受け取る
- https://github.com/kriasoft/react-starter-kit/blob/master/gulpfile.js#L20

#### react developer tools

- https://github.com/facebook/react-devtools

#### example
- https://github.com/justinwoo/react-flux-example/tree/master

#### styleguide

- https://reactjsnews.com/react-style-guide-patterns-i-like/
- http://web-design-weekly.com/2015/01/29/opinionated-guide-react-js-best-practices-conventions/
- https://github.com/Khan/style-guides/blob/master/style/react.md
- http://facebook.github.io/react/docs/getting-started.html
- http://blog.whn.se/post/69621609605/writing-good-react-components

#### links

- http://madebymany.com/blog/beyond-the-to-do-app-writing-complex-applications-using-flux-react-js
- http://g00glen00b.be/reactjs-gulp-browserify/

### Code Quality

#### JSXHint
- https://github.com/STRML/JSXHint/

#### JSXCS
- https://github.com/orktes/node-jsxcs

### EditorConfig

```bash
# http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0
```

### Watchify

- https://github.com/substack/watchify

### Test

- https://github.com/Dakuan/gulp-jest

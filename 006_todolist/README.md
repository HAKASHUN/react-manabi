## Todo List

### Source Code Structure

```bash
root
├── index.html
└── js
    ├── actions
    ├── app.js
    ├── components
    ├── constants
    ├── dispatchers
    └── stores
```

### setup glup tasks

```javascript
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('browserify', function() {
    gulp.src('js/app.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('default',['browserify']);

gulp.task('watch', function() {
    gulp.watch('js/**/*.*', ['default']);
});
```

```bash
root
├── gulpfile.js
├── index.html
├── js
│   ├── actions
│   ├── app.js
│   ├── bundle.js // <= generate compiled file
│   ├── components
│   ├── constants
│   ├── dispatchers
│   └── stores
└── package.json
```

### dispatcher

facebookのfluxサンプルの遍歴を見るとオススメ実装が変わったことがわかる

https://github.com/facebook/flux/commit/ec8bba6893da01dc0f4e7a136d47acfd2cea3ac4

```javascirpt
var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();

```

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
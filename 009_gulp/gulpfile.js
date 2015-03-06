/** Regular npm dependendencies */
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');

/** Gulp dependencies */
var gutil = require('gulp-util');

/** Grab-bag of build configuration. */
var config = {
    sourceFile: './js/app.js',
    destFolder: './js/',
    destFileName: 'bundle.js'
};

// Scripts
gulp.task('scripts', function () {
    var bundler = watchify(browserify({
        entries: [config.sourceFile],
        insertGlobals: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));
    bundler.transform(reactify);

    bundler.on('update', rebundle);

    function rebundle() {
      console.log('Updating!');
        return bundler.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(config.destFileName))
            .pipe(gulp.dest(config.destFolder));
    }

    return rebundle();

});

gulp.task('watch', ['scripts'])
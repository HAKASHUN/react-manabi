/** Regular npm dependendencies */
var argv = require('minimist')(process.argv.slice(2));
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');

/** Gulp dependencies */
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');

/** Grab-bag of build configuration. */
var config = {
    sourceFile: './js/app.js',
    destFolder: './dist/',
    destFileName: 'bundle.js'
};

/** Arguments */
var LR_PORT = argv.port || argv.p || 8080;

gulp.task('server', function() {
    return gulp.src('.')
        .pipe(webserver({
            livereload: false,
            port: LR_PORT,
            directoryListing: true
        }));
});

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
        return bundler.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(config.destFileName))
            .pipe(gulp.dest(config.destFolder));
    }

    return rebundle();

});

gulp.task('watch', ['scripts']);
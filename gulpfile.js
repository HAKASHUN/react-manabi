/** Regular npm dependendencies */
var gulp = require('gulp');
var argv = require('minimist')(process.argv.slice(2));

/** Gulp dependencies */
var webserver = require('gulp-webserver');

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
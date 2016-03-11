var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'test',
        livereload: true
    });
});

gulp.task('scss', function(){
    gulp.src([
            'src/_variables.scss',
            'src/_functions.scss',
            'src/_override.scss',
            'src/_breakpoint.scss',
            'src/_typography.scss',
            'src/_utils.scss',
            'src/_grid.scss',
            'src/_jumbotron.scss',
            'src/_bar.scss'])
        .pipe(concat('_zebrass.scss'))
        .pipe(gulp.dest('test/'))
        .pipe(connect.reload());
});

gulp.task('html', function(){
    gulp.src(['test/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('default.css'))
        .pipe(gulp.dest('test/'))
        .pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch(['src/**/*.scss'], ['scss']);
    gulp.watch(['test/**/*'], ['html']);
});

gulp.task('test', ['connect', 'scss', 'html', 'watch']);






gulp.task('dist', function(){
    gulp.src([
            'src/_variables.scss',
            'src/_functions.scss',
            'src/_override.scss',
            'src/_breakpoint.scss',
            'src/_typography.scss',
            'src/_utils.scss',
            'src/_grid.scss',
            'src/_jumbotron.scss',
            'src/_bar.scss'])
        .pipe(concat('_zebrass.scss'))
        .pipe(gulp.dest('dist/'));
});
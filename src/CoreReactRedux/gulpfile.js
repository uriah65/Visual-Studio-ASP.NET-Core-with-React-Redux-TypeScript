/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    del = require('del');


var paths = {
    externalJs: [
        'node_modules/react-dom/dist/react-dom.js',
        'node_modules/react/dist/react.js',
        'node_modules/redux/dist/redux.js',
        'node_modules/react-redux/dist/react-redux.js'
    ]};


gulp.task('clean', function () {
    return del(['wwwroot/js/**/*', 'wwwroot/css/**/*']);
});


gulp.task('default', function () {
    gulp.src(paths.externalJs).pipe(gulp.dest('wwwroot/js'));
});
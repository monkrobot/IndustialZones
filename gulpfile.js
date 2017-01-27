"use strict";


var gulp = require('gulp'), // Сообственно Gulp JS
    jade = require('gulp-jade'), // Плагин для Jade
    stylus = require('gulp-stylus'), // Плагин для Stylus
//myth = require('gulp-myth'), // Плагин для Myth - http://www.myth.io/
    csso = require('gulp-csso'), // Минификация CSS
    imagemin = require('gulp-imagemin'), // Минификация изображений
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов


    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');


//Collect css from Stylus
gulp.task('stylus', function() {
    gulp.src('src/stylus/*.styl')
        .pipe(stylus())
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
        .pipe(gulp.dest('www/css'));
});


//Reload css
gulp.task('css', function() {
    gulp.src('www/css/*.css')
        .pipe(connect.reload()); // reload page
});


//Collect html from Jade
gulp.task('jade', function() {
    gulp.src('src/jade/**/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
        .pipe(gulp.dest('www/html'));

});

//Reload html
gulp.task('html', function() {
    gulp.src('www/html/*.html')
        .pipe(connect.reload()); // reload page
});

//Copy and minimaze images
gulp.task('images', function() {
    gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('www/images'));
});



//Watcher
gulp.task('watch', function() {

    gulp.watch('src/stylus/**/*.styl', ['stylus']);
    gulp.watch('src/jade/**/**/*.jade', ['jade']);
    gulp.watch('www/html/*.html', ['html']);
    gulp.watch('www/css/*.css', ['css']);
    gulp.watch('src/images/**/*', ['images'])

});

//Run server
gulp.task('connect', function() {
    connect.server({
        root: 'www',
        port: 3500,
        livereload: true
    });
});




//default tasks
gulp.task('default', ['connect', 'jade', 'html','stylus', 'css', 'images', 'watch']);
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

function comprimeImagens(){
    return gulp.src('./source/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imagens/'))
}

function comprimeJavaScript(){
    return gulp.src('./source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
}

exports.watch = function(){
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/js/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/imagens/*', { ignoreInitial:false }, gulp.series(comprimeImagens));
};
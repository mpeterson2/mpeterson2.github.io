var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var server = require('gulp-server-livereload');;

gulp.task('default', ['build']);

gulp.task('build', ['less']);

gulp.task('dev', ['build', 'less-watch', 'serve']);

gulp.task('serve', function() {
  return gulp.src('./')
    .pipe(server());
});

gulp.task('less', function() {
return gulp.src('./style/style.less')
    .pipe(less().on('error', err))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./style'));
});

gulp.task('less-watch', function() {
  return gulp.watch('./style/**/*.less', ['less']);
});

function err(e) {
  console.log(e);
  this.emit('end');
}
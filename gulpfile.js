const gulp       = require('gulp');
const $          = require('gulp-load-plugins')();

gulp.task('styles', function() {
  return $.rubySass('app/styles.scss', {
      style: 'expanded',
      precision: 10
    })
    .pipe(gulp.dest('dist'))
});

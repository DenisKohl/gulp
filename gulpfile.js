var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src('src/index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('out'));
});


gulp.task('minify', function() {
	gutil.log('Gulp is running!')
	gulp.src('./out/*.js') 
		.pipe(uglify())
		.pipe(gulp.dest('./dest/'));
});

gulp.task('jshint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', function(){
	gutil.log('Starting ...');
	gulp.src('src/index.js')
	.pipe(babel({
            presets: ['es2015']
        }))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/'));
       
});



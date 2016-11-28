var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./public/stylesheets/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./dist/assert/stylesheets'));
})

gulp.task('watch', function () {
	gulp.watch('./public/stylesheets/**/*.scss', ['sass']);
})

gulp.task('default', ['watch']);

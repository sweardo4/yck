var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./src/stylesheets/**/*.scss')
		.pipe(sass({
			// outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/stylesheets'));
})

gulp.task('watch', function () {
	gulp.watch('./src/stylesheets/*.scss', ['sass']);
})

gulp.task('default', ['watch']);

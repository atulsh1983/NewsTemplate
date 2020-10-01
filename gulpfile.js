const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile sass into css
function style() {
	// where is my sass file
	return gulp.src('./scss/*.scss')
		// pass that file through sass compiler
		.pipe(sass().on('error', sass.logError))
		// where do I save the compilered css?
		.pipe(gulp.dest('./src/assets/css'))
		//stream changes to all browser
		.pipe(browserSync.stream())
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './src'
		}
	});
	gulp.watch('scss/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;


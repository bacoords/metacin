var gulp = require('gulp');
var	gutil = require('gulp-util');
var	sass = require('gulp-sass');
var	imagemin = require('gulp-imagemin');
var	autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('default', ['watch']);


gulp.task('css', function(){
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'));
});


gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('vendorjs', function() {
  return gulp.src([
    'vendor/vue.2.js',
    'vendor/vue-router.2.js',
    'vendor/vuex.2.js',
    'vendor/parallax.min.js',
    'vendor/particles.js',
    'vendor/modernizr.custom.js',
    'vendor/TweenMax.min.js',
    'vendor/TimelineMax.min.js',
    'vendor/ScrollMagic.min.js',
    'vendor/scrollsnap-polyfill.bundled.js',
    'vendor/animation.gsap.js',
    'vendor/gsap-then.browser.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function(){
	return gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
	gulp.watch('src/scss/**/*.scss', ['css']);
	gulp.watch('src/js/*.js', ['js']);
//	gulp.watch('src/img/*', ['images']);
});
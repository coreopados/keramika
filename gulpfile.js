const	gulp = require('gulp'),
		server = require('gulp-server-livereload'),
		less = require('gulp-less'),
		autoprefixer = require('gulp-autoprefixer');
		imagemin = require('gulp-imagemin');
		npmDist = require('gulp-npm-dist');

 
gulp.task('copy:libs', function() {
  gulp.src(npmDist(), {base:'./node_modules'})
    .pipe(gulp.dest('dist/node_modules'));
}); 
gulp.task('build', function () {
	let fontsbuild = gulp.src(['fonts/**'])
    	.pipe(gulp.dest('dist/fonts'));
	let jsbuild = gulp.src(['js/**'])
	 	.pipe(gulp.dest('dist/js'));
	let HTMLbuild = gulp.src('index.html')
	 	.pipe(gulp.dest('dist'));
	let slickBuild = gulp.src(['slick/**'])
		.pipe(gulp.dest('dist/slick'))
});
gulp.task('connect', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
	   defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
})
//less
gulp.task('less', function() {
	 gulp.src('style.less')
	.pipe(less('style.css'))
	.pipe(autoprefixer({
            browsers: ['last 20 versions','>1%','ie 9' ],
        }))
	.pipe(gulp.dest('dist/style'));

});
gulp.task('imageMin', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);
// default
gulp.task('default', ['less', 'connect','imageMin', 'copy:libs', 'build'] )
'use strict';
 
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import config from './configVars';

const $ = gulpLoadPlugins();

gulp.task('eslint', function() {
    return gulp.src([`${config().PATHS.DEV}/**/*.js`])
        .pipe($.eslint({
            'extends': './.eslintrc'
        }))
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('clean', () => {
    return gulp.src([config().PATHS.BUILD, config().PATHS.DIST, config().PATHS.JSDOC], { read: false })
        .pipe($.clean({ force: true }));
});

gulp.task('core-compile', () => {
    return gulp.src(`${config().PATHS.DEV}/core/main.js`)
    	.pipe($.inject(gulp.src([`${config().PATHS.DEV}/core/modules/*.js`]), {
    		starttag: '/* inject: modules */',
    		endtag: '/* endinject */',
    		transform: function(filePath, file){
    			return file.contents.toString('utf8')
    		}
    	}))
    	.pipe($.sourcemaps.init())
    	.pipe($.babel())
    	.pipe($.concat('hui-core.js'))
    	.pipe($.sourcemaps.write('.'))
    	.pipe($.jsbeautifier())
    	.pipe($.header(config().HEADER))
    	.pipe(gulp.dest(config().PATHS.BUILD));
});

gulp.task('sub-compile', () => {
    return gulp.src([`${PATHS.DEV}/**/*.js`])
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.concat('smg.global.layermanager.js'))
        .pipe($.sourcemaps.write('.'))        
        .pipe($.jsbeautifier())
        .pipe($.header(config().HEADER))
        .pipe(gulp.dest(PATHS.BUILD));
});

gulp.task('core-uglify', () => {
    gulp.src(`${config().PATHS.BUILD}/*.js`)
    	.pipe(gulp.dest(config().PATHS.DIST));
    gulp.src(`${config().PATHS.BUILD}/*.js`)
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.uglify())
        .pipe(gulp.dest(config().PATHS.DIST));
});

gulp.task('default', () => {
	runSequence('eslint', 'clean', 'core-compile', 'core-uglify');
	// , 'jsdoc'
});
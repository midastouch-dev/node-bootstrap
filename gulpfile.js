const gulp = require('gulp');
const mocha = require('gulp-mocha');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const webpack = require('webpack-stream');
const runSequence = require('run-sequence');

const testFiles = ['./test/**/*.test.js'];

// Gulp Events
gulp.on('stop', () => {
  process.exit(0);
});

gulp.on('err', (err) => {
  console.error(err);
  process.exit(1);
});

// Gulp Commands
gulp.task('default', (done) => {
  runSequence('compile', done);
  throw Error('bluh');
});

gulp.task('compile', (done) => {
  runSequence('clean', 'build', 'test', done);
});

gulp.task('clean', () => {
  return gulp.src(['dist'], { read: false })
    .pipe(clean());
});

gulp.task('build', (done) => {
  runSequence(
    'clean',
    'js',
    'css',
    'html',
    'favicon',
    'server',
    done
  );
});

gulp.task('test', () => {
  return gulp.src(testFiles, { read: false })
    .pipe(mocha());
});

// Build Tasks
gulp.task('js', () => {
  return gulp.src('./src/www/scripts/**/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/public/scripts/'));
});

gulp.task('css', () => {
  return gulp.src('./src/www/styles/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/public/styles/'));
});

gulp.task('html', () => {
  return gulp.src('src/www/*.html')
    .pipe(gulp.dest('./dist/public/'));
});

gulp.task('favicon', () => {
  return gulp.src('src/www/*.ico')
    .pipe(gulp.dest('./dist/public/'));
});

gulp.task('server', () => {
  return gulp.src('src/*.js')
    .pipe(gulp.dest('./dist/'));
});

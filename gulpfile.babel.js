'use strict';

import gulp from 'gulp';
import lesshint from 'gulp-lesshint';
import watch from 'gulp-watch';
import eslint from 'gulp-eslint';
import autoprefixer from 'gulp-autoprefixer';
import less from 'gulp-less';
import cssmin from 'gulp-cssmin';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import runSequence from 'run-sequence';
import Karma from 'karma';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import gutil from 'gutil';
import del from 'del';
import fs from 'fs';

const dirs = {
  src: 'src',
  dest: 'build'
};

const paths = {
  src: {
    less: [
      `${dirs.src}/less/*.less`,
      `${dirs.src}/less/**/*.less`
    ],
    js: [
      `${dirs.src}/js/*.js`,
      `${dirs.src}/js/**/*.js`
    ],
    html: [
      `${dirs.src}/html/*.html`,
      `${dirs.src}/html/**/*.html`
    ],
    fonts: [
      `${dirs.src}/fonts/*`,
      `${dirs.src}/fonts/**/*`
    ],
    images: [
      `${dirs.src}/images/*`,
      `${dirs.src}/images/**/*`
    ]
  },
  dest: {
    less: `${dirs.dest}/styles/`,
    js: `${dirs.dest}/scripts/`,
    html: `${dirs.dest}/`,
    fonts: `${dirs.dest}/fonts/`,
    images: `${dirs.dest}/images/`
  }
};


gulp.task('lint:less', function lintLess() {
  //return gulp.src(paths.src.less)
  //  .pipe(lesshint())
  //  .pipe(lesshint.reporter(''))
  //;
});

gulp.task('build:fonts', function() {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dest.fonts));
});

gulp.task('build:images', function() {
  return gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.dest.images));
});

gulp.task('build:css', function buildCss() {
  return gulp.src(paths.src.less)
    .pipe(less())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest(paths.dest.less))
  ;
});

gulp.task('lint:js', function lintJs() {
  return gulp.src(paths.src.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  ;
});

gulp.task('build:js', function buildJs() {
  return gulp.src(paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(concat(`${dirs.dest}/scripts/app.js`))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest.js))
  ;
});

gulp.task('test:js', function testJs(done) {
  const karma = new Karma.Server({
    configFile: `${__dirname}/karma.conf.js`,
    singleRun: true,
  }, function karmaServer(error) {
    //if (0 !== error) {
    //  gutil.log(`Karma failed with exit code ${String(error)}`);
    //  process.exit(error);
    //}
    
    return done();
  });
  
  karma.start();
});

gulp.task('build:html', function minifyHtml() {
  return gulp.src(paths.src.html)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(paths.dest.html))
  ;
});

gulp.task('create:dest', function createDest(done) {
  if (!fs.existsSync(dirs.dest)) {
    fs.mkdirSync(dirs.dest);
  }
  
  return done();
});

gulp.task('clean:dest', function cleanDest(done) {
  if (fs.existsSync(dirs.dest)) {
    del(dirs.dest)
  }
  
  return done();
});

gulp.task('watch:js', function watchJs() {
  gutil.log('Watching JavaScript files for changes...');
  gulp.watch(paths.src.js, ['lint:js', 'test:js', 'build:js']);
});

gulp.task('watch:less', function watchLess() {
  gutil.log('Watching LESS files for changes...');
  gulp.watch(paths.src.less, ['lint:less', 'build:css']);
});

gulp.task('watch:html', function watchHtml() {
  gutil.log('Watching HTML files for changes...');
  gulp.watch(paths.src.html, ['build:html'])
});


gulp.task('build', function build(done) {
  runSequence(
    [
      'lint:js',
      'lint:less'
    ],
    'test:js',
    'clean:dest',
    'create:dest',
    [
      'build:html',
      'build:css',
      'build:js',
      'build:fonts',
      'build:images'
    ],
    [
      'watch:js',
      'watch:less',
      'watch:html'
    ],
    
    function callback() {
      return done();
    }
  );
});

gulp.task('default', function gulpDefault() {
  gutil.log('Run gulp build');
});

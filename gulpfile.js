const gulp = require('gulp');
// For styles.
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
// For include parts of files.
const fileInclude = require('gulp-file-include');
// For errors.
const notify = require('gulp-notify');
// For view.
const del = require('del');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
//For svg sprite
const svgSprite = require('gulp-svg-sprite');

const root = `./app`;

const config = {
  scss:{
    dir: `${root}/scss/**/*.scss`,
    src: `${root}/scss/**/*.scss`,
    dist: `${root}/css`
  },
  html:{
    dir: `${root}/dev_html/**/*.html`,
    src: `${root}/dev_html/*.html`,
    dist: `${root}/html`
  },
  svg:{
    src: `${root}/img/svg-icons/*.svg`,
    dist: `${root}/img/sprite-svg`
  },

  js: `${root}/js/**/*.js`
};

//HTML & fileInclude
const html = () => {
  return gulp.src(config.html.src)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(config.html.dist))
    .pipe(browserSync.stream())
}
exports.html = html;

//SCSS
const scss = () => {
  const plugins = [
    autoprefixer({ grid: "autoplace" }),
    cssnano()
  ];
  return (
    gulp
      .src(config.scss.src)
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", notify.onError()))
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest(config.scss.dist))
      .pipe(browserSync.stream())
  );
}
exports.scss = scss;

//Clean project
const clean = () => {
  return del([config.html.dist, config.scss.dist, config.svg.dist], { force: true });
}
exports.clean = clean;

// Generate svg sprite
const sprite = () => {
  return gulp.src(config.svg.src)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg",
        }
      },
    }
    ))
    .pipe(gulp.dest(config.svg.dist));
}
exports.sprite = sprite;

// Server.
const serverConfig = () => {
  browserSync.init({
    server: {
      baseDir: root,
      directory: true
    },
    startPath: "html/index.html",
    notify: false

  });
};
exports.serverConfig = serverConfig;

// Watcher
const watch = () => {
  gulp.watch(config.html.dir, gulp.series('html'));
  gulp.watch(config.scss.src, gulp.series('scss'));
  gulp.watch(config.js).on("change", reload);
}
exports.watch = watch;

exports.default = gulp.series(
  clean,
  sprite,
  gulp.parallel(html, scss),
  gulp.parallel(watch, serverConfig)
)


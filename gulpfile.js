const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");

// Compile Nunjucks templates
gulp.task("nunjucks", function () {
  return gulp
    .src("src/templates/*.njk")
    .pipe(nunjucksRender({
      path: ["src/templates/"]
    }))
    .pipe(gulp.dest("dist"));
});

// Watch files
gulp.task("watch", function () {
  gulp.watch("src/templates/**/*.njk", gulp.series("nunjucks"));
});

gulp.task("default", gulp.series("nunjucks", "watch"));

const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass')) //sass -> css
const minifyCss=require('gulp-minify-css');

gulp.task('sass',async function(){
    return gulp.src('packages/css/**/*scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
})
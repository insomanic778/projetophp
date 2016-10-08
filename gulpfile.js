var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


// PARTE QUE COMPILAR O CSS
gulp.task('sass', function () {
  return gulp.src('source/sass/*.scss')
     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// PARTE EM QUE JOGAR O JS DENTEO DE BOWER PARA A PASTA DIST
gulp.task('build-js', function(){
	return gulp.src([
		'source/bower_components/jquery/dist/jquery.min.js',
    'source/bower_components/parallax.js/parallax.min.js',
    'source/bower_components/jquery.stellar/src/jquery.stellar.js',
	])
  .pipe(uglify())
	.pipe(gulp.dest('dist/js/libs'))
});

// AQUI É JS QUE VOCE IRA FAZER!
gulp.task('minificar-js', function () {
  return gulp.src('source/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});


// PARTE EM QUE O GULP FICAR "ESCUTANDO" O ARQUIVO QUE VOCE ESTÁ MEXENDO, PORQUE AI É SO VOCE SALVAR QUE ELE COMPILAR AUTOMATICO
gulp.task('watch', function () {
  gulp.watch('source/sass/**/*.scss', ['sass']);
  gulp.watch('source/js/*.js',     ['minificar-js']);
});



gulp.task('default', ['build-js','minificar-js','sass','watch'], function(){});

// Importar os pacotes do Gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa de compilação do SASS
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // caminho para os arquivos SASS
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // diretório de destino para os arquivos CSS compilados
});

// Tarefa de compressão de imagens
gulp.task('imagemin', function() {
  return gulp.src('src/images/**/*') // caminho para os arquivos de imagem
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images')); // diretório de destino para as imagens comprimidas
});

// Tarefa de compressão de código JavaScript
gulp.task('uglify', function() {
  return gulp.src('src/js/**/*.js') // caminho para os arquivos JavaScript
    .pipe(uglify())
    .pipe(gulp.dest('dist/js')); // diretório de destino para os arquivos JavaScript comprimidos
});

// Tarefa padrão do Gulp (executa todas as tarefas)
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));

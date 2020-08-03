const path = require('path');
const gulp = require('gulp');
const exec = require('child_process').exec;

const projects = ['common'];

const getProject = key => projects.find(el => el === key);

const rootFolder = path.join(__dirname);
const distFolder = path.join(rootFolder, 'dist/fis');

const projectFolder = path.join(rootFolder, `projects/fis`);

const distProjectFolder = key => path.join(distFolder, getProject(key));
const getProjectFolder = key => path.join(projectFolder, getProject(key));

const stylesProjectFolder = key =>
  path.join(getProjectFolder(key), 'src/styles/*.scss');
const distStylesProjectFolder = key =>
  path.join(distProjectFolder(key), 'styles');

gulp.task('styles', function() {
  return gulp
    .src(`${stylesProjectFolder('common')}`)
    .pipe(gulp.dest(`${distStylesProjectFolder('common')}`));
});

gulp.task('build', function(cb) {
  exec(
    'node ./node_modules/@angular/cli/bin/ng build @fis/common',
    {
      maxBuffer: 1024 * 1000
    },
    function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    }
  );
});
gulp.task('publish', function(cb) {
  exec(
    'npm publish ./dist/fis/common',
    {
      maxBuffer: 1024 * 1000
    },
    function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    }
  );
});

gulp.task('build-publish', gulp.series('build', 'styles', 'publish'));

gulp.task('default', gulp.series('build-publish'));

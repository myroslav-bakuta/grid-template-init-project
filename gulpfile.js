require('../../gulp/gulp-init.js');

const {sync, syncInit} = require('../../gulp/tasks/sync.js');
const {comb} = require('../../gulp/tasks/comb.js');
const {scss, scssDC, scssDev} = require('../../gulp/tasks/scss.js');
const {createStructure} = require('../../gulp/tasks/create-structure.js');

function watchFiles() {
  syncInit();
  $.gulp.watch($.PATH.scssFiles, $.gulp.series(scssDC));
  $.gulp.watch($.PATH.lessFiles, sync);
  $.gulp.watch($.PATH.jsFiles, sync);
  $.gulp.watch($.PATH.cssFiles, sync);
  $.gulp.watch($.PATH.htmlFiles, sync);
}

$.gulp.task('cs', createStructure);
$.gulp.task('scss', scssDC);
$.gulp.task('combScss', comb);
$.gulp.task('scssDev', scssDev);
$.gulp.task('watch', watchFiles);

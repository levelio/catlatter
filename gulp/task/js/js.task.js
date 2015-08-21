var del = require('del');

module.exports = function(gulp, config, $, args){

    gulp.task('js',['js-watch']);

    gulp.task('js-build',['js-clear'] ,function(){
      var buildDate = $.util.date(Date.now(), 'isoDateTime');
      var buildBanner = '/*! build: ' + buildDate + ' */\n';
      gulp.src(config.js, {base: './src/'})
          .pipe($.header(buildBanner))
          .pipe(gulp.dest(config.dist))
          .pipe($.uglify())
          .pipe($.rename({
            suffix: '.min'
          }))
          .pipe(gulp.dest(config.dist))
    })

    gulp.task('js-watch',function(){
      var jsWatch = gulp.watch(config.js,['js-build']);
      jsWatch.on('change',function(event){
        console.log('文件 ' + event.path + ' 发生变化 , build 成功!' );
      });
    });

    gulp.task('js-clear', function(){
      var path = config.js.replace(config.src,config.dist);
        del([path], function(err, paths){
          console.log('删除:\n', paths.join('\n'));
        });
    })
}

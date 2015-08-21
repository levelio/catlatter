var del = require('del');

module.exports = function(gulp, config, $, args){

  gulp.task('css',['css-watch']);

  gulp.task('css-build',['css-clear'],function(){
    var buildDate = $.util.date(Date.now(), 'isoDateTime');
    var buildBanner = '/*! build: ' + buildDate + ' */\n';
        gulp.src(config.css,{base:'./src/'})
            .pipe($.header(buildBanner))
            .pipe(gulp.dest(config.dist))
            .pipe($.minify_css({compatibility: 'ie8'}))
            .pipe($.rename({
              suffix: '.min'
            }))
            .pipe(gulp.dest(config.dist))
  });

  gulp.task('css-watch', function(){
    var cssWath = gulp.watch(config.css,['css-build']);
    cssWath.on('change', function(event){
      console.log('文件 ' + event.path + ' 发生变化 , build 成功!' );
    })
  })

  gulp.task('css-clear', function(){
    var path = config.css.replace(config.src,config.dist);
      del([path], function(err, paths){
        console.log('删除:\n', paths.join('\n'));
      });
  })
}

var Est = require('less-plugin-est'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    del = require('del');

var autoprefix = new LessAutoprefix({browsers:['last 5 versions']});

module.exports = function(gulp, config, $, args){

  gulp.task('less',['less-watch']);

  gulp.task('less-build',['less-clear'],function(){
    var buildDate = $.util.date(Date.now(), 'isoDateTime');
    var buildBanner = '/*! build: ' + buildDate + ' */\n';
    gulp.src(config.less,{base: './src/'})
        .pipe($.header(buildBanner))
        .pipe($.plumber())
        .pipe($.less({plugins:[autoprefix, new Est()]}))
        .pipe(gulp.dest(config.dist))
        .pipe($.minify_css())
        .pipe($.rename({
          extname:'.css',
          suffix: '.min'
        }))
        .pipe(gulp.dest(config.dist))
  });

  gulp.task('less-watch',function(){
    var lessWatch = gulp.watch(config.less,['less-build']);
    lessWatch.on('change',function(event){
      console.log('文件 ' + event.path + ' 发生变化 , build 成功!' );
    });
  });

  gulp.task('less-clear', function(){
    var path = config.less.replace(config.src,config.dist);
      del([path], function(err, paths){
        console.log('删除:\n', paths.join('\n'));
      });
  })
}

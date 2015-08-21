module.exports = function(){

  var src = '../src/';
  var dist = '../dist/';
  var config = {
      src: src,
      dist: dist,
      js: src + 'js/**/*.js',
      css: src + 'style/**/*.css',
      less: src + 'style/**/*.less',
      fn: {
          
      }
  }

  return config;
}

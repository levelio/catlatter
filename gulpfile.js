var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
      lazy: true,
      rename: {
        'gulp-minify-css': 'minify_css',
        'gulp-task-listing': 'task_listing'
      }
    }),
    args = require('yargs').argv,
    fs = require('fs');

var config = require("./gulp.config")();

var taskfolder = fs.readdirSync(config.taskDir);

taskfolder.forEach(function(folder){
  var files = fs.readdirSync(config.taskDir + folder + '/');
  files.forEach(function(file){
      require(config.taskDir + folder + '/' + file)(gulp, config, $, args);
  })

});

gulp.task('task-list',$.task_listing);

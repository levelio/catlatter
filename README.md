Cat Ladder
======

提供一个简单的gulp项目脚手架

##简介

1、gulpfile task 太多了，难以管理，这个项目用来拆分 task
2、每次创建新项目，都要一遍又一遍的去写 gulp task，我想在这个项目中提供一些基础的 task 方便使用

##使用

先安装模块 `npm install`

  gulp task-list  //列出所有task

配置文件是 `gulp.config.js` 可以按需修改其中的相关路径

新增的 task 请按功能在 `gulp/task/` 下创建新的文件夹，并以 node 模块的形式添加到其中


##TODO

<input type="checked"> 加入CSS Sprity 合并 task
<input type="checked"> 优化结构

##版本纪录

0.0.1 基本框架完成

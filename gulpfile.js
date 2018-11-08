"use strict";

// more info:
// https://github.com/w0rm/gulp-svgstore

var config   = require('./config.json');
var gulp     = require('gulp');

var path     = require('path');
var svgstore = require('gulp-svgstore');
var svgmin   = require('gulp-svgmin');
var rename   = require('gulp-rename');
var replace  = require('gulp-replace');



gulp.task('default', function () {
  return gulp
    .src( config.src + '/*.svg' )
    .pipe( svgmin(function (file) {
      var prefix = path.basename( file.relative, path.extname(file.relative) );
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      }
    }))
    .pipe( svgstore({ inlineSvg: true }) )
    .pipe( replace('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">', '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">') )
    .pipe( rename(config.filename + '.svg') )
    .pipe( gulp.dest(config.dest) );
});

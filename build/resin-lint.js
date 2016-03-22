// Generated by CoffeeScript 1.10.0
(function() {
  var fs, getPath, minimist, path, resolve, spawn,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  fs = require('fs');

  path = require('path');

  minimist = require('minimist');

  resolve = require('resolve').sync;

  spawn = require('child_process').spawn;

  getPath = function(dest) {
    return path.join(__dirname, dest);
  };

  module.exports = function(passed_params) {
    var argv, confgFile, spawn_params;
    argv = minimist(passed_params);
    confgFile = [];
    spawn_params = [];
    spawn_params.push(getPath('./coffeelint_wrapper.js'));
    if (indexOf.call(argv, 'f') >= 0) {
      spawn_params.push('-f', getPath('../coffeelint.json'));
    }
    spawn_params.push.apply(spawn_params, passed_params);
    return spawn(process.execPath, spawn_params, {
      stdio: 'inherit'
    });
  };

}).call(this);
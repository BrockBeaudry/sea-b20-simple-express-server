module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    casperjs: {
      options: {
        async: {
          parallel: false
        }
      },
      files: ['tests/casperjs/**/*.js']
    },
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-casperjs');

  // Task(s).
  grunt.registerTask('casper', ['casperjs']);

};
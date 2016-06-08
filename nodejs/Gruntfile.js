var webpackConfig = require('./webpack.config');

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['dist/js/app.js']
    },
    webpack: {
      build: webpackConfig
    },
    watch: {
      options: {
        atBegin: true
      },
      dev: {
        files: [ 'client/**/*.js', 'screens/**/*.js'],
        tasks: ['webpack']
      },
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['webpack']);

};

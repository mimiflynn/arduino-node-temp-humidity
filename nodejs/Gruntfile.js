module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['dist/js/app.js']
    },
    webpack: {
      build: {
        entry: './client/scripts/app.js',
        debug: true,
        devtool: '#source-map',
        output: {
            path: 'dist/js/',
            filename: 'app.js'
        },
        stats: {
            // Configure the console output
            colors: false,
            modules: true,
            reasons: true
        },
        module: {
          loaders: [
            { test: /\.js$/, loader: 'babel', exclude: __dirname + '/node_modules' }
          ]
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'client/scripts/**/*.js'],
      options: {
        globals: {
          console: true
        },
        additionalSuffixes: ['.js']
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      dev: {
        files: ['<%= jshint.files %>', 'client/**/*.js', 'screens/**/*.js'],
        tasks: ['jshint', 'webpack']
      },
    }
  });

  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint', 'webpack']);

};

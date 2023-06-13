


  module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            'dist/css/style.css': 'src/less/style.less'
          }
        }
      },
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'dist/js/script.min.js': 'src/js/script.js'
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('build', ['less', 'uglify']);
  };
  
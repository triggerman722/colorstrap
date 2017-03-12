module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['css'],
        options: {
          livereload: 35729
        }
      },
      all: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    },

   cssmin: {
    build: {
      src: 'styles/main.css',
      dest: 'styles/main.min.css'
    }
  },

  sass: {
    dev: {
      files: {
         // destination     // source file
        'styles/main.css': 'styles/main.scss'
              }
            }
          }
        });

  // Default task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('css', ['sass', 'cssmin']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};

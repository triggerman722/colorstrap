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
      minify: {
        expand: true,
        cwd: 'public',
        src: ['*.css'],
        dest: 'public',
        ext: '.min.css'
      }
    },

sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: 'public',
        ext: '.css'
      }]
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

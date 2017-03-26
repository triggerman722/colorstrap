module.exports = function(grunt) {

  grunt.initConfig({

cssmin: {
      minify: {
        expand: true,
        cwd: 'dist',
        src: ['*.css', '!*.min.css'],
        dest: 'dist',
        ext: '.min.css'
      }
    },

sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'scss',
        src: ['*.scss'],
        dest: 'dist',
        ext: '.css'
      }]
    }
  }
});

  // Default task
  grunt.registerTask('default', ['sass', 'cssmin']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};

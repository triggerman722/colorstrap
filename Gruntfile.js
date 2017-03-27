module.exports = function(grunt) {

  grunt.initConfig({

cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/css',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css',
        ext: '.min.css'
      }
    },
compress: {
    colorstrap: {
        options: {
            archive: './dist/zip/colorstrap.zip',
            mode: 'zip'
        },
        files: [
            { src: './dist/css/**' }
        ]
    }
},
sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'scss',
        src: ['*.scss'],
        dest: 'dist/css',
        ext: '.css'
      }]
    }
  }
});

  // Default task
  grunt.registerTask('default', ['sass', 'cssmin', 'compress']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compress');
};

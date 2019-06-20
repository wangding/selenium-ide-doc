module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        expand: true,
        cwd: '_book',
        src: ['*.html', '2.9/*.html'],
        dest: 'dist/'
      }
    },
    cssmin: {
      files: {
        expand: true,
        cwd: '_book',
        src: ['gitbook/**/*.css', '2.9/gitbook/**/*.css'],
        dest: 'dist/'
      }
    },
    uglify: {
      main: {
        files: [{
          expand: true,
          cwd: '_book',
          src: ['gitbook/**/*.js', '2.9/gitbook/**/*.js', '!gitbook/gitbook-plugin-anchor-navigation-ex/**/*.js', '!2.9/gitbook/gitbook-plugin-anchor-navigation-ex/**/*.js'],
          dest: 'dist/'
        }]
      }
    },
    copy: {
      html: {
        files: [{
            expand: true,
            cwd: 'dist',
            src: ['*.html', '2.9/*.html'],
            dest: '_book/'
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['gitbook/**', '2.9/gitbook/**'],
          dest: '_book/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify', 'copy:html', 'copy:js']);
};

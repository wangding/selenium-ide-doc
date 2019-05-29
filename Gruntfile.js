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
        src: ['*.html', 'docs/*.html'],
        dest: 'dist/'
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['*.html', 'docs/*.html'],
            dest: '_book/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('minify', ['htmlmin', 'copy']);
};

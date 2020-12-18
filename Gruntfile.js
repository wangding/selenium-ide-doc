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
    unescape: {
      files: {
        src: ['_book/*.html', '_book/2.9/*.html'],
        dist: 'dist/'
      }
    },
    'json-minify': {
      build: {
        files: 'book.json'
      }
    },
    replace: {
      html: {
        src: ['_book/*.html', '_book/2.9/*.html'],
        overwrite: true,
        replacements: [{
          form: '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="gitbook/images/apple-touch-icon-precomposed-152.png">',
          to: '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://cdn.jsdelivr.net/gh/wangding/i@master/favicon.svg">'
        }, {
          from: '<link rel="shortcut icon" href="gitbook/images/favicon.ico" type="image/x-icon">',
          to: '<link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/wangding/i@master/favicon.svg">'
        }]
      }
    },
    qiniu_qupload: {
      default_options: {
        options: {
          ak: 'QINIU_AK',
          sk: 'QINIU_SK',
          bucket: 'gb-selenium',
          assets: [{src: '_book', prefix: ''}]
        }
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
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-unescape-html');
  grunt.loadNpmTasks('grunt-json-minify');
  grunt.loadNpmTasks('@wangding/grunt-qiniu-qupload');

  grunt.registerTask('minify', ['unescape', 'copy:html', 'replace', 'htmlmin', 'cssmin', 'uglify', 'copy:html', 'copy:js', 'json-minify']);
  grunt.registerTask('upload', ['qiniu_qupload']);
};

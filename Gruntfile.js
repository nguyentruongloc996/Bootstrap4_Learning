'use strict' //use strict javascript code

module.exports = function(grunt) {
    // require some grunt plugin
    const sass = require('node-sass');
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    require('jit-grunt')(grunt);
 
    //setup grunt configuration for all task.
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': 'css/style.css'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass'],
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*'
                    ]
                },
                option: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
}
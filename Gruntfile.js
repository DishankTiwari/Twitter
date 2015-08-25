module.exports = function(grunt) {
    // 'use strict';
    // Project configuration.
    grunt.initConfig({
        jasmine: {
            src: 'node_modules/grunt/src/test.js',
            options: {
                specs: 'node_modules/grunt/src/spec.js'
            }
        },
        jshint: {
            src: ['assets/js/*.js'] 
        }
    });
    grunt.loadNpmTasks('grunt/node_modules/grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt/node_modules/grunt-contrib-jshint');
    grunt.registerTask('lint', ['jshint']);
};


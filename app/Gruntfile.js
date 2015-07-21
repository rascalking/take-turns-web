module.exports = function(grunt) {
    var modRewrite = require('connect-modrewrite');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        },
        connect: {
            options: {
                livereload: true,
                hostname: 'localhost',
                port: 9000
            },
            livereload: {
                options: {
                    base: ['src', 'bower_components'],
                    middleware: function(connect, options, middlewares) {
                        var modRewrite = require('connect-modrewrite');
                        // enable Angular's HTML5 mode
                        middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']));

                        return middlewares;
                    }
                }
            }
        },
        watch: {
            options: {
              livereload: true,
            },
            files: ['<%= jshint.files %>'],
            tasks: ['jshint'],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
};

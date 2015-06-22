module.exports = function(grunt) {
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
                    base: ['src', 'bower_components']
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

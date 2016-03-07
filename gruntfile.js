module.exports = function (grunt) {
    grunt.initConfig({
        jshint: { // https://www.npmjs.com/package/grunt-contrib-jshint
            options: {
                strict: true
            },
            check_all: {
                files: {
                    src: [
                        'src/models/*.js'
                    ]
                }
            }
        },

        jscs: { // https://www.npmjs.com/package/grunt-jscs
            check_all: {
                src: [
                    'src/models/*.js'
                ],
                options: {
                    config: '.jscsrc',
                    reporter: 'console',
                    esnext: false,
                    verbose: true,
                    fix: false
                }
            }
        },

        uglify: { // https://www.npmjs.com/package/grunt-contrib-uglify
            bundle_app: {
                files: {
                    'dist/soil.min.js': [
                        'src/app.js',
                        'src/**/*.js'
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: [ 'src/app.js',
                    'src/**/*.js'],
                dest: 'dist/soil.js'
            }
        },

        cssmin: { // https://www.npmjs.com/package/grunt-contrib-cssmin
            options: { },
            bundle_app: {
                files: {
                    'src/include/app.min.css': ['src/include/*.css']
                }
            }
        },

        clean: { // https://www.npmjs.com/package/grunt-contrib-clean
            dev: ['src/include/app.min.js', 'src/include/app.min.css'],
            dist: ['src/include/*.css', '!src/include/*.min.css'],
            include: ['src/include/*']
        },

        copy: { // https://www.npmjs.com/package/grunt-contrib-copy
            options: { },
            dev: {
                files: {
                    'src/index.html': 'src/index.dev.html'
                }
            },
            deps: {
                files: {
                    'src/include/genericFunctions.js': 'bower_components/hoijof.genericFunctions/dist/genericFunctions.js'
                }
            },
            framework: {
                'dist/app.js': 'src/app.js'
            }
        }
    });

    // Load the modules
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Create the tasks
    grunt.registerTask('core', ['jshint:check_all', 'jscs:check_all', 'clean:include', 'copy:deps', 'copy:framework']);
    grunt.registerTask('dist', ['core', 'uglify:bundle_app', 'clean:dist']);
    grunt.registerTask('dev', ['core', 'copy:dev', 'clean:dev', 'concat:dist']);
    grunt.registerTask('default', ['dev', 'dist']);

};
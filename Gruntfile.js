module.exports = function(grunt) {

    // load all modules starting with "grunt-"
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

//        validation: {
//            options: {
//                reset:  grunt.option('reset') || false,
//                stoponerror: false,
//                relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta."], //ignores these errors
//                doctype: "HTML5",
//                charset: "utf-8"
//            },
//            files: {
//                src: ['demos/**/*.html']
//            }
//        },

        meta: {
            banner: '/* \n' +
                ' * <%= pkg.name %> v<%= pkg.version %>\n' +
                ' * <%= pkg.homepage %> \n' +
                ' * (c) <%= pkg.author %>\n' +
                ' * <%= grunt.template.today("dd-mm-yyyy hh:mm") %>\n' +
                ' */\n\n'
        },

        // css ------------------------------

        compass: {
            dev: {
                options: {
                    options: { banner: '<%= meta.banner %>' },
                    sassDir: 'scss/',
                    specify: 'scss/Playground.scss',
                    cssDir: 'dist/',
                    relativeAssets: false
                }
            }
        },

        cssmin: {
            options: { banner: '<%= meta.banner %>' },
            compress: {
                files: {
                    'dist/<%= pkg.name %>.min.css': ['dist/*.css']
                }
            }
        },


        // js ------------------------------

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['demos/**/*js']
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },

        concat: {
            options: { banner: '<%= meta.banner %>' },
            dist: {
                src: ['js/{,*/}*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },


        // watch ------------------------------

        watch: {
//            html: {
//                files: ['**/*.html'],
//                tasks: ['htmlhint']
//            },
            css: {
                files: ['scss/Playground.scss'],
                tasks: ['compass']
            },
            js: {
                files: ['dist/Playground.js'],
                tasks: ['jshint']
            }
        }

    });


    // Default task(s).
    grunt.registerTask('default', []);

    grunt.registerTask('build', ['compass', 'cssmin', 'jshint' , 'concat', 'uglify']);

    grunt.registerTask('watch', ['watch']);

};

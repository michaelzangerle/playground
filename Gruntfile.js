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
                ' * <%= grunt.template.today("dd-mm-yyyy") %>' +
                ' */\n\n'
        },

        // css ------------------------------

        compass: {
            dev: {
                options: {
                    sassDir: 'scss/',
                    specify: 'scss/base.scss',
                    cssDir: 'dist/',
                    relativeAssets: false
                }
            }
        },

        concat: {
            options: { banner: '<%= meta.banner %>' },
            dist: {
                src: ['js/{,*/}*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },


        // js ------------------------------

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },


        // watch ------------------------------

        watch: {
//            html: {
//                files: ['**/*.html'],
//                tasks: ['htmlhint']
//            },
            css: {
                files: ['scss/base.scss'],
                tasks: ['compass']
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['compass']);
    grunt.registerTask('watch', ['watch']);

};

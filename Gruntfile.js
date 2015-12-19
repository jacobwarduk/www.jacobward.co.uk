module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("bower.json"),

        htmlmin: {
          dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true
            },
            files: {
              'index.html': 'html/index.html'
            }
          }
        },

        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "js/javascript.min.js": "js/javascript.js",
                    "js/app.min.js": "js/app.js"
                }
            }
        },

        sass: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "css/style.css": "css/style.scss"
                }
            }
        },

        cssmin: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "css/style.min.css": "css/style.css"
                }
            }
        },

        watch: {
            files: ["css/style.scss", "js/javascript.js, js/app.js"],
            tasks: ["uglify", "sass", "cssmin", "htmlmin"]
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["uglify", "sass", "cssmin", "watch", "htmlmin"]);

};

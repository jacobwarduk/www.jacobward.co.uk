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
            dist: {
                files: {
                    "js/javascript.min.js": "js/javascript.js",
                    "js/app.min.js": "js/app.js"
                }
            }
        },

        sass: {
            dist: {
                files: {
                    "css/style.css": "css/style.scss"
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    "css/style.min.css": "css/style.css"
                }
            }
        },

        watch: {
            files: ["css/style.scss", "css/_colors.scss", "css/_typography.scss", "js/javascript.js", "html/index.html"],
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

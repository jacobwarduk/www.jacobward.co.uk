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
                    "assets/js/app.min.js": "assets/js/app.js"
                }
            }
        },

        sass: {
            dist: {
                files: {
                    "assets/scss/app.css": "assets/scss/app.scss"
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    "assets/css/app.min.css": "assets/css/app.css"
                }
            }
        },

        watch: {
            files: ["assets/scss/app.scss", "assets/scss/_colors.scss", "assets/scss/_typography.scss", "assets/js/app.js", "assets/html/index.html"],
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

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        babel: {
            options: {
                sourceMap: true,
                stage: 0,
                highlightCode: true
            },
            es6: {
                files: [
                    {
                        expand: true,
                        src: ['appContent/components/**/*.es6'],
                        ext: '.js'
                    }
                ]
            }
        },
        bowercopy: {
            scripts: {
                options: {
                    destPrefix: 'appContent/components/vendors'  //dest root
                },
                files: {
                    //dest: src
                    'jquery.js': 'jquery/jquery.js',
                    'angular.js': 'angular/angular.js',
                    'bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
                    'angular-ui-router.js': "angular-ui-router/release/angular-ui-router.js",
                    'angular-bootstrap.js': 'angular-bootstrap/ui-bootstrap.js',
                    'angular-bootstrap-tpls.js': 'angular-bootstrap/ui-bootstrap-tpls.js',
                    'angular-sanitize.js': 'angular-sanitize/angular-sanitize.js',
                    'angular-scroll-animate.js': 'angular-scroll-animate/dist/angular-scroll-animate.js',
                    "ngDialog.js": 'ngDialog/js/ngDialog.js',
                    "word-replace.js": "word-replace/replace-word.js",
                    "require.js": "requirejs/require.js"
                }
            },
            css: {
                options: {
                    destPrefix: 'appContent/css'  //dest root
                },
                files: {
                    //dest: src
                    'vendor/css/bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                    'vendor/css/font-awesome.css': 'components-font-awesome/css/font-awesome.css',
                    'vendor/css/ui-bootstrap-csp.css': 'angular-bootstrap/ui-bootstrap-csp.css',
                    'vendor/css/ngDialog.css': 'ngDialog/css/ngDialog.css',
                    'vendor/css/ngDialog-theme-default.css': 'ngDialog/css/ngDialog-theme-default.css',
                    'vendor/css/ngDialog-theme-plain.css': 'ngDialog/css/ngDialog-theme-plain.css'
                }
            },
            folders: {
                files: {
                    //dest: src
                    'appContent/css/vendor/fonts': 'bootstrap/dist/fonts',
                    'appContent/css/vendor/fonts': 'components-font-awesome/fonts'
                }
            }
        },
        watch: {
            scripts: {
                files: ['appContent/components/**/*.es6'],
                tasks: ['babel']
            }
        }
    });

    require("load-grunt-tasks")(grunt);
    grunt.registerTask("default", ["bowercopy", "babel", "watch"]);
}

module.exports = function(grunt) {
    var commonSrc = [ 'src/main.js', 'src/helpers.js' ];
    var destinationFile = 'dist/_f.js';

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.initConfig({
        filePattern: '**',
        clean: {
            default: 'dist/*'
        },
        concat: {
            original: {
                options: {
                    process: function(src) {
                        return src + 'this._f = this._;';
                    }
                },
                src: [
                    'original/underscore.js'
                ],
                dest: destinationFile
            },
            default: {
                src: [
                    commonSrc,
                    'src/<%= filePattern %>.js'
                ],
                dest: destinationFile 
            }
        },
        uglify: {
            default: {
                files: {
                    'dist/_f.min.js': 'dist/_f.js'
                }
            }
        },
        karma: {
            default: {
                configFile: 'karma.conf.js',
                options: {      
                    files: [
                        destinationFile,
                        'tests/<%= filePattern %>.spec.js'
                    ]  
                }
            }
        }
    });
    
    function getFilePattern(taskList) {
        if(!taskList) return '**';
        var moduleNames = (taskList || '').split(',');
        return '+(' + moduleNames.join('|') +')';
    }
    
    grunt.registerTask('_compile', 'Compiles assets into dist.', function(filePattern) {
        grunt.config.set('filePattern', filePattern);
        grunt.task.run(['concat', 'uglify']);
    });
    
    grunt.registerTask('_test', 'Runs tests against compiled files.', function(filePattern) {
        grunt.config.set('filePattern', filePattern);
        grunt.task.run(['karma']);
    });

    grunt.registerTask('_testOriginal', 'Runs tests against original underscore.', function(filePattern) {
        grunt.task.run(['clean', 'concat:original', '_test:' + filePattern]);
    });
        
    grunt.registerTask('build', 'Runs full build process.', function(taskList) {
        var filePattern = getFilePattern(taskList);
        grunt.task.run(['_testOriginal:' + filePattern, 'clean', '_compile:' + filePattern, '_test:' + filePattern]);
    });
};
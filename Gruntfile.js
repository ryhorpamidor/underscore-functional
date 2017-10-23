module.exports = function(grunt) {
    var commonSrc = [ 'src/main.js', 'src/helpers.js' ];
    var destinationFile = 'dist/_f.js';
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.initConfig({
        filePattern: '**',
        concat: {
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
                },
            }
        }
    });
    
    function getFilePattern(taskList) {
        if(!taskList) return '**';
        var moduleNames = (taskList || '').split(',');
        return `+(${moduleNames.join('|')})`;
    }
    
    grunt.registerTask('_compile', 'Compile assets into dist folder.', function(filePattern) {
        grunt.config.set('filePattern', filePattern);
        grunt.task.run(['concat', 'uglify']);
    });
    
    grunt.registerTask('_test', 'Run tests against compiled files', function(filePattern) {
        grunt.config.set('filePattern', filePattern);
        grunt.task.run(['karma']);
    });
        
    grunt.registerTask('build', 'Run full build process', function(taskList) {
        console.log(taskList)
        var filePattern = getFilePattern(taskList);
        grunt.task.run(['_compile:' + filePattern, /* any kind of validation */ '_test:' + filePattern]);
    });
};
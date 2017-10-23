module.exports = function(config) {
    config.set({
        autoWatch: false,
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai', 'sinon'],
        reporters: ['mocha'],
        singleRun: true
    });
};
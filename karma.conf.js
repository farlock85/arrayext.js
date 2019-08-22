const webpackConfig = require('./webpack/webpack.dev');
const path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            'karma-chrome-launcher',
            'karma-coverage-istanbul-reporter',
            'karma-jasmine',
            'karma-jasmine-html-reporter',
            'karma-webpack'
        ],
        client: {
            clearContext: false
        },
        coverageIstanbulReporter: {
            dir: path.join(__dirname, 'coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml', 'coverage-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        autoWatchBatchDelay: 1000,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        files: ['test/index.ts'],
        exclude: [],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        preprocessors: {
            'test/index.ts': ['webpack']
        },
        concurrency: Infinity,
        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
                flags: [
                    '--headless',
                    '--disable-gpu',
                    '--auto-open-devtools-for-tabs',
                    '--remote-debugging-port=9222'
                ],
                debug: true
            }
        }
    });
};

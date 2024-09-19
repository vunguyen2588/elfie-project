const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: "Android",
        "appium:automationName": "UiAutomator2",
        "appium:app": path.join(process.cwd(), "./app/Google_Chrome.apk"),
        "appium:appPackage": "com.android.chrome",
        "appium:appActivity": "com.google.android.apps.chrome.Main",
        "appium:deviceName": "nightwatch-android-11",
        "appium:noReset": true
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: ['appium'],
};
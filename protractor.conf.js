'use strict';


module.exports.config = {
    //  useAllAngular2AppRoots: true,
    //  directConnect: false,
    baseUrl:'https://dev.mais.com.vc',
    // Set to "custom" instead of cucumber
    framework: 'custom',
    // Path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                // Disable "Chrome is being controlled by automated test software" infobar
                '--disable-infobars'
            ],
            prefs: {
                // Disable Chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        },
        // Number of times to run this set of capabilities (in parallel, unless limited by maxSessions). Default is 1
        //count: 1,
        // If this is set to be true, specs will be sharded by file (i.e. all files to be run by this set of
        // capabilities will run in parallel). Default is false
        //shardTestFiles:true,
        // Maximum number of browser instances that can run in parallel for this set of capabilities. This is only
        // needed if shardTestFiles is true. Default is 1
        //maxInstances: 1
    },

    // Spec patterns are relative to this directory
    specs: [
        './tests/features/**/*.feature' // features of tests
    ],
    cucumberOpts: {
        // Require step definition files before executing features
        'require': [
            './tests/step_definitions/*-step.js', // step_definitions of tests            
            './node_modules/protractor-cucumber-steps/index.js'
        ],
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output
        'format': './node_modules/cucumber-pretty',
        'format-options': '{ "pretty": { "summary": true, "passed": true } }',
        // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        'tags': ["@Smoke","@Reg"],
        // <boolean> fail if there are any undefined or pending steps
        'strict': true,
        // <boolean> invoke formatters without executing steps
        'dry-run': false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE
        'compiler': []
    },
    // Time of retries looking for angular exceeded - timeout in milliseconds
    getPageTimeout: 10000,
    // Before performing any action, Protractor waits until there are no pending
    // asynchronous tasks in your Angular application
    allScriptsTimeout: 120000,

    // Custom parameters can be specified here
    params: {
        // Path to file with all page objects
        //pageObjects: require('./page_objects/index.js'),
        // Custom timeout to wait for elements on the page
        customTimeout: 120*1000,
        // Params for setting browser window width and height - can be also
        // changed via the command line as: --params.browserConfig.width 1024
        browserConfig: {
            width: 1280,
            height: 1024
        }
    },

    // plugins: [{
    //     inline: {
    //         /*
    //         * Sets up plugins before tests are run. This is called after the WebDriver
    //         * session has been started, but before the test framework has been set up.
    //         *
    //         * @this {Object} bound to module.exports
    //         *
    //         * @throws {*} If this function throws an error, a failed assertion is added to
    //         *     the test results.
    //         *
    //         * @return {q.Promise=} Can return a promise, in which case protractor will wait
    //         *     for the promise to resolve before continuing.  If the promise is
    //         *     rejected, a failed assertion is added to the test results.
    //         */
    //         setup: function () {
    //         },
    //         teardown: function () {
    //         }
    //     }
    // }],
    onPrepare: function () {
        // If you need to navigate to a page which does not use Angular,
        // you can turn off waiting for Angular
        browser.ignoreSynchronization = true;
        

        // Set custom window size for browser
        browser.driver.manage().window().setSize(
            browser.params.browserConfig.width,
            browser.params.browserConfig.height
        );
    }

};
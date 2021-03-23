'use strict';
module.exports = {
    protractor: require('protractor'),
    browser: protractor.browser,
    chai: require('chai'),
    chaiAsPromised: require('chai-as-promised'),
    chaiUse: (chaiAsPromised) => {
        this.chai.use(chaiAsPromised);
    },
    //chai.use(chaiAsPromised),
    expect: chai.expect,
    EC: protractor.ExpectedConditions,
    defaultCustomTimeout: 5000,
    customTimeout: browser.params.customTimeout || defaultCustomTimeout,
    timeToWaitMax: 300100, // Maximum time to wait for in 'I wait for (\d+) ms' step}
}
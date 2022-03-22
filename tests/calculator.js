let homepage = require('../pages/homepage');

describe('demo calclator tests', function () {
    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('7');
        homepage.enterSecondNumber('5');
        homepage.clickGo();

        homepage.verifyResult('12');

        browser.sleep(2000);
    });
});

describe('demo calclator tests', function () {
    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('7');
        homepage.enterSecondNumber('5');
        homepage.clickGo1();

        homepage.verifyResult('12');

        browser.sleep(2000);
    });
});

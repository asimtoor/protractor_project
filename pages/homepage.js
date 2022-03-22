
let homepage = function(){

    let firstNumber_input = element(by.css("[ng-model='first']"));
    let secondNumber_input = element(by.css("[ng-model='second']"));
    let goButton = element(by.id("gobutton"));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNum){
        firstNumber_input.sendKeys(firstNum);
    };

    this.enterSecondNumber = function(secondNum){
        secondNumber_input.sendKeys(secondNum)
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };

};

module.exports = new homepage();

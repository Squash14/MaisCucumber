'use strict';

var protractor = require('protractor');
var browser = protractor.browser;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = protractor.ExpectedConditions;


 class BasePage {

  constructor() {      
  }

  acessaSite(){    
    browser.get(browser.baseUrl);
    browser.waitForAngular();
    return  browser.sleep('3000');     
  }

  link(link){
      browser.wait(function() {      
      return element(by.linkText(link)).isPresent();
    }, 120*1000);           
    return element(by.linkText(link)).click();       
  }

  botao(botao){  
    browser.wait(function() {
      return element(by.cssContainingText('.btn-submit',botao)).isPresent();
    }, 120*1000);               
    return element(by.cssContainingText('.btn-submit',botao)).click();       
  }

  alertExibeMsg(msg){        
    browser.wait(function() {
      return element(by.cssContainingText('.swal2-content',msg)).isPresent();
    }, 120*1000); 
  }

  homeDeslogada(){
    return browser.wait(function() {
      return element(by.cssContainingText('span',"_Somando talentos e conquistando juntos.")).isPresent();
    }, 120*1000);               
  }

  trocaAba(aba){
    return browser.getAllWindowHandles().then(function(handles){
        return browser.switchTo().window(handles[aba]);
    });
  }
}	

module.exports = new BasePage();
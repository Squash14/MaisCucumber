'use strict'

var protractor = require('protractor');
var browser = protractor.browser;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = protractor.ExpectedConditions;


class loginPage {
    constructor() {        
    }

    logarUsuario(page, usuario, senha){
        browser.wait(function() {
            return element(by.css(page.btnLogIn)).isPresent();
        }, 120*1000);
        element(by.id(page.user)).sendKeys(usuario);
        element(by.id(page.pwd)).sendKeys(senha);
        return element(by.css(page.btnLogIn)).click();        
    }

    logarSemSenha(page,senha){
        browser.wait(function() {
            return element(by.css(page.btnLogIn)).isPresent();
        }, 120*1000);        
        element(by.id(page.pwd)).sendKeys(senha);
        return element(by.css(page.btnLogIn)).click();
    }

    logarSemCPF(page,usuario){
        browser.wait(function() {
            return element(by.css(page.btnLogIn)).isPresent();
        }, 120*1000);
        element(by.id(page.user)).sendKeys(usuario);        
        return element(by.css(page.btnLogIn)).click();
    }

    logado(page){
        browser.wait(function() {
            return element(by.css(page.headImg)).isPresent();
          }, 120*1000);      
          return element(by.css(page.headImg)).isDisplayed();
    }

}

module.exports = new loginPage();
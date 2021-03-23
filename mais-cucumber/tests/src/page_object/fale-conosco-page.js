'use strict'

var protractor = require('protractor');
var browser = protractor.browser;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
const time = browser.params.customTimeout;


class TalkToUsPage {
    constructor() {        
    }

    enviarMessage(page,dados,tipo){
        browser.wait(function() {
            return element(by.id(page.cpf)).isPresent();
          }, time); 
          element(by.id(page.cpf)).sendKeys(dados.cpf);
          element(by.id(page.telefone)).sendKeys(dados.telefone);
          element(by.id(page.nome)).sendKeys(dados.name);
          element(by.id(page.email)).sendKeys(dados.email);
          element(by.css(page.listaAsssunto)).click();
          element(by.cssContainingText(page.assunto,tipo)).click();
          element(by.id(page.mensagem)).sendKeys(dados.msg);
          return element(by.css(page.enviar)).click();   
    }
}

module.exports = new TalkToUsPage();
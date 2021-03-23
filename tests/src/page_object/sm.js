'use strict';


const protractor = require('protractor');
var browser = protractor.browser;
var homeD = require('./home-deslogada.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

 class Page {

  constructor() {
    this.properties = ['no', 'entrar', 'selecionar',
      'preencher', 'verificar', 'abrir', 'by', 'buscar', 'texto', 'clicar',
      'selecionar', 'contem'
    ]

    for(let prop of this.properties) {
      this[prop] = this;
    }
  }

  link(nome) {
    element(by.linkText(nome)).click();
  }

  placeholder(placeholder, dado) {    
    this.buscar.by.css(`input[placeholder='${placeholder}']`).first().sendKeys(dado);
  }

  botao(nome) {
  	element.all(by.buttonText(nome)).first().click();	
  }

  xpath(query) {
  	return element.all(by.xpath(query));
  }

  campoID(id,dado){
    this.preencher.by.id(id).sendKeys(dado);
  }
  id(id){
    return element(by.id(id));
  }
  css(query) {
    return element.all(by.css(query));
  }

  option(dado) {
  	element(by.cssContainingText('option', dado)).click();	
  }

  cssTexto(tag,dado) {
    return element(by.cssContainingText(tag, dado));    
  }  

  site(url) {
    browser.get(`${browser.baseUrl}${url}`).then(function () {
      browser.sleep(10*5000);     
      expect(element(by.id(homeD.user)).isDisplayed());
      expect(element(by.id(homeD.user)).isEnabled());
      expect(element(by.id(homeD.pwd)).isDisplayed());
      expect(element(by.id(homeD.pwd)).isEnabled());

      callback();
    });
    
  }
  trocaAba(aba){
    return browser.getAllWindowHandles().then(function(handles){
        return browser.switchTo().window(handles[aba]);
    });
  }

}	

module.exports = Page
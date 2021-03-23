'use strict'
var base = require('../src/page_object/base-page.js')

var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^abrir a url Vivo Mais Com Vc$/, {timeout:60*1000} , function () {    
      return base.acessaSite();             
    });

    When(/^clico no link "([^"]*)"$/, {timeout:60*1000}, function (link) {   
      return base.link(link);      
    });

    When(/^clico no botão "([^"]*)"$/, {timeout:60*1000}, function (botao) {         
      return base.botao(botao);      
    });

    Then(/^visualizarei a mensagem de (erro|sucesso) "([^"]*)"$/, {timeout:60*1000}, function (tipo,msg) {        
      return base.alertExibeMsg(msg);       
    });

    Then(/^visualizarei a home deslogada$/, {timeout:60*1000}, function () {  
      return base.homeDeslogada();    
    });
        
});

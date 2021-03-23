'use strict'
var faleConosco = require('../src/page_object/fale-conosco-page.js');
var faleConoscoPageD = require('../src/page_object/elementos/fale-conosco.js').get;
var dados = require('../src/templates/fale-conosco-template.js').get;
var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {

  When(/^envio uma mensagem de fale conosco de "([^"]*)"$/, {timeout:60*1000}, function (tipo) {    
    return faleConosco.enviarMessage(faleConoscoPageD, dados[tipo], tipo);    
  });
    
});




    



    
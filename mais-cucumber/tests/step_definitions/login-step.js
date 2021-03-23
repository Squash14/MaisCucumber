'use strict'
var usuario = require('../src/templates/usuarios-template').get;
var login = require('../src/page_object/login-page.js');
var homeD = require('../src/page_object/elementos/home-deslogada.js').get;

var { defineSupportCode } = require('cucumber');
var protractor = require('protractor');
var browser = protractor.browser;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = protractor.ExpectedConditions;

defineSupportCode(function ({ Given, When, Then }) {

    When(/^autenticar um usuario ([^"]*)$/,{timeout:60*1000} ,function (perfil) {
      return login.logarUsuario(homeD,usuario[perfil].user,usuario[perfil].pwd);          
    });

    When(/^autenticar sem preecher o campo CPF$/,{timeout:60*1000}, function () {      
      return login.logarSemCPF(homeD,'semsenha');
     });
     
    When(/^autenticar sem preecher o campo Senha$/, {timeout:60*1000}, function () {
      return login.logarSemSenha(homeD,'99999999999');     
      });
    
    Then(/^vizualizarei a home do portal$/, {timeout:60*1000}, function () {      
      return login.logado(homeD);
    });

});

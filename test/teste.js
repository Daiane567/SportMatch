//Simular o clik busca atleta
//Verificar se o status retornado do HTTP é 200
//Verificar se o HTML contem uma div atleta
//Verificar se contem quatro atletas
var assert = require("assert");
var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://localhost:5000/buscaPessoas').then(function() {
    driver.findElement(webdriver.By.id('pessoa0')).then(function(data) {
        expect(data).to.contains('/stylesheets/img/elaine.jpg');
        driver.quit();
    });
});
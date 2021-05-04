import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");

var base_url = "http://localhost:3333/";

defineSupportCode(function ({Given, When, Then}) {
    Given(/^estou na pagina de "Home medical"$/, async() => {
        await browser.get("http://localhost:4200/home/medical/");
        await expect($("div[class='mat-tab-label-content']").getText()).to.eventually.equal('Meus Pacientes')
    })

    Given(/^tenho (\d+) pacientes de nome "(\w*)" e "(\w*)"$/, async(n, p1, p2) => {
        let pacienteListSize = await element.all(by.css('.patientName')).count()
        await expect(pacienteListSize).to.equal(n)

        let pacienteList = await element.all(by.css('.patientName'))
        await expect(pacienteList.find(p => p === p1)).to.equal(p1)
        await expect(pacienteList.find(p => p === p2)).to.equal(p2)
    })

    When(/^When eu vou para a pagina de "Meus Pacientes"$/, async() => {
        await browser.get("http://localhost:4200/home/medical/");
        await element(by.name("meusPacientes")).click()
    })

    Given(/^tenho um paciente de nome "(\w*)"$/, async(nome) => {
        let pacienteList = await element.all(by.css('.patientName'))
        await expect(pacienteList.find(p => p === nome)).to.equal(nome)
    })

    When(/^eu abro o prontuario do paciente "(\w*)"$/, async(nome) => {
        let pacienteList = await element.all(by.css('.patientName'))
        await pacienteList.find(p => p === nome).click()
    })

    Then(/^sou direcionado para a pagina de "Prontuario" do paciente "(\w*)"$/, async(paciente) => {
        await expect(browser.getCurrentUrl()).toBe('http://localhost:4200/record/');
        await expect(element(by.css('.card-title')).getText()).to.be.eq(paciente)
    })

    Then(/^posso ver as informacoes de "Nome", "email", "Idade"$/, async() => {
        await expect(element(by.css('.card-title')).isPresent()).toBe(true);
        await expect(element(by.name('patientEmail')).isPresent()).toBe(true);
        await expect(element(by.name('patientIdade')).isPresent()).toBe(true);
    })

    Then(/^posso ver a lista de "Imagens" e a lista de "Consultas" de paciente "(\w*)"$/, async(paciente) => {
        await expect(element(by.name('listaImagens')).isPresent()).toBe(true);
        await expect(element(by.name('listaAppointmentFiles')).isPresent()).toBe(true);
        await expect(element(by.css('.card-title')).getText()).to.be.eq(paciente)
    })

    Given(/^estou na pagina de "Consulta" com o Paciente "Cadu"$/, async() => {
        await browser.get('http://localhost:4200/anamnesis-call/123')
        await expect(element(by.name('patientName')).getText()).to.be.eq("Cadu")
    })

    When(/^eu abro a ficha de prontuario$/, async() => {
        await element(by.name("openFicha")).click()
    })
})
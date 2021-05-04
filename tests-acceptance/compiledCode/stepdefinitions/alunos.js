"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
const request = require("request-promise");
var base_url = "http://localhost:3000/";
let sameCPF = ((elem, cpf) => elem.element(protractor_1.by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(protractor_1.by.name('nomelist')).getText().then(text => text === name));
let pAND = ((p, q) => p.then(a => q.then(b => a && b)));
function criarAluno(name, cpf) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='namebox']").sendKeys(name);
        yield protractor_1.$("input[name='cpfbox']").sendKeys(cpf);
        yield protractor_1.element(protractor_1.by.buttonText('Adicionar')).click();
    });
}
function assertTamanhoEqual(set, n) {
    return __awaiter(this, void 0, void 0, function* () {
        yield set.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(n));
    });
}
function assertElementsWithSameCPFAndName(n, cpf, name) {
    return __awaiter(this, void 0, void 0, function* () {
        var allalunos = protractor_1.element.all(protractor_1.by.name('alunolist'));
        var samecpfsandname = allalunos.filter(elem => pAND(sameCPF(elem, cpf), sameName(elem, name)));
        yield assertTamanhoEqual(samecpfsandname, n);
    });
}
function assertElementsWithSameCPF(n, cpf) {
    return __awaiter(this, void 0, void 0, function* () {
        var allalunos = protractor_1.element.all(protractor_1.by.name('alunolist'));
        var samecpfs = allalunos.filter(elem => sameCPF(elem, cpf));
        yield assertTamanhoEqual(samecpfs, n);
    });
}
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the students page$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('TaGui');
        yield protractor_1.$("a[name='alunos']").click();
    }));
    Given(/^I cannot see a student with CPF "(\d*)" in the students list$/, (cpf) => __awaiter(this, void 0, void 0, function* () {
        yield assertElementsWithSameCPF(0, cpf);
    }));
    When(/^I try to register the student "([^\"]*)" with CPF "(\d*)"$/, (name, cpf) => __awaiter(this, void 0, void 0, function* () {
        yield criarAluno(name, cpf);
    }));
    Then(/^I can see "([^\"]*)" with CPF "(\d*)" in the students list$/, (name, cpf) => __awaiter(this, void 0, void 0, function* () {
        yield assertElementsWithSameCPFAndName(1, cpf, name);
    }));
    Given(/^I can see a student with CPF "(\d*)" in the students list$/, (cpf) => __awaiter(this, void 0, void 0, function* () {
        yield criarAluno("Clarissa", cpf);
        yield assertElementsWithSameCPF(1, cpf);
    }));
    Then(/^I cannot see "([^\"]*)" with CPF "(\d*)" in the students list$/, (name, cpf) => __awaiter(this, void 0, void 0, function* () {
        yield assertElementsWithSameCPFAndName(0, cpf, name);
    }));
    Then(/^I can see an error message$/, () => __awaiter(this, void 0, void 0, function* () {
        var allmsgs = protractor_1.element.all(protractor_1.by.name('msgcpfexistente'));
        yield assertTamanhoEqual(allmsgs, 1);
    }));
    Given(/^the system has no student with CPF "(\d*)"$/, (cpf) => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url + "alunos")
            .then(body => expect(body.includes(`"cpf":"${cpf}"`)).to.equal(false));
    }));
    When(/^I register the student "([^\"]*)" with CPF "(\d*)"$/, (name, cpf) => __awaiter(this, void 0, void 0, function* () {
        let aluno = { "nome": name, "cpf": cpf, "email": "" };
        var options = { method: 'POST', uri: (base_url + "aluno"), body: aluno, json: true };
        yield request(options)
            .then(body => expect(JSON.stringify(body)).to.equal('{"success":"O aluno foi cadastrado com sucesso"}'));
    }));
    Then(/^the system now stores "([^\"]*)" with CPF "(\d*)"$/, (name, cpf) => __awaiter(this, void 0, void 0, function* () {
        let resposta = `{"nome":"${name}","cpf":"${cpf}","email":"","metas":{}`;
        yield request.get(base_url + "alunos")
            .then(body => expect(body.includes(resposta)).to.equal(true));
    }));
});

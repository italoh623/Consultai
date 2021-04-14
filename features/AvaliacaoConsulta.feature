Feature: Avaliação da consulta médica pelo paciente


Scenario: avaliação da consulta médica realizada pelo paciente para o médico designado bem sucedida
    Given estou logado no sistema, como paciente, com login “cadupm”
    And a consulta médica foi encerrada
    When eu clico no “Sim” referente a pergunta “Deseja fazer uma avaliação da consulta?”
    And eu preencho todos os campos requeridos da avaliação sobre a consulta médica
    And submeto a avaliação
    Then sou redirecionado para a página de “Agendamentos”
    And o sistema armazena o contéudo dessa avaliação


Scenario: avaliação da consulta médica realizada pelo paciente para o médico designado mal sucedida
    Given estou logado no sistema, como paciente, com login “cadupm”
    And a consulta médica foi encerrada
    When eu clico no “Sim” referente a pergunta “Deseja fazer uma avaliação da consulta?”
    And eu NÃO preencho todos os campos requeridos da avaliação sobre a consulta médica
    And submeto a avaliação
    Then o sistema retorna uma mensagem de erro sobre os campos preenchidos, como, "Preencha todos os campos corretamente"


Scenario: envio automático bem sucedido da avaliação da consulta para email do médico
    Given o médico de de CRM “8000-CE” habilita na página “Configuração de Conta” na aba “Avaliações” a opção “receber email com cópia da avaliação”
    And estou logado no sistema, como paciente, com login “cadupm”
    And a consulta médica foi encerrada
    When eu clico no “Sim” referente a pergunta “Deseja fazer uma avaliação da consulta?”
    And eu preencho todos os campos requeridos da avaliação sobre a consulta médica
    And submeto a avaliação
    Then sou redirecionado para a página de “Agendamentos”
    And o sistema armazena o contéudo dessa avaliação
    And o sistema envia um email com a cópia do conteúdo da avaliação feita por mim é enviado para o email de cadastro do médico de CRM “8000-CE”


Scenario: envio automático mal sucedido da avaliação da consulta para email do médico
    Given o médico de de CRM “8000-CE” NÃO habilita na página “Configuração de Conta” na aba “Avaliações” a opção “receber email com cópia da avaliação”
    And estou logado no sistema, como paciente, com login “cadupm”
    And a consulta médica foi encerrada
    When eu clico no “Sim” referente a pergunta “Deseja fazer uma avaliação da consulta?”
    And eu preencho todos os campos requeridos da avaliação sobre a consulta médica
    And submeto a avaliação
    Then sou redirecionado para a página de “Agendamentos”
    And o sistema armazena o contéudo dessa avaliação

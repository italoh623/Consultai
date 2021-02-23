Feature: Agendamento

    

    Scenario: Paciente escolhe data disponível da consulta
        Given Eu sou a paciente "Maria"
        And Eu estou na página de escolha da data
        And Eu visualizo o calendário 
        When Eu seleciono um dia no calendário que está disponível
        Then Eu sou direcionado para a página de escolha de horários
       
     Scenario: Paciente escolhe data que não possui médicos disponiveis da consulta
        Given Eu sou a paciente "Maria"
        And Eu estou na página de escolha da data
        And Eu visualizo o calendário
        When Eu seleciono um dia no calendário que não está disponível
        Then Eu recebo uma mensagem que a data que escolhi é indisponivel
       
     Scenario: Paciente escolhe especialidade
        Given Eu sou a paciente "Maria"
        And Eu estou na página de escolha da especialidade
        And Eu visualizo a lista de especialidades
        And "Clinico Geral" está entre as especialidades oferecidas
        When Eu seleciono a médica "Clinico Geral"
        Then Eu sou direcionado para a página de escolha do médico

    Scenario: Cancelamento da consulta com sucesso
        Given Eu sou a paciente "Maria"
        And Eu estou marcada com uma consulta com a médica "Dra. Daniela"
        When Eu clico no botão cancelar consulta
        Then Eu recebo uma resposta do sistema me perguntando se gostaria de remarcar a consulta

    Scenario: Cancelamento da consulta sem sucesso
        Given Eu sou a paciente "Maria"
        And Eu não estou marcada com uma consulta com a médica "Dra. Daniela"
        When Eu clico no botão cancelar consulta
        Then Eu recebo uma resposta do sistema me avisando que eu não tenho uma consulta marcada com esse médico.

    Scenario: Paciente escolhe médico
        Given Eu sou a paciente "Maria"
        And Eu estou na página de escolha do médico
        And Eu visualizo a lista de médicos
        And A médica "Dr. Daniela" está entre as médicas da lista
        When Eu seleciono a médica "Dra. Daniela"
        Then Eu sou direcionado para a página de escolha de horários

     Scenario: Médico indica horários disponiveis
        Given Eu sou a médica "Daniela"
        And Eu estou na página de horários disponiveis
        And Eu visualizo o calendário
        When Eu seleciono os dias que estou disponivel
        And clico no botão salvar
        Then O sistema me envia uma mensagem de datas confirmadas
        And ativa os horários no calendário do paciente


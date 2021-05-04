Feature: Agendamento

    

    Scenario: Paciente escolhe data disponível da consulta
        Given Eu sou a paciente "Maria"
        And Eu estou na página de escolha da data 
        When Eu insiro um dia na caixa de texto
        Then Eu vejo todos os horários disponiveis
        And Eu escolho um horário na lista
       
     Scenario: Paciente escolhe data que não possui médicos disponiveis da consulta
        Given Eu sou a paciente "Maria"
        And Eu estou na página de escolha da data
        When Eu insiro um dia na caixa de texto que não está disponível
        Then Eu recebo uma mensagem que a data que escolhi é indisponivel
       
     Scenario: Paciente escolhe especialidade
        Given Eu sou a paciente "Maria"
        And Eu estou na página de escolha da especialidade
        And Eu insiro a lista de especialidades
        And "Clinico Geral" está entre as especialidades oferecidas
        When Eu seleciono a médica "Clinico Geral"
        Then Eu sou direcionado para a página de escolha do médico

    Scenario: Paciente reescolhe especialidade
        Given Eu sou a paciente "Maria"
        And Eu estou na página de escolha da especialidade "psiquiatra"
        And Eu quero voltar a ver todos os horários disponiveis de todos as especialidade
        When Eu seleciono o botão reiniciar pesquisa
        Then Eu consigo ver  todos os horários disponiveis de todos as especialidade 

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
        And eu sou redirecionado ao calendário para cancelar uma data que eu tenha a consulta

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
        And Eu visualizo uma lista de dias e horários
        And Eu seleciono os dias e horários que estou disponivel
        When  clico no botão salvar
        Then O sistema me envia uma mensagem de datas confirmadas
        And ativa os horários no calendário do paciente


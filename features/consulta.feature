Feature: Consulta

    Scenario: Iniciar uma consulta online
        Given Eu sou a paciente “Marta”
        And Eu estou na página de consultas
        And Eu visualizo a lista de consultas marcadas
        And Eu tenho uma consulta marcada para às "13:00" horas
        And A médica ”Dr. Sarah” já está la sala de espera
        When Eu seleciono a consulta que está para iniciar
        Then Eu sou direcionado para a vídeo chamada da consulta

    Scenario: Finalizar uma consulta online
        Given Eu sou a paciente “Marta”
        And Eu estou em uma consulta com a médica ”Dr. Sarah”
        And  A médica já constou a consulta como finalizada
        When Eu seleciono o botão de sair da consulta
        Then Eu visualizo uma mensagem de que a consulta foi finalizada
        And Eu sou direcionada para a página de seleção de consultas

    Scenario: Reconectar a chamada de vídeo (falha)
        Given Eu sou a médica “Dr Sarah”
        And Eu estou em uma consulta com a paciente “Marta”
        When A paciente “Marta” perdeu a conexão
        Then Eu visualizo um contador regressivo de “2:00” minutos
        When O contador chega a zero
        And O paciente não retorna para a consulta
        Then O sistema encerra a consulta

    Scenario: Reconectar a chamada de vídeo (sucesso)
        Given Eu sou a médica “Dr Sarah”
        And Eu estou em uma consulta com a paciente “Marta”
        When A paciente “Marta” perdeu a conexão
        Then Eu visualizo um contador regressivo de “2:00” minutos
        When O paciente não retorna para a consulta
        And O contador não chegou a zero
        Then O consulta continua normalmente

    Scenario: Visualizar o histórico médico do paciente
        Given Eu sou a médica “Dr Sarah”
        And Eu estou em uma consulta com a paciente “Marta”
        And Eu vejo a opção para visualizar o histórico médico do paciente
        When Eu seleciono a opção
        Then Eu vejo o histórico médico do paciente

    Scenario: Solicitar atendimento presencial
        Given Eu sou a médica “Dr Sarah”
        And Eu estou em uma consulta com a paciente “Marta”
        And Eu vejo a opção para solicitar que o paciente marque uma consulta presencial
        When Eu seleciono a opção
        And Eu confirmo que desejo solicitar uma consulta presencial ao paciente
        Then Uma notificação é enviada para o paciente

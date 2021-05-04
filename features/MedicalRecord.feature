Feature: medical record
    As usuario médico
    I want to adicionar, editar e remover os prontuarios dos meus pacientes
    So that posso gerar um prontuario médico completo que ajuda a mim e a outros médicos no diagnóstico de um paciente específico

    Scenario: listar meus pacientes
        Given estou na pagina de "Home medical"
        And tenho 2 pacientes de nome "Italo" e "Cadu"
        When eu vou para a pagina de "Meus Pacientes"
        Then eu posso ver os pacientes "Italo" e "Cadu"

    Scenario: ver prontuario
        Given estou na pagina de "Home medical" 
        And tenho um paciente de nome "Cadu" 
        When eu abro o prontuario do paciente "Cadu"
        Then sou direcionado para a pagina de "Prontuario" do paciente "Cadu"
        And posso ver as informacoes de "Nome", "email", "Idade"
        And posso ver a lista de "Imagens" e a lista de "Consultas" de paciente "Cadu"

    Scenario: Adicionar ficha de prontuario
        Given estou na pagina de "Consulta" com o Paciente "Cadu"
        And "Cadu" esta cadastrado como meu paciente
        When eu abro a ficha de prontuario
        And preencho o campo de "Queixas" com "Sentindo muita enxaqueca e dor no corpo"
        And preencho o campo de "Doencas Previas" com "Nenhuma"
        And preencho o campo de "Medicacoes em uso" com "Dipirona"
        And preencho o campo de "Antecedentes Familiares" com "Pai com problema de pressao alta"
        And preencho o campo de "Peso" com "80"
        And preencho o campo de "Altura" com "1.75"
        And preencho o campo de "Pressao arterial" com "120x80"
        And preencho o campo de "Hipotese Diagnostica" com "Virose leve"
        And preencho o campo de "Conduta" com "Paciente deve repousar e continuar a tomar a medicacao, alem de ir ver um oftalmologista"
        When eu clico em "Salvar consulta"
        Then a ficha de prontuario eh salva no sistema
        And eu posso ver a nova ficha da pagina de "Prontuario" do paciente "Cadu"

    Scenario: Calculo de IMC na ficha medica
        Given estou na pagina de "Consulta" com o Paciente "Cadu"
        And "Cadu" esta cadastrado como meu paciente
        When eu abro a ficha de prontuario
        And preencho o campo de "Peso" com "80"
        And preencho o campo de "Altura" com "1.75"
        Then eu posso ver o campo de IMC com o valor calculado
    
    Scenario: Falha de calculo de IMC na ficha medica
        Given estou na pagina de "Consulta" com o Paciente "Cadu"
        And "Cadu" esta cadastrado como meu paciente
        When eu abro a ficha de prontuario
        And preencho o campo de "Peso" com "80"
        And preencho o campo de "Altura" com "um metro e 90"
        Then eu nao consigo ver o campo de IMC na ficha de prontuario
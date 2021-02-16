Cenário: envio automático da avaliação da consulta para email do médico

Dado o médico de de CRM “8000-CE” habilita na página “Configuração de Conta” na aba “Avaliações” a opção “receber email com cópia da avaliação”
E estou logado no sistema, como paciente, com login “cadupm”
E a consulta médica foi encerrada
Quando eu clico no “Sim” referente a pergunta “Deseja fazer uma avaliação da consulta?”
E eu preencho todos os campos requeridos da avaliação sobre a consulta médica
E submeto a avaliação
Então sou redirecionado para a página de “Agendamentos”
E o sistema envia um email com a cópia do conteúdo da avaliação feita por mim é enviado para o email de cadastro do médico de CRM “8000-CE”
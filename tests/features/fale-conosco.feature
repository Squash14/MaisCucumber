# language: pt

Funcionalidade: Fale conosco 
  Envio de mensagens fale conosco válidas 
  Validações de campo 
  Validações de regra de negócio

  Contexto:
    Dado abrir a url Vivo Mais Com Vc
  
  Cenário: Envio de Mensagens Home Deslogada
    Quando clico no link "Fale conosco"
    E envio uma mensagem de fale conosco de "Elogio"
    Então visualizarei a mensagem de sucesso "E-mail enviado com sucesso. Responderemos em até 2 dias úteis."

  @Smoke @Reg 
  Esquema do Cenário: Enviar mensagens fale conosco deslogada 
    Quando clico no link "Fale conosco"
    E envio uma mensagem de fale conosco de <Tipo>
    Então visualizarei a mensagem de sucesso "E-mail enviado com sucesso. Responderemos em até 2 dias úteis."
  Exemplos:
  |   Tipo                                   |
  |	"Elogio"                                 |
  |	"Reclamação"                             |
  |	"Sugestão"                               |
  |	"Agradecimento"                          |
  |	"Cadastro"                               |
  |	"Senha"                                  |
  |	"Acesso"                                 |
  |	"Catálogo de Prêmios"                    |
  # |	"Dúvida sobre apuração da campanha"      |
  # |	"Dúvida sobre pontuação da campanha"     |
  # |	"Dúvida sobre a mecânica da campanha"    |
  |	"Outros"								                 |
  
  @Reg 
  Cenário: Não preencher nenhum campo 
    Quando clico no link "Fale conosco"
    E clico no botão "Enviar"
    Então visualizarei a mensagem de erro "Informe o seu CPF"            
    E visualizarei a mensagem de erro "Informe o telefone"          
    E visualizarei a mensagem de erro "Informe o seu Nome Completo"
    E visualizarei a mensagem de erro "Informe o seu e-mail" 
    E visualizarei a mensagem de erro "Informe um assunto"
    E visualizarei a mensagem de erro "Informe uma mensagem"

  @Reg
  Cenário: Botão voltar 
    Quando clico no link "Fale conosco"
    E clico no link "VOLTAR"
    Então visualizarei a home deslogada
  


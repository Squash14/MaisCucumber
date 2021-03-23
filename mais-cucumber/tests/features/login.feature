# language: pt

Funcionalidade: Login  
  Autenticar usuários válidos 
  Realizar validações de campo
  Realizar validações de regra de negócio

  Contexto:
    Dado abrir a url Vivo Mais Com Vc
    
  @Smoke @Reg @Dev
  Esquema do Cenário: Efetuar login     
    Quando autenticar um usuario <Perfil>
    Então  vizualizarei a home do portal
  Exemplos:
  |  	Perfil         		|
  | Master  				    |
  |	GerenteDivisao      |
  |	GerenteSecao        |
  |	GerenteNegocios     |
  |	Analista            |
  |	Consultor           |
  |	Proprietário        |

  @Reg 
  Esquema do Cenário: Validações do fluxo de login
    Quando autenticar um usuario <Campo>
    Então visualizarei a mensagem de erro <Mensagem>
  Exemplos:
  |  	Campo         		| Mensagem                                  |
  | SenhaInvalida       | "01 - Não foi possível efetuar o login."  |
  
  @Reg  
  Cenário: Validação do Campo Senha
    Quando autenticar sem preecher o campo Senha
    Então visualizarei a mensagem de erro "Informe a senha "
  @Reg 
  Cenário: Validação do Campo CPF
    Quando autenticar sem preecher o campo CPF
    Então visualizarei a mensagem de erro "Informe o CPF "
  
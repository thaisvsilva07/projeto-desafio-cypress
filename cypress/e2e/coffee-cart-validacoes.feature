#utf-8
#language: pt

Funcionalidade: Checkout - validacoes
  Como um visitante do site
  Quero finalizar uma compra
  Para garantir validacoes do formulario

  Esquema do Cenario: Impedir pagamento com dados invalidos no checkout
    Dado que o visitante acessa o Coffee Cart
    Quando seleciona um cafe
    E abre o checkout
    E preenche o nome "<nome>"
    E preenche o email "<email>"
    E submete o pagamento
    Entao valida o erro "<erro>"

  Exemplos:
    | nome  | email               | erro             |
    |       | thais@accenture.com | nomeObrigatorio  |
    | Thais |                     | emailObrigatorio |
    | Thais | email-invalido      | emailInvalido    |

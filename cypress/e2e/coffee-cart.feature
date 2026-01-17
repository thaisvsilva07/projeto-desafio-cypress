#utf-8
#language: pt

Funcionalidade: Compra de café no Coffee Cart
  Como um visitante do site
  Ele deseja selecionar cafés
  Para finalizar a compra com sucesso

  Cenario: Finalizar compra com sucesso
    Dado que o visitante acessa o Coffee Cart
    Quando seleciona tres tipos de cafe diferentes
    E aceita a oferta promocional
    E valida o total correto no carrinho
    E remove um item do carrinho
    E realiza o checkout
    Entao valida a mensagem de sucesso final

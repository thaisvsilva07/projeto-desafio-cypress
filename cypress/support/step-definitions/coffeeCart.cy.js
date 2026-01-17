import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

import HomePage from '../pages/home.page'
import CartPage from '../pages/cart.page'
import CheckoutPage from '../pages/checkout.page'

const precosCafe = {
  "Espresso": 10.00,
  "Espresso Macchiato": 12.00,
  "Cappuccino": 19.00,
  "Mocha": 8.00,
  "Flat White": 18.00,
  "Americano": 7.00,
  "Cafe Latte": 16.00,
  "Espresso Con Panna": 14.00,
  "Cafe Breve": 15.00
}

let dados
let cafesSelecionados = []

before(() => {
  cy.fixture('coffees').then((fixture) => {
    dados = fixture
  })
})

Given('que o visitante acessa o Coffee Cart', () => {
  cy.visit('/')
})

When('seleciona tres tipos de cafe diferentes', () => {
  dados.coffees.forEach((coffee) => {
    HomePage.adicionarCafe(coffee)
    cafesSelecionados.push(coffee)
  })
})

And('aceita a oferta promocional', () => {
  HomePage.aceitarOferta()
  cafesSelecionados.push(dados.promoCoffee)
})

Then('valida o total correto no carrinho', () => {
  const totalEsperado = cafesSelecionados.reduce((total, cafe) => {
    if (cafe === 'Mocha') {
      return total + 4.00
    }
    return total + precosCafe[cafe]
  }, 0)

  CartPage.validarTotal(totalEsperado.toFixed(2))
})

And('remove um item do carrinho', () => {
  CartPage.abrirPreviewCarrinho()
  CartPage.removerPrimeiroItem()
  cafesSelecionados.shift()
})

And('realiza o checkout', () => {
  CartPage.abrirCheckout()

  CheckoutPage.validarTelaCheckout()
  CheckoutPage.preencherNome(Cypress.env('name'))
  CheckoutPage.preencherEmail(Cypress.env('email'))
  CheckoutPage.submeterPagamento()
})

Then('valida a mensagem de sucesso final', () => {
  CheckoutPage.validarMensagemSucesso()
})

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

import HomePage from '../pages/home.page'
import CheckoutPage from '../pages/checkout.page'

Given('que o visitante acessa o Coffee Cart', () => {
  cy.visit('/')
})

When('seleciona um cafe', () => {
  HomePage.adicionarCafe('Espresso')
})

And('abre o checkout', () => {
  HomePage.abrirCheckout()
  CheckoutPage.validarTelaCheckout()
})

And('preenche o nome {string}', (nome) => {
  if (nome && nome.trim()) {
    CheckoutPage.preencherNome(nome)
  }
})

And('preenche o email {string}', (email) => {
  if (email && email.trim()) {
    CheckoutPage.preencherEmail(email)
  }
})

And('submete o pagamento', () => {
  CheckoutPage.submeterPagamento()
})

Then('valida o erro {string}', (erro) => {
  if (erro === 'nomeObrigatorio') {
    cy.get('#name').then(($el) => {
      expect($el[0].checkValidity()).to.eq(false)
    })
    return
  }

  if (erro === 'emailObrigatorio') {
    cy.get('#email').then(($el) => {
      expect($el[0].checkValidity()).to.eq(false)
    })
    return
  }

  if (erro === 'emailInvalido') {
    cy.get('#email').then(($el) => {
      expect($el[0].checkValidity()).to.eq(false)
    })
    return
  }

  throw new Error(`Erro não mapeado: ${erro}`)
})

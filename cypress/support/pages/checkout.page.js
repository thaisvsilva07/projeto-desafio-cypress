class CheckoutPage {

  validarTelaCheckout() {
    cy.contains('h1', 'Payment details')
      .should('be.visible')
  }

  preencherNome(nome) {
    cy.get('#name')
      .should('be.visible')
      .type(nome)
  }

  preencherEmail(email) {
    cy.get('#email')
      .should('be.visible')
      .type(email)
  }

  submeterPagamento() {
    cy.get('#submit-payment')
      .should('be.visible')
      .click()
  }

  validarMensagemSucesso() {
    cy.contains(
      'Thanks for your purchase. Please check your email for payment.',
      { timeout: 10000 }
    ).should('be.visible')
  }
}

export default new CheckoutPage()

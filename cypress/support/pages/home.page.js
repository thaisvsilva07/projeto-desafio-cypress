class HomePage {

  adicionarCafe(nomeCafe) {
    cy.contains('li', nomeCafe)
      .should('be.visible')
      .click()
  }

  aceitarOferta() {
    cy.contains('Yes, of course!')
      .should('be.visible')
      .click()
  }

  validarTotal(valor) {
    cy.contains('button', `Total: $${valor}`)
      .should('be.visible')
  }

  abrirPreviewCarrinho() {
    cy.contains('button', 'Total')
      .trigger('mouseover')
  }

  removerPrimeiroItem() {
    cy.contains('button', '-')
      .first()
      .click()
  }

  abrirCheckout() {
    cy.get('button.pay')
      .should('be.visible')
      .click()
  }
}

export default new HomePage()

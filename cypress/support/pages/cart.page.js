class CartPage {

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

export default new CartPage()

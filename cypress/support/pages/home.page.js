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

}

export default new HomePage()

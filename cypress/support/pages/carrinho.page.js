class Carrinho {
  atualizaCarrinho(valor) {
    cy.get(".quantity > .input-text").clear().type(valor);
    cy.get(".pull-right > .btn").click();
  }

  validaMensagemAdicionado(mensagem) {
    // Resultado esperado= Confirma a adição do item ao carrinho
    cy.get(".woocommerce-message").should('include.text', mensagem);
    cy.get('.product-name > a').should('have.text', 'Augusta Pullover Jacket - XS, Blue');
  }

  removeItem() {
    cy.get(".remove > .fa").click();
  }
}
export default new Carrinho();

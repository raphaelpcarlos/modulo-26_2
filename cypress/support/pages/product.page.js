/// <reference types= "cypress" />

class Product {
  compraProduto() {
    cy.get('.button-variable-item-XS').click();
    cy.get('.button-variable-item-Blue').click();
    cy.get(".single_add_to_cart_button").click();
  }

  validaMensagemAdicionado(mensagem) {
    cy.get(".woocommerce-message").should('be.visible');
     // Resultado esperado= Confirma a adição do item ao carrinho
    cy.get('.product_title').should('contain', mensagem);
  }

  irParaCarrinho() {
    cy.get('.woocommerce-message > .button').click();
  }
}
export default new Product();

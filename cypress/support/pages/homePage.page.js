class HomePage {
  selecionaMinhaConta() {
    cy.get(".icon-user-unfollow").click();
  }
}
export default new HomePage();

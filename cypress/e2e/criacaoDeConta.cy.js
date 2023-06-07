import { faker } from "@faker-js/faker";
import homePagePage from "../support/pages/homePage.page";
import minhaContaPage from "../support/pages/minhaConta.page";

let dados;
let emailJaCadastrado;

describe("Criação de nova conta", () => {
  beforeEach(() => {
    cy.visit("/");
    homePagePage.selecionaMinhaConta();
    cy.fixture("dados.json").then((p) => {
      dados = p;
    });
  });

  it("deve criar nova conta com sucesso", () => {
    let email = faker.internet.email();
    emailJaCadastrado = email;
    minhaContaPage.preencheEmailSenha(email, dados.senha);
    minhaContaPage.verificaSucesso(email);
  });

  it.only("deve impedir criação de conta com email inválido", () => {
    let email = "teste";
    minhaContaPage.preencheEmailSenha(email, dados.senha);
    minhaContaPage.verificaFalha();
  });

  it("deve impedir criação de conta com senha em branco", () => {
    let email = faker.internet.email();
    minhaContaPage.preencheEmail(email);
    minhaContaPage.mensagemDeErro();
  });

  it("deve exibir mensagem de email já cadastrado", () => {
    minhaContaPage.preencheEmailSenha(emailJaCadastrado, dados.senha);
    minhaContaPage.mensagemDeErro();
  });
});

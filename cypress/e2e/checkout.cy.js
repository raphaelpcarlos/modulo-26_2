import { faker } from "@faker-js/faker";

describe("Checkout", () => {
  it("deve realizar checkout com sucesso", () => {
    let nome = faker.name.firstName;
    let sobrenome = faker.name.lastName;
    let pais = faker.address.countryCode;
    let rua = faker.address.streetName;
    let cidade = faker.address.city;
    let estado = faker.address.countryCode;
    let cep = faker.address.zipCode;
    let fone = faker.phone.number;
    let email = faker.internet.email();
    cy.adicionaProduto();
    cy.checkout(nome, sobrenome, pais, rua, cidade, estado, cep, fone, email);
  });
});

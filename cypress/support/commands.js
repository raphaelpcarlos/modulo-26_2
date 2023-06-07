Cypress.Commands.add("adicionaProduto", () => {
  const fd = new FormData();
  fd.append("product_sku", "");
  fd.append("product_id", "8787");
  fd.append("quantity", "1");

  cy.request({
    url: "/?wc-ajax=add_to_cart",
    method: "POST",
    body: fd,
  }).then((resp) => {
// Resultado esperado= Confirma o status 200 do retorno da integração
    expect(resp.status).to.eq(200);
  });
});

Cypress.Commands.add("checkout", (nome, sobrenome, pais, rua, cidade, estado, cep, fone, email) => {
  const fd = new FormData();
  fd.append("billing_first_name", nome);
  fd.append("billing_last_name", sobrenome);
  fd.append("billing_company", "");
  fd.append("billing_country", pais);
  fd.append("billing_address_1", rua);
  fd.append("billing_address_2", "");
  fd.append("billing_city", cidade);
  fd.append("billing_state", estado);
  fd.append("billing_postcode", cep);
  fd.append("billing_phone", fone);
  fd.append("billing_email", email);
  fd.append("account_password", "");
  fd.append("order_comments", "");
  fd.append("payment_method", "cod");
  fd.append("terms", "on");
  fd.append("terms-field", "1");
  fd.append("woocommerce-process-checkout-nonce", "b9a698393b");
  fd.append("_wp_http_referer", "/?wc-ajax=update_order_review");

  cy.request({
    url: "/?wc-ajax=checkout",
    method: "POST",
    body: fd,
  }).then((resp) => {
 // Resultado esperado= Confirma o status 200 do retorno da integração
    expect(resp.status).to.eq(200);
  });
}
);

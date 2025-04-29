// GET /orders avec authentification

import "./helpers/loginHelper.js";

describe("GET /orders avec authentification", () => {
  it("devrait renvoyer la liste du panier de l'utilisateur connecté", () => {
    cy.loginAndGetToken().then((token) => {
      cy.request({
        method: "GET",
        url: "http://localhost:8081/orders",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("id");
        expect(res.body).to.have.property("firstname");
      });
    });
  });
});

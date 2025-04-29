import '../Api-Mary.cy/helpers/loginHelper.js';

describe("Panier - Ajouter produit inexistant", () => {
  it("devrait retourner une erreur si le produit n'existe pas", () => {
    cy.loginAndGetToken().then((token) => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8081/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          id: 9999, // ID supposé inexistant
          quantity: 1
        },
        failOnStatusCode: false
      }).then((res) => {
        expect([400, 404]).to.include(res.status);
      });
    });
  });
});

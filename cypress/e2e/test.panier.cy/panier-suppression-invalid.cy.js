import '../Api-Mary.cy/helpers/loginHelper.js';

describe("Panier - Suppression produit inexistant", () => {
  it("devrait retourner une erreur si le produit à supprimer n'existe pas", () => {
    cy.loginAndGetToken().then((token) => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:8081/orders/9999/delete', // ID ficticio
        headers: {
          Authorization: `Bearer ${token}`
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 404, 500]); // según cómo lo maneje el backend
      });
    });
  });
});

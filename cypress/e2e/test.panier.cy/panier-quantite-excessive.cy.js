import '../Api-Mary.cy/helpers/loginHelper.js';

describe("Panier - Ajouter quantité excessive", () => {
  it("devrait refuser l'ajout d'une quantité très grande", () => {
    cy.loginAndGetToken().then((token) => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8081/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          id: 3, // Asegúrate de que este producto existe
          quantity: 99999
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });
});

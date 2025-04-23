import '../Api-Mary.cy/helpers/loginHelper.js';

describe("Panier - Ajouter quantité nulle", () => {
  it("devrait refuser l'ajout d'une quantité nulle", () => {
    cy.loginAndGetToken().then((token) => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8081/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          id: 3, // Asegúrate de que este producto existe
          quantity: -1
        },
        failOnStatusCode: false
      }).then((res) => {
        console.log('RESPONSE BODY:', res.body); // para capturar el mensaje de error exacto
  expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });
});
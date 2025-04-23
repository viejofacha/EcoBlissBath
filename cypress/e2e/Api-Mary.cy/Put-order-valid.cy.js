// PUT /orders/add avec produit disponible

import './helpers/loginHelper';

describe("PUT /orders/add avec produit en stock", () => {
  it("devrait ajouter le produit correctement au panier", () => {
    cy.loginAndGetToken().then((token) => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8081/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          product: 3,
          quantity: 1
        }
        
      }).then((res) => {
        expect(res.status).to.eq(200);
      });
    });
  });
});


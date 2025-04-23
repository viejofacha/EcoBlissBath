// PUT /orders/add avec produit en rupture de stock

import './helpers/loginHelper.js';

describe("PUT /orders/add avec produit en rupture de stock", () => {
  it("devrait retourner une erreur si le stock est insuffisant", () => {
    cy.loginAndGetToken().then((token) => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8081/orders/add',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          id: 99, // id fictif supposé hors stock
          quantity: 1
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 404]);
      });
    });
  });
});


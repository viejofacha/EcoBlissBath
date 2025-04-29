// POST /reviews pour ajouter un commentaire

import './helpers/loginHelper';

describe("POST /reviews pour un produit", () => {
  it("devrait ajouter un commentaire pour le produit avec succès", () => {
    cy.loginAndGetToken().then((token) => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/reviews',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          title: "Très bon produit",
          comment: "Super savon !",
          rating: 5
        }
      }).then((res) => {
        expect(res.status).to.eq(200);
      });
    });
  });
});

describe('GET /products/:id - Produit inexistant', () => {
    it('devrait échouer si le produit avec cet ID n’existe pas', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8081/products/9999',
        failOnStatusCode: false, // important pour ne pas faire échouer Cypress sur 404
      }).then((res) => {
        expect([400, 404]).to.include(res.status);
      });
    });
  });
  
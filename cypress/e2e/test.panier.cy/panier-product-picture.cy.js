import '../Api-Mary.cy/helpers/loginHelper.js';
describe('Panier - Vérification visuelle du contenu', () => {
    it("devrait afficher l'image du produit dans le panier", () => {
      cy.loginAndGetToken().then((token) => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:8081/orders',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.an('object');
          

          if (res.body.length > 0) {
            const product = res.body[0];
            expect(product).to.have.property('picture');
            expect(product.picture).to.match(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/);
          } else {
            cy.log('Le panier est vide');
          }
        });
      });
    });
  });
  
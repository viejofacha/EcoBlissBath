// GET /products/2 pour voir le détail d'un produit

describe("GET /products/:id", () => {
  it("devrait renvoyer un produit existant avec succès", () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/products/3',
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('id', 3,4,5);
      expect(res.body).to.have.property('name');
      expect(res.body).to.have.property('price');
    });
  });
});

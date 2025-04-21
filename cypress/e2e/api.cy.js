describe('Tests API principales', () => {
    it('GET /products debería devolver 200', () => {
      cy.request('http://localhost:8081/products').then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.length.greaterThan(0);
      });
    });
  
    it('GET /products/random debería devolver 200', () => {
      cy.request('http://localhost:8081/products/random').then((res) => {
        expect(res.status).to.eq(200);
      });
    });
  
    it('POST /login con datos vacíos debería fallar', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/login',
        failOnStatusCode: false,
        body: { email: '', password: '' },
      }).then((res) => {
        expect(res.status).to.eq(400);

      });
    });
  });
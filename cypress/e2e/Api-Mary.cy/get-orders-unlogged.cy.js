// GET /orders sans authentification

describe("GET /orders sans authentification", () => {
    it("devrait renvoyer 401 si l'utilisateur n'est pas connecté", () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8081/orders',
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(401); // Marie attendait 403, mais l'API renvoie 401
      });
    });
  });
  
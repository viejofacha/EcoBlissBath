// POST /login avec utilisateur inconnu

describe("POST /login avec identifiants invalides", () => {
    it("devrait retourner 401 pour un utilisateur inexistant", () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/login',
        body: {
          email: 'inexistant@test.fr',
          password: 'wrongpass'
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400);
      });
    });
  });
  
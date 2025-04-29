describe('Inscription - Mot de passe vide', () => {
    it("devrait échouer si le mot de passe est vide", () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/register',
        body: {
          firstname: 'Jean',
          lastname: 'Dupont',
          email: 'jean@test.fr',
          password: '',
          confirmPassword: '',
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });
  
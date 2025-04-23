describe('Inscription - Email vide', () => {
    it("devrait échouer si l'email est vide", () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/register',
        body: {
          firstname: 'Jean',
          lastname: 'Dupont',
          email: '',
          password: 'testpass',
          confirmPassword: 'testpass',
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });
  
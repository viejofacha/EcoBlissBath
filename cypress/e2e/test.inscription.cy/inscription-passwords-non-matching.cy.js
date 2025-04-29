describe('Inscription - Mots de passe différents', () => {
    it("devrait échouer si les mots de passe ne correspondent pas", () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/register',
        body: {
          firstname: 'Jean',
          lastname: 'Dupont',
          email: 'nonmatch@test.fr',
          password: 'motdepasse1',
          confirmPassword: 'motdepasse2',
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });
  
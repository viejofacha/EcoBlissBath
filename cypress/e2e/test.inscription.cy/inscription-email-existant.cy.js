describe('Inscription - Email déjà existant', () => {
    it("devrait échouer si l'email est déjà utilisé", () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/register',
        body: {
          firstname: 'Jean',
          lastname: 'Dupont',
          email: 'aleandro67@gmail.com', // el correo que usaste hoy
          password: 'D2R6Z3jVWdSFDks',
          confirmPassword: 'D2R6Z3jVWdSFDks',
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 409]);
      });
    });
  });
  
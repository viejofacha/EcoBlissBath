const emailsInvalides = ['test@', '@test.fr', 'test.test'];

describe('Inscription - Email invalide', () => {
  emailsInvalides.forEach((email) => {
    it(`devrait échouer avec un email invalide : ${email}`, () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/register',
        body: {
          firstname: 'Jean',
          lastname: 'Dupont',
          email,
          password: 'testpass',
          confirmPassword: 'testpass',
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });
});

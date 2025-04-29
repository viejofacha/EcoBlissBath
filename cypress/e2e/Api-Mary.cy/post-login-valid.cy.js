describe('POST /login avec identifiants valides', () => {
    it('devrait retourner 200 et un token', () => {
      const randomEmail = `test${Math.floor(Math.random() * 10000)}@test.fr`;
      const password = 'testtest';
  
      // Étape 1 : Création de l'utilisateur
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/register',
        body: {
          firstname: 'Jean',
          lastname: 'Dupont',
          email: randomEmail,
          plainPassword: {
            first: password,
            second: password
          }
        }
        ,
        failOnStatusCode: false
      }).then((res) => {
        console.log('REGISTER STATUS:', res.status);
        console.log('REGISTER BODY:', res.body);
        expect(res.status).to.eq(200); // ou 200 selon votre API
      });
  
      // Étape 2 : Connexion
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/login',
        body: {
          username: randomEmail,
          password
        }
        ,
        failOnStatusCode: false
      }).then((res) => {
        console.log('LOGIN STATUS:', res.status);
        console.log('LOGIN BODY:', res.body);
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('token');

      });
    });
  });
  
  
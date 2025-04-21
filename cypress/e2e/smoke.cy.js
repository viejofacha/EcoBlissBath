describe('Smoke test', () => {
    it('Carga inicio, navega, y verifica header con usuario conectado', () => {
      cy.visit('/');
      cy.contains('Connexion').click();
  
      // Login con usuario existente
      cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
      cy.get('input[type="password"]').type('testtest');
      cy.get('[data-cy="login-submit"]').click();
  
      // Verifica que estamos en inicio y que aparece "Mon panier"
      cy.contains('Connexion').should('be.visible');
      cy.contains('Mon panier').should('be.visible');
    });
  });
  
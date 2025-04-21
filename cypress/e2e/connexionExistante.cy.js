describe('Connexion avec un utilisateur existant', () => {
    it('Permet à un utilisateur existant de se connecter et voir Mon panier', () => {
      cy.visit('/');
  
      // Va à la page de connexion
      cy.contains('Connexion').click();
  
      // Rellenar el formulario de login
      cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
      cy.get('input[type="password"]').type('testtest');
      cy.get('[data-cy="login-submit"]').click();
  
      // Verifica que se ha salido de /login
      cy.url().should('not.include', '/login');
  
      // Verifica que aparece Déconnexion
      cy.contains('Déconnexion').should('be.visible');
  
      // Verifica que aparece Mon panier
      cy.contains('Mon panier').should('be.visible');
    });
  });
  
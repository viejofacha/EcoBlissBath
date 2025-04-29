describe('Connexion avec un utilisateur existant', () => {
    it('Permet à un utilisateur existant de se connecter et voir Mon panier', () => {
      cy.visit('/');
  
      // Accéder à la page de connexion
      cy.contains('Connexion').click();
  
      // Remplissez le formulaire de connexion
      cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
      cy.get('input[type="password"]').type('testtest');
      cy.get('[data-cy="login-submit"]').click();
  
      // Vérifiez que vous avez quitté /login
      cy.url().should('not.include', '/login');
  
      // Vérifiez que Déconnexion apparaît
      cy.contains('Déconnexion').should('be.visible');
  
      // Vérifiez que Mon panier apparaît
      cy.contains('Mon panier').should('be.visible');
    });
  });
  
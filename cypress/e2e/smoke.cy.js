describe('Smoke test', () => {
    it('Démarrage de la charge, naviguer, et vérifier header avec utilisateur connecté', () => {
      cy.visit('/');
      cy.contains('Connexion').click();
  
      // Connectez-vous avec un utilisateur existant
      cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
      cy.get('input[type="password"]').type('testtest');
      cy.get('[data-cy="login-submit"]').click();
  
      // Vérifiez que nous sommes sur l'écran d'accueil et que « Mon panier » apparaît.
      cy.contains('Connexion').should('be.visible');
      cy.contains('Mon panier').should('be.visible');
    });
  });
  
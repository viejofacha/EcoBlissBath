describe('Ajout au panier', () => {
    it("Permet à un utilisateur connecté d'ajouter un produit au panier", () => {
      cy.visit('/');
      cy.contains('Connexion').click();
  
      // Connexion de l’utilisateur
      cy.get('[data-cy="login-input-username"]').type('test2@test.fr');
      cy.get('input[type="password"]').type('testtest');
      cy.get('[data-cy="login-submit"]').click();
  
      // Vérifie qu’on est connecté
      cy.contains('Déconnexion').should('be.visible');
  
      // Aller à la galerie de produits
      cy.contains('Produits').click();
  
      // Attendre que les produits soient affichés
      cy.contains('Consulter').first().click(); // Clique sur le premier produit
  
      // Ajouter au panier
      cy.contains('Ajouter au panier').click();
  
      // Vérifier que le produit a bien été ajouté
      cy.contains('Mon panier').click();
      cy.contains("Chuchotements d'été").should('exist'); // ✅

    });
  });
  
  
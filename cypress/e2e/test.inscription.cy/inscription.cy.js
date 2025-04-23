describe('Inscription utilisateur', () => {
  it('Permet de créer un nouvel utilisateur', () => {
    cy.visit('/');

    // Accès à la page d'inscription
    cy.contains('Inscription').click();

    // Générer un email unique à chaque exécution
    const randomEmail = `test${Math.floor(Math.random() * 10000)}@test.fr`;

    // Remplir le formulaire
    cy.get('input').eq(0).type('Jean');              // Nom
    cy.get('input').eq(1).type('Dupont');            // Prénom
    cy.get('input').eq(2).type(randomEmail);         // Email
    cy.get('input').eq(3).type('testtest');          // Mot de passe
    cy.get('input').eq(4).type('testtest');          // Confirmation

    // Soumettre le formulaire
    cy.contains("S'inscrire").click();

    // Vérifier que l'utilisateur est redirigé vers la page de connexion
    cy.contains('Connexion').should('be.visible');
  });
});





  
  
  
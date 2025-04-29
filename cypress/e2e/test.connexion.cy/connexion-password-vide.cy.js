describe("Connexion - Mot de passe vide", () => {
    it("devrait échouer si le mot de passe est vide", () => {
      cy.request({
        method: "POST",
        url: "http://localhost:8081/login",
        body: {
          email: "testuser@test.fr",
          password: "",
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });
  
describe("Connexion - Mot de passe incorrect", () => {
    it("devrait échouer si le mot de passe est incorrect", () => {
      cy.request({
        method: "POST",
        url: "http://localhost:8081/login",
        body: {
          email: "aleandro67@gmail.com", // usuario válido
          password: "motdepasseFAUX",
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(400);

      });
    });
  });
  
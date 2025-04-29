describe("Connexion - Email vide", () => {
    it("devrait échouer si l'email est vide", () => {
      cy.request({
        method: "POST",
        url: "http://localhost:8081/login",
        body: {
          email: "",
          password: "motdepasse123",
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });
  
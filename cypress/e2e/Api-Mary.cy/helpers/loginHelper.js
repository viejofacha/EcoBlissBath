Cypress.Commands.add('loginAndGetToken', () => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8081/login',
    body: {
      username: 'test2@test.fr',
      password: 'testtest'
    },
    failOnStatusCode: false
  }).then((res) => {
    expect(res.status).to.eq(200)
    return res.body.token
  });
});

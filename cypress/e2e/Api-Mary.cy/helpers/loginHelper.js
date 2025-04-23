Cypress.Commands.add('loginAndGetToken', () => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8081/login',
    body: {
      username: 'aleandro67@gmail.com',
      password: 'D2R6Z3jVWdSFDks'
    },
    failOnStatusCode: false
  }).then((res) => {
    expect(res.status).to.eq(200)
    return res.body.token
  });
});

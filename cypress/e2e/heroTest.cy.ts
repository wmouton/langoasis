describe("template spec", () => {
  it("Contains correct header title text", () => {
    cy.visit("/");

    cy.get('[data-test="welcome-title"]').should("exist")
    .should('contain.text', 'LangOasis');

    cy.get('[data-test="welcome-description"]').should("exist")
    .should('contain.text', 'Where you can discover and explore popular and obscure programming languages.')
  });
});

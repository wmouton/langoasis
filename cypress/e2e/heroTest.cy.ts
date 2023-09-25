describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="cypress-title"]').should("exist")
    .should('have.text', 'LangOasis');

    cy.get('[data-testid="cypress-subtitle"]').should("exist")
    .should('have.text', 'Where you can discover and explore popular and obscure programming languages.')
  });
});

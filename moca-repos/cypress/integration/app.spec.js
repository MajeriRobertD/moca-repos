describe('Navigation', () => {
  it('should navigate to the landing page', () => {
    cy.visit('http://localhost:3000/');
  });
});

describe('Search for a user', () => {
  it('should navigate to a persons page', () => {
    cy.get('#userName').type('Andrei');
    cy.get('#body-form').submit();
  });
});

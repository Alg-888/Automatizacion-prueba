describe('Login Page Tests', () => {

  it('should display the login form', () => {
      cy.visit('http://localhost:3000/login'); 
      cy.get('input[name="usernameOrEmail"]').should('be.visible');
      cy.get('input[name="contraseña"]').should('be.visible');
      cy.get('input[type="submit"]').should('be.visible');
  });


  it('should login successfully with valid credentials', () => {
      cy.visit('http://localhost:3000/login');

      
      cy.get('input[name="usernameOrEmail"]').type('pinotangarifejuanmanuel@gmail.com');
      cy.get('input[name="contraseña"]').type('12345678');

      
      cy.get('input[type="submit"]').click();

      
      cy.url().should('include', '/dashboard');
  });


  it('should display an error with invalid credentials', () => {
      cy.visit('http://localhost:3000/login');

      cy.get('input[name="usernameOrEmail"]').type('wronguser@example.com');
      cy.get('input[name="contraseña"]').type('WrongPassword');

      
      cy.get('input[type="submit"]').click();


      cy.get('p').should('contain', 'Error');
  });
});

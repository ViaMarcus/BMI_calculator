describe('User can check their BMI', () => {
    it('user can enter weight and hegiht', () =>{
        cy.visit('http://localhost:3001');
        cy.contains('BMI Calculator');
        cy.get('#weight').type('69');
        cy.get('#height').type('169');
        cy.get('#submit').click();
        cy.get('#result').should('be.visible');
    })

})
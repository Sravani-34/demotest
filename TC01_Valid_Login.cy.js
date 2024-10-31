describe('Verify Login Functionality',()=>{
   
      it('verify Login Functionality with Valid Credentials',()=>{
      cy.visit('https://demo.testfire.net/index.jsp'); 
      cy.url().should('eql','https://demo.testfire.net/index.jsp');//Assertion
      cy.url().should('contain','testfire');//Assertion
      cy.get('font').click();

      //Assertion
       cy.url().should('eql','https://demo.testfire.net/login.jsp');
       cy.url().should('contain','login')
       cy.get('#login > table > tbody > :nth-child(1) > :nth-child(1)').should('be.visible');
       cy.get('#login > table > tbody > :nth-child(2) > :nth-child(1)').should('be.visible');
       cy.get(':nth-child(3) > :nth-child(2) > input').should('be.visible');
       cy.get(':nth-child(3) > :nth-child(2) > input').should('not.be.disabled');

      //Enter valid user name and password 
       cy.get('#uid').type('admin');
       cy.get('#passw').type('admin',{log:false});
       cy.get(':nth-child(3) > :nth-child(2) > input').click();
      //Assertion - After login
      cy.url().should('eql','https://demo.testfire.net/bank/main.jsp');
      cy.url().should('contain','main');
      cy.contains('Hello Admin User');
      cy.get('#HyperLink1 > img').should('be.visible');
       
    })
})



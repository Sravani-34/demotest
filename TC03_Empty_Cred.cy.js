describe('Verify Login Functionality',()=>{
    it('verify Login Functionality without Credentials',()=>{
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
       // Leave user name and password fields as a blank 
       cy.get('#uid').type('  ')
       cy.get('#passw').type(' ',{log:false})
       cy.get(':nth-child(3) > :nth-child(2) > input').click();
       //Assertion 
       cy.get('#_ctl0__ctl0_Content_Main_message').should('be.visible')
       cy.get('#_ctl0__ctl0_Content_Main_message').should('contain', 'Login Failed');
       
       
    })
   })
   
describe('Verify Login Functionality',()=>{
    it('verify Login Functionality with In-Valid Credentials',()=>{
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
       //Enter In-valid user name and password 
        cy.get('#uid').type('adm');
        cy.get('#passw').type('ad',{log:false});
        cy.get(':nth-child(3) > :nth-child(2) > input').click();
         //Assertion 
         cy.get('#_ctl0__ctl0_Content_Main_message').should('be.visible')
         cy.get('#_ctl0__ctl0_Content_Main_message').should('contain', 'username or password was not found in our system');
        
     })
    })
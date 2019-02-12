describe('Functionality checking', () => {
/*Block of functional tests that check the main flow scenarios*/
    beforeEach(() => {
            cy.clearCookies()
            cy.visit('http://localhost:3000')
        })
        
        it('Submit form', () => {
            cy.get('input#name').type('Test')
            cy.get('input#city').type('Kyiv')
            cy.get('button').contains('Submit').click()
            cy.get('div.CrewMember-container').should('not.exist')
            /*Expected result described in this test based on actual behavior. But it seems to me that it isn't correct. 
            /*Expected result should be 'Submitted entity is visible on the page'*/
            })
        it('Clear form', () => {
            cy.get('input#name').type('Test')
            cy.get('input#city').type('Kyiv')
            cy.get('button').contains('Submit').click()
            cy.get('button').contains('Clear').click()
            cy.get('div.CrewMember-container').should('be.visible')
            /*Expected result described in this test based on actual behavior. But it seems to me that it isn't correct. 
            /*Expected result should be 'Entered data is deleted from the form'*/
            })
        it('Move from Applied to Interviewing', () => {
            cy.get('.CrewMember-up').first().click()
            cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container').should('be.visible')
            /*Checking of apearence the moved entity in Interviewing column*/
            })  
        
        it('Move from Interviewing to Applied', () => {  
            cy.get('.CrewMember-up').first().click()
            cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container > .CrewMember-toolbar > :nth-child(1)').click()
            cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container').should('not.exist')
            cy.get('.App-container > :nth-child(1) > :nth-child(1) > :nth-child(2)').should('be.visible')
            /*Checking of disapearence the moved entity from Interviewing column and its appearence in Applied column*/
        })

        it('Move from Interviewing to Hired', () => {  
            cy.get('.CrewMember-up').first().click()
            cy.get('#root > div > div > div:nth-child(2) > div > div > div.CrewMember-toolbar > button.CrewMember-up').click()
            cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container').should('not.exist')
            cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3)').should('be.visible')
            /*Checking of disapearence the moved entity from Interviewing column and its appearence in Hired column*/
        })

        it('Move from Hired to Interviewing', () => {  
            cy.get('#root > div > div > div:nth-child(3) > div > div > div.CrewMember-toolbar > button').click()
            cy.get('#root > div > div > div:nth-child(3) > div > div').should('not.exist')
            cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container').should('be.visible')
            /*Checking of disapearence the moved entity from Hired column and its appearence in Interviewing column*/
        })
            
})

describe('Layout checking', () => {
/*Block of UI tests that check the presence of all main elements on the page*/
        beforeEach(() => {
            cy.clearCookies()
            cy.visit('http://localhost:3000')
        })
        
        it('Logo is visible', () => {
            cy.get('img.App-logo').should('be.visible')
            })
    
        it('Header is visible', () => {
            cy.get('h1.App-title').contains('OpenOceanStudio: Crew Applications').should('be.visible')
            })

        it('Name input is visible', () => {
            cy.get('input#name').should('be.visible')
            })

        it('City input is visible', () => {
            cy.get('input#city').should('be.visible')
            })

        it('Submit button is visible', () => {
            cy.get('button').contains('Submit').should('be.visible')
            })

        it('Clear button is visible', () => {
            cy.get('button').contains('Clear').should('be.visible')
            })
            
        it('Applied column is visible', () => {
            cy.get('h2').contains('Applied').should('be.visible')
            })

        it('Interviewing column is visible', () => {
            cy.get('h2').contains('Interviewing').should('be.visible')
            })

        it('Hired column is visible', () => {
            cy.get('h2').contains('Hired').should('be.visible')
            })
})
       
describe('template spec', () => {

  beforeEach(() => {
    /** Se ejecuta antes de cada test beforeEach
     * el it.skip('Esto es un ejemplo de prueba texto') hace que no se ejecute la prueba 
     * el it.only('Esto es un ejemplo de prueba texto') hace que solo se ejecute esa prueba
     * buscar el comando wait de cypress para ejecutar las pruebas mas lento ***/
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(21) > a').click()
  })

  it('test de login valido', () => {
    //cy.visit('https://the-internet.herokuapp.com')
    //cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').contains('You logged into a secure area!')
    /*cy.get('#flash').log('You logged into a secure area!')*/
  })

  it('test de login invalido con password en blanco', () => {
    //cy.visit('https://the-internet.herokuapp.com')
    //cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('.radius').click()
    cy.get('#flash').contains('Your password is invalid!')
  })

  it('test de login invalido con usuario en blanco', () => {
    //cy.visit('https://the-internet.herokuapp.com')
    //cy.get(':nth-child(21) > a').click()
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').contains('Your username is invalid!')
  })

  it('test de login invalido con usuario y password erróneas', () => {
    //cy.visit('https://the-internet.herokuapp.com')
    //cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tom')
    cy.get('#password').type('SuperSecretPassword')
    cy.get('.radius').click()
    cy.get('#flash').contains('Your username is invalid!')
  })
})
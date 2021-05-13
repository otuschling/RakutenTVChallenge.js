// 1. Login to Rakuten TV
// 2. Select a movie
// 3. Add it to the wishlist
// 4. Open Wishlist window
// 5. Verify Movie is added successfully

describe('Rakuten TV Challenge', () => {
  it('Opens Rakuten TV sign in page', () => {
    cy.visit('https://rakuten.tv/es/sessions/sign_in');
    cy.wait(5000);

    //cy.get("form");
    cy.get('input[placeholder="Escribe tu dirección de email o Rakuten ID"]').type("otuschling@gmail.com");
    cy.get('input[type="password"]').first().type("Aleixlaia0811");

    cy.get('form').first().submit();

 })

 it('Click on any movie', () => {
    cy.get('a[href*="/es/movies/los-croods-una-nueva-era"]').first().click()

 })

 it('Add the movie to the wish list', () => {
     cy.get('span[class*="round-action__element"]').last().click()

  })

 it('Open the wishlist window', () => {
     cy.get('span[class*="navmenu__parent__anchor__text"]')
     .contains('Perfil')
     .click()

     cy.get('a[class*="navmenu__parent__child__item__anchor"]')
          .contains('Quiero Ver')
          .click()

  })


 it('Verify Movie is added successfully', () => {
     // Verify that we are on the wishlist page
    cy.url().should('eq', 'https://rakuten.tv/es/wishlist')

     // Verify that wishlist contains the movie
    cy.get('a[href*="/es/movies/los-croods-una-nueva-era"]').should('exist')
  })
})




// ------------------------------------------------------
// WHOLE APP
// ------------------------------------------------------

describe('Whole App', () => {

	it('Não devem existir links vazios sem a flag ".no-href"', () => {
		cy.visit('http://localhost:8080');
		cy.get('a').get('[href=""]:not(.no-href)').should('length',0);
	});

	it('Não devem existir parametros data-cy vazios', () => {
		cy.visit('http://localhost:8080');
		cy.get('a').get('[data-cy=""]').should('length',0);
	});
});

// ------------------------------------------------------
// APP HEADER
// ------------------------------------------------------

describe('App Header', () => {

	it('Existe elemento de data e timer na header', () => {
		cy.visit('http://localhost:8080');
		cy.get('body [data-cy=app-header]').then(header => {
			header.find('[data-cy=timer]');
			header.find('[data-cy=today]');
		});
	});

	it('Dropdown "MINHA CONTA" deve ser inicialmente invisível', () => {
		cy.visit('http://localhost:8080');
		cy.get('body nav').then(header => {
			cy.get('[data-cy=my-account-dropdown]').should('not.be.visible');
		});
	});

	it('Logo deve ser um link não vazio contendo uma img', () => {
		cy.visit('http://localhost:8080');
		cy.get('[data-cy=app-logo]').then(logo => {
			logo.find('a[href]').find('img');
		});
	});

	it('Deve conter menu Hamburger quando width <= 1023', () => {

		cy.visit('http://localhost:8080');
		cy.get('body [data-cy=app-header]').find('.items ul li');

		cy.viewport('macbook-13');
		cy.get('body [data-cy=app-header] .items ul').should('be.visible');
		cy.get('body [data-cy=app-header] .hamburger').should('not.be.visible');

		cy.viewport(1000, 600);
		cy.get('body [data-cy=app-header] .items ul').should('not.be.visible');
		cy.get('body [data-cy=app-header] .hamburger').should('be.visible');
	});

	it('O menu de itens da header principal deve ser um sidebar em width <= 1023', () => {

		cy.visit('http://localhost:8080');
		cy.viewport(1000, 600);

		cy.get('body [data-cy=app-header] .items ul').should('not.be.visible');
		cy.get('body [data-cy=app-header] .hamburger').click();
		cy.get('body [data-cy=app-header] .items ul')
			.should('be.visible')
			.should('have.css', 'position', 'fixed')
			.should('have.css', 'right', '0px')
			.should('have.css', 'top', '30px')
			.should('have.css', 'width', '300px')
	});

});

// ------------------------------------------------------
// DASH ITEMS
// ------------------------------------------------------

describe('Dashbaord Items', () => {

	it('Os squares da dash devem ser responsivos', () => {

		cy.visit('http://localhost:8080');

		[
			'macbook-15', // 1440 x  900
			'macbook-13', // 1280 x  800
			'macbook-11', // 1366	x  768
			'ipad-mini',  // 768	x 1024
			'iphone-6',   // 375	x  667
		].forEach(viewport => {
			cy.viewport(viewport);
			cy.get('[data-cy=dash-item]').each($dashItem => {
				cy.wrap($dashItem).should('be.visible');
			});
		});
	});

	it('Ao clicar em deve ser exibido um modal', () => {
		cy.viewport('macbook-13');
		cy.get('[data-cy=dash-item-modal]').should('not.exist');
		cy.get('[data-cy=dash-item]:first-child [data-cy=add-channel]').click();
		cy.get('[data-cy=dash-item-modal]').should('be.visible');
	});

	it('Ao escolher um canal e clicar em prox. ele deve ser adicionado ao dash', () => {

		cy.get('[data-cy=dash-connected-item]').should('not.exist');
		cy.get('[data-cy=dash-item]:first-child [data-cy=add-channel]').click({force: true});
		cy.wait(6000);
		cy.get('[data-cy=dash-item-modal] form ul li input[type=radio]').check();
		cy.get('[data-cy=dash-item-modal] .next').click();
		cy.get('[data-cy=dash-connected-item]').should('exist');
	});
});

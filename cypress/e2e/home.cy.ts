describe('home page', () => {
	it('should open modal when clicking on JobCard', () => {
		cy.visit('http://localhost:3000');
		cy.get('a').first().click();
		cy.get('a').contains('Apply now').click();
	});

	it('should filter the JobsCard when typing at the input', () => {
		cy.visit('http://localhost:3000');
		cy.get('input').type('Something that will not match a job position just to test the filter');
		cy.contains('No jobs related to the search');
	});
});

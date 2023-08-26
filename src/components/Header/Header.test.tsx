import { renderWithRouter, screen } from '@/test-utils';

import { Header } from '.';

describe('Header', () => {
	test('renders Header with company name', () => {
		renderWithRouter(<Header />);
		const companyName = screen.getByText(/jobsonthego/i);
		expect(companyName).toBeInTheDocument();
	});
});

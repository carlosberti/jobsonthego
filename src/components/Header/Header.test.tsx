import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header', () => {
	test('renders Header with company name', () => {
		render(<Header />);
		const companyName = screen.getByText(/jobsonthego/i);
		expect(companyName).toBeInTheDocument();
	});
});

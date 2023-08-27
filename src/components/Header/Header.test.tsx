import { renderWithRouter, screen } from '@/test-utils';

import { Header } from '.';

describe('Header', () => {
	test('renders Header with company name', () => {
		renderWithRouter(<Header />);
		expect(screen.getAllByLabelText(/jobs on the go/i)).toHaveLength(2);
	});
});

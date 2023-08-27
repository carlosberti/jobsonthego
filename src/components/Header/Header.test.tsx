import userEvent from '@testing-library/user-event';

import { renderWithRouter, screen, act } from '@/test-utils';

import { Header } from '.';

describe('Header', () => {
	test('renders Header with company name and <SearchInput />', async () => {
		renderWithRouter(<Header />);
		expect(screen.getAllByLabelText(/jobs on the go/i)).toHaveLength(2);
		expect(screen.getByRole('searchbox')).toBeInTheDocument();
	});
	test('type at the SearchInput and submit', () => {
		renderWithRouter(<Header />);

		// eslint-disable-next-line testing-library/no-unnecessary-act
		act(() => userEvent.type(screen.getByRole('searchbox'), 'Frontend Engineer'));
		expect(screen.getByRole('searchbox')).toHaveValue('Frontend Engineer');
	});
});

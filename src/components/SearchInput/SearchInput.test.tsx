import userEvent from '@testing-library/user-event';

import { act, renderWithRouter, screen } from '@/test-utils';

import { SearchInput } from '.';

describe('SearchInput', () => {
	test('renders SearchInput component', () => {
		renderWithRouter(<SearchInput />);

		expect(screen.getByRole('searchbox')).toBeInTheDocument();
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
	});
	test('should change SearchInput value and location query param', () => {
		const { router } = renderWithRouter(<SearchInput />);

		// eslint-disable-next-line testing-library/no-unnecessary-act
		act(() => userEvent.type(screen.getByRole('searchbox'), 'Frontend Engineer'));
		expect(screen.getByRole('searchbox')).toHaveValue('Frontend Engineer');
		expect(router.state.location.search).toBe('?search=Frontend+Engineer');
	});
});

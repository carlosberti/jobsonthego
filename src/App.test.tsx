import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
	test('renders learn react text', () => {
		render(<App />);
		const linkElement = screen.queryByText(/learn react/i);
		expect(linkElement).not.toBeInTheDocument();
	});
});

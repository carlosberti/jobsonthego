import { render, screen } from '@/test-utils';

import { Logo } from '.';

describe('<Logo />', () => {
	test('should render logo', () => {
		render(<Logo />);
		const desktop = screen.getByLabelText('Jobs on the go');
		const mobile = screen.getByLabelText('Jobs on the go short');
		expect(desktop).toBeInTheDocument();
		expect(mobile).toBeInTheDocument();
	});
	test('mobile logo should have sm:hidden class', () => {
		render(<Logo />);
		const mobile = screen.getByLabelText('Jobs on the go short');
		expect(mobile.parentElement).toHaveClass('sm:hidden');
	});
	test('desktop logo should have hidden class', () => {
		render(<Logo />);
		const desktop = screen.getByLabelText('Jobs on the go');
		expect(desktop.parentElement).toHaveClass('hidden');
	});
});

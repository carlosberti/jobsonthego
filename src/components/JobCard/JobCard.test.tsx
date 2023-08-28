import userEvent from '@testing-library/user-event';

import { act, renderWithRouter, screen } from '@/test-utils';

import { JobCard } from '.';

const props = {
	id: 1,
	company: {
		name: 'Company name',
		logo: 'https://via.placeholder.com/32',
		industry: 'Industry',
	},
	employment_type: 'Full-time',
	experience: 'Experienced',
	from_date: '2023-08-24',
	language: 'English',
	title: 'Job title',
} as const;

describe('JobCard', () => {
	test('renders JobCard with passed props', async () => {
		renderWithRouter(<JobCard {...props} />);

		expect(screen.getByText(props.company.name)).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
		expect(screen.getByRole('img', { name: /company logo/i })).toBeInTheDocument();
		expect(screen.getByText(props.employment_type)).toBeInTheDocument();
		expect(screen.getByText(props.company.industry)).toBeInTheDocument();
		expect(screen.getByText(props.experience)).toBeInTheDocument();
		expect(screen.getByText(`language: ${props.language}`)).toBeInTheDocument();
		expect(screen.getByText('Published 4 days ago')).toBeInTheDocument();
	});

	test('renders JobCard with published date equals to today', async () => {
		renderWithRouter(<JobCard {...props} from_date="2023-08-28" />);

		expect(screen.getByText('Published today')).toBeInTheDocument();
	});

	test('renders JobCard without logo', async () => {
		renderWithRouter(
			<JobCard
				{...props}
				company={{
					name: 'Company name',
					logo: '',
					industry: 'Industry',
				}}
			/>
		);

		expect(screen.queryByRole('img', { name: /company logo/i })).not.toBeInTheDocument();
	});

	test('goes to /jobs/:id when clicked', async () => {
		const { router } = renderWithRouter(<JobCard {...props} />);
		const link = screen.getByRole('link');
		// eslint-disable-next-line testing-library/no-unnecessary-act
		act(() => userEvent.click(link));
		expect(router.state.location.pathname).toBe(`/job/${props.id}`);
	});
});

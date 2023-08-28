import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { renderWithRouter } from '@/test-utils';

import { Modal } from '.';

const queryClient = new QueryClient();

// The correct way to test this component is to mock the api layer, using msw for example, and then test the component with the mocked data.

describe('Modal', () => {
	test('renders Modal component', () => {
		renderWithRouter(
			<QueryClientProvider client={queryClient}>
				<Modal />
			</QueryClientProvider>
		);
	});
});

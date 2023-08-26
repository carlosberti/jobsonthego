import { isValidElement } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export function renderWithRouter(children: any, routes = []) {
	const options = isValidElement(children) ? { element: children, path: '/' } : children;

	const router = createMemoryRouter([{ ...options }, ...routes], {
		initialEntries: [options.path],
		initialIndex: 1,
	});

	return render(<RouterProvider router={router} />);
}

export * from '@testing-library/react';

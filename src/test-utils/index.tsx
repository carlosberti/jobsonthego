import { isValidElement } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

// we can do the following to append tailwind styles to the document head when testing. I don't think it is necessary for now though.
// const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => children;

// export function renderWithStyles(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
// 	const view = render(ui, { wrapper, ...options });

// 	const style = document.createElement('style');
// 	style.innerHTML = fs.readFileSync('src/test-utils/index.css', 'utf8');
// 	document.head.appendChild(style);

// 	return view;
// }

// export function renderWithStylesAndRouter(children: any, routes = []) {
// 	const options = isValidElement(children) ? { element: children, path: '/' } : children;

// 	const router = createMemoryRouter([{ ...options }, ...routes], {
// 		initialEntries: [options.path],
// 		initialIndex: 1,
// 	});

// 	return renderWithStyles(<RouterProvider router={router} />);
// }

// package.json:
//"generate-css": "npx tailwindcss -i ./src/index.css -o ./src/test-utils/index.css",
//"test": "npm run generate-css && craco test",
//"test:ci": "npm run generate-css && craco test --runInBand",

export function renderWithRouter(children: any, routes = []) {
	const options = isValidElement(children) ? { element: children, path: '/' } : children;

	const router = createMemoryRouter([{ ...options }, ...routes], {
		initialEntries: [options.path],
		initialIndex: 1,
	});

	return render(<RouterProvider router={router} />);
}

export * from '@testing-library/react';

import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages';
import { Header, Modal } from '@/components';

export const publicRoutes = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<div className="mx-auto max-w-7xl sm:flex sm:min-h-[100dvh] sm:flex-col">
					<Header />
					<Home />
				</div>
				<Outlet />
			</>
		),
		children: [
			{
				path: 'job',
				element: <Outlet />,
				children: [
					{
						index: true,
						element: <Navigate to="/" />,
					},
					{
						path: ':id',
						element: <Modal />,
					},
				],
			},
		],
	},
]);

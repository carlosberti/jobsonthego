import { Navigate, Outlet } from 'react-router-dom';

import { Home } from '@/pages';
import { ErrorBoundary, Header, Modal } from '@/components';

export const publicRoutes = [
	{
		path: '/',
		element: (
			<>
				<div className="mx-auto max-w-7xl sm:flex sm:min-h-[100dvh] sm:flex-col">
					<Header />
					<ErrorBoundary
						fallback={<h1>{`An error occurred when trying to display the job's list`}</h1>}
					>
						<Home />
					</ErrorBoundary>
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
];

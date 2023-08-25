import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Header, Modal } from '@/components';
import { Home } from '@/pages';

export function PublicRoutes() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="mx-auto max-w-7xl sm:flex sm:min-h-[100dvh] sm:flex-col">
								<Header />
								<Home />
							</div>
							<Outlet />
						</>
					}
				>
					<Route path="/job">
						<Route index element={<Navigate to="/" />} />
						<Route path=":id" element={<Modal />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

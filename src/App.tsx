import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './routes';

const queryClient = new QueryClient();

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<PublicRoutes />
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;

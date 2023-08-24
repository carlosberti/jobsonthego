import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from '@/pages';
import { Header } from '@/components';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			learn react
			<Header />
			<Home />
		</QueryClientProvider>
	);
}

export default App;

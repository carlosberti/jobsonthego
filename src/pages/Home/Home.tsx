import { useQuery } from '@tanstack/react-query';
import { getJobsList } from '@/actions';
import { JobCard } from '@/components';

export function Home() {
	const { isLoading, error, data } = useQuery(['jobsList'], getJobsList);

	if (isLoading) return 'Loading...';

	if (error instanceof Error) return 'An error has occurred: ' + error.message;

	if (!data) {
		return <h1>there is no job available at the moment :(</h1>;
	}

	return (
		<div className="bg-red-50">
			{data.map((job) => (
				<JobCard key={job.id} {...job} />
			))}
		</div>
	);
}

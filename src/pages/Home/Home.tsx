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
		<div className="flex flex-col gap-4 px-3 pb-6 sm:px-6 sm:pb-8 sm:flex-row sm:flex-wrap sm:justify-center">
			{data.map((job) => (
				<JobCard key={job.id} {...job} />
			))}
		</div>
	);
}

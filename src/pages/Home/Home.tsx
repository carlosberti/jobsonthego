import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Fuse from 'fuse.js';

import { getJobsList } from '@/actions';
import { JobCard } from '@/components';

const fuseOptions = {
	keys: ['title', 'company.name', 'employment_type', 'experience_level', 'function', 'industry'],
};

export function Home() {
	const [searchParams] = useSearchParams();
	const fuseSearchParam = searchParams.get('search') || '';
	const { isLoading, error, data } = useQuery(['jobsList'], getJobsList);

	if (isLoading) return 'Loading...';

	if (error instanceof Error) return 'An error has occurred: ' + error.message;

	if (!data) {
		return <h1>there is no job available at the moment :(</h1>;
	}

	function makeFuseSearch() {
		if (fuseSearchParam) {
			const fuse = new Fuse(data!, fuseOptions);
			return fuse.search(fuseSearchParam);
		}
		return data!.map((job) => ({
			item: job,
		}));
	}

	const dataFromSearch = makeFuseSearch();

	if (dataFromSearch.length === 0) {
		return <h1>No jobs related to the search</h1>;
	}

	return (
		<div className="grid grid-cols-auto-fit justify-center gap-4 px-3 pb-6 sm:mt-2 sm:px-6 sm:pb-8">
			{dataFromSearch.map(({ item }) => (
				<JobCard key={item.id} {...item} />
			))}
		</div>
	);
}

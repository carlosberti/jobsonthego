import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getJobsList } from '@/actions';
import { JobCard } from '@/components';
import { fuzzySearch } from '@/helpers';

const fuseOptions = {
	keys: ['title', 'company.name', 'employment_type', 'experience_level', 'function', 'industry'],
};

export function Home() {
	const [searchParams] = useSearchParams();
	const fuseSearchParam = searchParams.get('search') || '';
	const { isLoading, error, data } = useQuery(['jobsList'], getJobsList);

	if (isLoading) return <h1>Loading...</h1>;

	if (error instanceof Error) throw new Error(error.message);

	if (!data) {
		return <h1>there is no job available at the moment :(</h1>;
	}

	const dataFromFuzzySearch = fuzzySearch({ data, fuseOptions, fuseSearchParam });

	if (dataFromFuzzySearch.length === 0) {
		return <h1>No jobs related to the search</h1>;
	}

	return (
		<div className="grid grid-cols-auto-fit justify-center gap-4 px-3 pb-6 sm:mt-2 sm:px-5 sm:pb-8">
			{dataFromFuzzySearch.map(({ item }) => (
				<JobCard key={item.id} {...item} />
			))}
		</div>
	);
}

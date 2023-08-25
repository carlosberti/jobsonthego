import { getJobsList } from '@/actions';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import DOMPurify from 'dompurify';

export function Modal() {
	const { id } = useParams<{ id?: string }>();
	const { isLoading, error, data } = useQuery(['jobsList'], getJobsList);

	if (isLoading) return 'Loading...';

	if (error instanceof Error) return 'An error has occurred: ' + error.message;

	if (!data) {
		return <h1>there is no job available at the moment :(</h1>;
	}

	const job = data.find((job) => job.id === Number(id));

	if (!job) {
		return <h1>Job not found</h1>;
	}

	const sanitizedCompanyDescription = DOMPurify.sanitize(job.company.descr);
	const sanitizedJobDescription = DOMPurify.sanitize(job.descr);
	const sanitizedSkills = DOMPurify.sanitize(job.skills);

	return (
		<Dialog.Root open>
			<Dialog.Portal>
				<Dialog.Overlay className="absolute inset-0 bg-gray-200/5 backdrop-blur-sm" asChild>
					<Dialog.Close asChild>
						<Link to="/" />
					</Dialog.Close>
				</Dialog.Overlay>
				<Dialog.Content className="absolute left-0 top-0 h-[100dvh] w-full sm:left-[50%] sm:translate-x-[-50%] sm:rounded-md sm:border border-gray-200 bg-white sm:drop-shadow-md focus:outline-none sm:h-[initial] overflow-auto sm:max-h-[80%] sm:w-[80%] sm:max-w-5xl sm:translate-y-[revert] sm:top-[64px]">
					{job.company.cover && (
						<img
							src={job.company.cover}
							alt="Company cover"
							height={256}
							className="object-cover w-full h-full max-h-64 rounded-t-md relative"
						/>
					)}
					<div className="p-6">
						<Dialog.Title className="mb-4 text-2xl text-zinc-900 font-semibold">
							{job.title}
						</Dialog.Title>
						<div className="flex flex-col gap-5 [&_ul]:list-disc [&_ul_li]:ml-4">
							<div
								className="flex flex-col gap-2 text-zinc-900 font-medium"
								dangerouslySetInnerHTML={{ __html: sanitizedCompanyDescription }}
							/>
							<div
								className="flex flex-col gap-2 text-zinc-900 font-medium"
								dangerouslySetInnerHTML={{ __html: sanitizedJobDescription }}
							/>
							<div
								className="flex flex-col gap-2 text-zinc-900 font-medium"
								dangerouslySetInnerHTML={{ __html: sanitizedSkills }}
							/>
						</div>
						<Link
							to={job.urls.ad}
							target="_blank"
							rel="noopener"
							className="mt-4 text-zinc-900 font-medium inline-block p-2 border border-zinc-900 rounded-md hover:bg-zinc-900 hover:text-white transition-colors"
						>
							Apply now
						</Link>
						<Dialog.Close asChild>
							<Link to="/" className="absolute right-4 top-4">
								X
							</Link>
						</Dialog.Close>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

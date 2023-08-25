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
				<Dialog.Content className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-auto border-gray-200 bg-white focus:outline-none sm:bottom-16 sm:left-[50%] sm:top-16 sm:h-[initial] sm:w-[80%] sm:max-w-4xl sm:translate-x-[-50%] sm:rounded-md sm:border sm:drop-shadow-md">
					{job.company.cover && (
						<img
							src={job.company.cover}
							alt="Company cover"
							height={256}
							className="relative h-full max-h-64 w-full rounded-t-md object-cover"
						/>
					)}
					<div className="p-6">
						<div className="mb-4 flex items-center gap-3">
							{job.company.logo && (
								<img src={job.company.logo} alt="Company logo" width={32} height={32} />
							)}
							<Dialog.Title className="text-2xl font-semibold text-zinc-900">
								{job.title}
							</Dialog.Title>
						</div>
						<div className="flex flex-col gap-5 [&_ul]:list-disc [&_ul_li]:ml-4">
							<div
								className="flex flex-col gap-2 font-medium text-zinc-900"
								dangerouslySetInnerHTML={{ __html: sanitizedCompanyDescription }}
							/>
							<div
								className="flex flex-col gap-2 font-medium text-zinc-900"
								dangerouslySetInnerHTML={{ __html: sanitizedJobDescription }}
							/>
							<div
								className="flex flex-col gap-2 font-medium text-zinc-900"
								dangerouslySetInnerHTML={{ __html: sanitizedSkills }}
							/>
						</div>
						<Link
							to={job.urls.ad}
							target="_blank"
							rel="noopener"
							className="mt-4 inline-block rounded-md border border-zinc-900 p-2 font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
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

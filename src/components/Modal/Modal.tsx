import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import * as Dialog from '@radix-ui/react-dialog';
import { LinkedInLogoIcon, Share1Icon, Cross2Icon } from '@radix-ui/react-icons';
import * as Toast from '@radix-ui/react-toast';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import { getJobsList } from '@/actions';

export function Modal() {
	const navigate = useNavigate();
	const { id } = useParams<{ id?: string }>();
	const { isLoading, error, data } = useQuery(['jobsList'], getJobsList);
	const [open, setOpen] = useState(false);
	const timerRef = useRef(0);

	useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	if (isLoading) return <h1>Loading...</h1>;

	if (error instanceof Error) return <h1>An error has occurred: {' ' + error.message}</h1>;

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
		<>
			<Dialog.Root open>
				<Dialog.Portal>
					<Dialog.Overlay
						className="fixed inset-0 sm:backdrop-blur-sm"
						onClick={() => navigate('/')}
					/>
					<Dialog.Content
						onEscapeKeyDown={() => navigate('/')}
						className="fixed bottom-0 left-0 right-0 top-0 z-50 h-full w-full overflow-auto border-gray-200 bg-white focus:outline-none sm:bottom-16 sm:left-[50%] sm:top-16 sm:h-[initial] sm:w-[80%] sm:max-w-4xl sm:translate-x-[-50%] sm:rounded-md sm:border sm:drop-shadow-md"
					>
						{job.company.cover && (
							<img
								src={job.company.cover}
								alt="Company cover"
								height={256}
								className="relative h-full max-h-64 w-full object-cover sm:rounded-t-md"
							/>
						)}
						<div className="p-6">
							<div className="mb-4 flex items-start gap-3">
								{job.company.logo && (
									<img src={job.company.logo} alt="Company logo" width={32} height={32} />
								)}
								<Dialog.Title className="text-2xl font-semibold text-zinc-900">
									{job.title}
									<div className="ml-3 inline-flex gap-2 leading-8">
										{job.linkedInCompanyId && (
											<Link
												to={`https://linkedin.com/company/${job.linkedInCompanyId}`}
												target="_blank"
												rel="noopener"
												className="text-sky-600 transition-colors hover:text-sky-800"
											>
												<LinkedInLogoIcon className="h-4 w-4" />
											</Link>
										)}
										<button
											onClick={() => {
												navigator.clipboard.writeText(window.location.href);
												setOpen(false);
												window.clearTimeout(timerRef.current);
												timerRef.current = window.setTimeout(() => {
													setOpen(true);
												}, 100);
											}}
										>
											<Share1Icon className="h-4 w-4" />
											<VisuallyHidden.Root>Copy this job link to clipboard</VisuallyHidden.Root>
										</button>
									</div>
								</Dialog.Title>
							</div>
							<div className="flex flex-col gap-4 [&_ul]:list-disc [&_ul_li]:ml-4">
								<div
									className="flex flex-col gap-3 font-medium text-zinc-900"
									dangerouslySetInnerHTML={{ __html: sanitizedCompanyDescription }}
								/>
								<div
									className="flex flex-col gap-3 font-medium text-zinc-900"
									dangerouslySetInnerHTML={{ __html: sanitizedJobDescription }}
								/>
								<div
									className="flex flex-col gap-3 font-medium text-zinc-900"
									dangerouslySetInnerHTML={{ __html: sanitizedSkills }}
								/>
							</div>
							<div className="mt-4 flex items-baseline gap-3">
								<Link
									to={job.urls.ad}
									target="_blank"
									rel="noopener"
									className="rounded-md border border-zinc-900 p-2 font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
								>
									Apply now
								</Link>
								<Link
									type="email"
									to={`mailto:${job.contact.email}?subject=Job%20application%20-%20${job.title}`}
									className="p-2 font-medium text-sky-600 transition-colors hover:text-sky-800"
								>
									Contact us!
								</Link>
							</div>
							<Dialog.Close asChild>
								<Link
									to="/"
									className="fixed bottom-6 right-6 rounded-full border border-black bg-stone-50 p-2 shadow-md hover:bg-stone-200 sm:bottom-[initial] sm:top-6"
								>
									<Cross2Icon className="h-6 w-6" />
								</Link>
							</Dialog.Close>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
			<Toast.Provider duration={2000}>
				<Toast.Root
					className="rounded-md bg-green-300 px-6 py-4 shadow-md"
					open={open}
					onOpenChange={setOpen}
					onClick={(e) => e.stopPropagation()}
				>
					<Toast.Description className="font-semibold text-zinc-600">Copied!</Toast.Description>
				</Toast.Root>
				<Toast.Viewport className="fixed bottom-0 right-0 z-50 p-3 sm:p-6" />
			</Toast.Provider>
		</>
	);
}

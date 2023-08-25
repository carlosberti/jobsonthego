import { type JobData } from '@/actions';
import { Link } from 'react-router-dom';

export type JobCardProps = Pick<
	JobData,
	| 'id'
	| 'company'
	| 'contact'
	| 'descr'
	| 'employment_type'
	| 'experience'
	| 'from_date'
	| 'function'
	| 'language'
	| 'linkedInCompanyId'
	| 'locations'
	| 'title'
	| 'urls'
	| 'owner'
	| 'skills'
>;

export function JobCard({
	id,
	company,
	contact,
	descr,
	employment_type: employmentType,
	experience,
	from_date: fromDate,
	function: jobFunction,
	language,
	linkedInCompanyId,
	locations,
	owner,
	skills,
	title,
	urls,
}: JobCardProps) {
	const getDaysSincePublished = () => {
		const publishedDate = new Date(fromDate);
		const currentDate = new Date();
		const timeDiff = currentDate.getTime() - publishedDate.getTime();
		const dayDiff = timeDiff / (1000 * 3600 * 24);
		const totalDays = Math.round(dayDiff);

		if (totalDays === 0) return 'Published today';

		return `Published ${totalDays} days ago`;
	};

	return (
		<Link to={`/job/${id}`}>
			<div className="flex flex-col p-4 lg:p-5 shadow-md gap-2 rounded-md sm:max-w-sm sm:min-w-[240px] sm:h-fit">
				<div className="flex gap-3 items-center">
					{company.logo && <img src={company.logo} alt="Company logo" width={32} height={32} />}
					<p className="text-zinc-900 line-clamp-1">{company.name}</p>
				</div>
				<h2 className="mb-2 text-zinc-900 font-semibold">{title}</h2>
				<div className="mb-2 columns-2">
					<p className="text-sm text-zinc-900 font-medium">{employmentType}</p>
					<p className="text-sm text-zinc-900 font-medium">{company.industry}</p>
					<p className="text-sm text-zinc-900 font-medium">{experience}</p>
					<p className="text-sm text-zinc-900 font-medium">language: {language}</p>
				</div>
				<div className="pt-3 border-t border-gray-200">
					<p className="text-sm text-zinc-900 font-light">{getDaysSincePublished()}</p>
				</div>
			</div>
		</Link>
	);
}

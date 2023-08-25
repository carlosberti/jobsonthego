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
			<div className="flex flex-col gap-2 rounded-md p-4 shadow-md sm:h-fit sm:min-w-[240px] sm:max-w-sm lg:p-5">
				<div className="flex items-center gap-3">
					{company.logo && <img src={company.logo} alt="Company logo" width={32} height={32} />}
					<p className="line-clamp-1 text-zinc-900">{company.name}</p>
				</div>
				<h2 className="mb-2 font-semibold text-zinc-900">{title}</h2>
				<div className="mb-2 columns-2">
					<p className="text-sm font-medium text-zinc-900">{employmentType}</p>
					<p className="text-sm font-medium text-zinc-900">{company.industry}</p>
					<p className="text-sm font-medium text-zinc-900">{experience}</p>
					<p className="text-sm font-medium text-zinc-900">language: {language}</p>
				</div>
				<div className="border-t border-gray-200 pt-3">
					<p className="text-sm font-light text-zinc-900">{getDaysSincePublished()}</p>
				</div>
			</div>
		</Link>
	);
}

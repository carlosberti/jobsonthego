import { type JobData } from '@/actions';

export type JobCardProps = Pick<
	JobData,
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
	return (
		<div>
			<h1>{company.descr}</h1>
			<h1>{contact.email}</h1>
			<h1>{descr}</h1>
			<h1>{employmentType}</h1>
			<h1>{experience}</h1>
			<h1>{fromDate}</h1>
			<h1>{jobFunction}</h1>
			<h1>{language}</h1>
			<h1>{linkedInCompanyId}</h1>
			<h1>{locations.map(({ location }) => location.text).join(', ')}</h1>
			<h1>{owner.email}</h1>
			<h1>{skills}</h1>
			<h1>{title}</h1>
			<h1>{urls.ad}</h1>
		</div>
	);
}

export type JobData = {
	id: string;
	benefits: string[];
	categories: string[];
	company: {
		id: string;
		slug: string;
		name: string;
		name_internal: string;
		website: string;
		industry: string;
		descr: string;
		logo: string;
		cover: string;
	};
	contact: {
		name: string;
		email: string;
		phone: string;
		photo: string | null;
	};
	departments: string[];
	descr: string;
	employment_type: 'Full-time';
	experience: 'Experienced' | 'Mid level' | 'Entry level';
	from_date: string;
	function: string;
	language: string;
	//https://www.linkedin.com/company/linkedinCompanyId/
	linkedInCompanyId: number;
	locations: {
		location: {
			area_2_short?: string;
			city?: string;
			area_1_short?: string;
			area_2?: string;
			area_1?: string;
			place_id?: string;
			url?: string;
			city_short?: string;
			country?: string;
			country_short?: string;
			text: string;
		};
	}[];
	slug: string;
	title: string;
	to_date: string | null;
	urls: {
		ad: string;
		apply: string;
	};
	video: {
		content: string | null;
		url: string;
	};
	internal_reference: string | null;
	owner: {
		id: string;
		name: string;
		email: string;
	};
	skills: string;
	application_date_is_hidden: boolean;
};

type Response = JobData[];

export function getJobsList(): Promise<Response> {
	return fetch(process.env.REACT_APP_API_URL)
		.then((response) => response.json())
		.then((data) => data);
}

import { SearchInput } from '@/components';

export function Header() {
	return (
		<header className="sticky top-2 m-2 flex max-w-7xl items-center gap-6 rounded-md border border-slate-100 bg-white px-4 py-2 shadow-sm sm:top-3 sm:m-3 sm:px-6">
			<div className="sm:flex-1">
				<h1>JobsOnTheGo</h1>
			</div>
			<SearchInput />
			<div className="hidden sm:block sm:flex-1" />
		</header>
	);
}

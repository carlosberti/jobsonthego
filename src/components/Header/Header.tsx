import { SearchInput } from '@/components';

export function Header() {
	return (
		<header className="flex items-center gap-6 p-4 sm:p-6">
			<div className="sm:flex-1">
				<h1>JobsOnTheGo</h1>
			</div>
			<SearchInput />
			<div className="hidden sm:block sm:flex-1" />
		</header>
	);
}

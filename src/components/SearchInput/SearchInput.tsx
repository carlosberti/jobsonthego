import { Form, useSubmit } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export function SearchInput() {
	const submit = useSubmit();

	return (
		<Form
			onChange={(event) => {
				submit(event.currentTarget);
			}}
			className="relative flex-1 rounded-md border-2 border-gray-100  focus-within:border-blue-400 sm:w-[clamp(240px,60%,600px)] sm:flex-initial"
		>
			<label htmlFor="search">
				<MagnifyingGlassIcon className="absolute left-1 top-[50%] h-5 w-5 translate-y-[-50%] text-gray-400" />
			</label>
			<input
				id="search"
				type="search"
				name="search"
				autoCapitalize="off"
				autoCorrect="off"
				enterKeyHint="search"
				spellCheck="false"
				placeholder="Frontend Engineer"
				className="w-full border-none bg-transparent p-0 py-2 pl-7 pr-0 text-zinc-900 placeholder-gray-400 outline-0 sm:text-sm"
			/>
		</Form>
	);
}

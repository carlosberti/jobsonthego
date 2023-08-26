import Fuse from 'fuse.js';

type fuzzySearchParam<T> = {
	data: T[];
	fuseSearchParam: string;
	fuseOptions: Fuse.IFuseOptions<T>;
};

export function fuzzySearch<T>({ data, fuseSearchParam, fuseOptions }: fuzzySearchParam<T>) {
	if (fuseSearchParam) {
		const fuse = new Fuse(data!, fuseOptions);
		return fuse.search(fuseSearchParam);
	}
	return data!.map((item) => ({ item }));
}

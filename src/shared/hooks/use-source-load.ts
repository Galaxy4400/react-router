import { useEffect, useState } from "react";

export const useSourceLoad = <T>(source: string, page: number) => {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setLoading(true);
		setError(false);

		if (!hasMore) return;

		fetch(`https://rickandmortyapi.com/api/${source}?page=${page}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.results) {
					setData((prev) => [...prev, ...data.results]);
				} else {
					setHasMore(false);
				}
			})
			.catch(() => {
				setError(true);
			})
			.finally(() => setLoading(false));
	}, [hasMore, page, source]);

	return { data, loading, error, hasMore };
};

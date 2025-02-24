import { useCallback, useRef, useState } from "react";
import { useSourceLoad } from "./use-source-load";

export const useInfinitySource = <T>(source: string) => {
	const [page, setPage] = useState(1);
	const { data, loading, error, hasMore } = useSourceLoad<T>(source, page);

	const observer = useRef<IntersectionObserver | null>(null);

	const lastNodeRef = useCallback(
		(node: HTMLLIElement | null) => {
			if (loading) return;
			if (observer.current) {
				observer.current.disconnect();
			}

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPage((prev) => ++prev);
				}
			});

			if (node) {
				observer.current.observe(node);
			}
		},
		[loading, hasMore]
	);

	return { data, loading, error, hasMore, lastNodeRef };
};

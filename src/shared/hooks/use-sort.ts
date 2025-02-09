import { useSearchParams } from "react-router-dom";
import { Sort } from "../bff";

export const useSort = (init: Sort = "asc") => {
	const [searchParams, setSearchParams] = useSearchParams({ sort: init });

	const sortSwitch = () => {
		setSearchParams({ sort: searchParams.get("sort") === "asc" ? "desc" : "asc" });
	};

	return { sortBy: searchParams.get("sort") as Sort, sortSwitch };
};

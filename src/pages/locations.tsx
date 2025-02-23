import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { useInfinitySource } from "../shared/hooks";
import { Location } from "../shared/types";

export const Locations = () => {
	const { data, loading, error, hasMore, lastNodeRef } = useInfinitySource<Location>("location");

	return (
		<div>
			<h2>Locations</h2>
			<br />
			<ul>
				{data.map((location, index) => (
					<li ref={data.length === index + 1 ? lastNodeRef : null} key={location.id}>
						<Link to={path.locations.id(location.id)}>{location.name}</Link>
					</li>
				))}
			</ul>
			{loading && hasMore && <div>Loading...</div>}
			{error && <div>Error...</div>}
		</div>
	);
};

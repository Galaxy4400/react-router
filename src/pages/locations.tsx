import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { bff } from "../shared/bff";
import { useSort } from "../shared/hooks/use-sort";

export const Locations = () => {
	const { sortBy, sortSwitch } = useSort();

	return (
		<div>
			<h2>Locations</h2>
			<br />
			<button onClick={sortSwitch}>{sortBy}</button>
			<br />
			<br />
			<ul>
				{bff.getLocations(sortBy).map((location) => (
					<li key={location.id}>
						<Link to={path.locations.id(location.id)}>{location.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

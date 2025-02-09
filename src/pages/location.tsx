import { Link, Navigate, useParams } from "react-router-dom";
import { bff } from "../shared/bff";
import { path } from "../shared/path";

export const Location = () => {
	const { id } = useParams();

	const location = bff.getLocation(id);

	if (!location) {
		return <Navigate to={path.page404()} />;
	}

	return (
		<div>
			<h2>Location</h2>
			<br />
			<nav className="prev-next">
				<Link to={path.locations.id(Number(id) - 1)}>Prev</Link>
				<Link to={path.locations.id(Number(id) + 1)}>Next</Link>
			</nav>
			<br />
			<dl>
				<dt>id</dt>
				<dd>{location.id}</dd>
				<dt>name</dt>
				<dd>{location.name}</dd>
				<dt>type</dt>
				<dd>{location.type}</dd>
				<dt>dimension</dt>
				<dd>{location.dimension}</dd>
				<dt>created</dt>
				<dd>{location.created}</dd>
			</dl>
		</div>
	);
};

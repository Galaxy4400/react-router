import { Link, Navigate, useParams } from "react-router-dom";
import { bff } from "../shared/bff";
import { path } from "../shared/path";

export const Episode = () => {
	const { id } = useParams();

	const episonde = bff.getEpisode(id);

	if (!episonde) {
		return <Navigate to={path.page404()} />;
	}

	return (
		<div>
			<h2>Episode</h2>
			<br />
			<nav className="prev-next">
				<Link to={path.episodes.id(Number(id) - 1)}>Prev</Link>
				<Link to={path.episodes.id(Number(id) + 1)}>Next</Link>
			</nav>
			<br />
			<dl>
				<dt>id</dt>
				<dd>{episonde.id}</dd>
				<dt>name</dt>
				<dd>{episonde.name}</dd>
				<dt>air_date</dt>
				<dd>{episonde.air_date}</dd>
				<dt>episode</dt>
				<dd>{episonde.episode}</dd>
				<dt>created</dt>
				<dd>{episonde.created}</dd>
			</dl>
		</div>
	);
};

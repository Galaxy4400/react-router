import { Link, Navigate, useParams } from "react-router-dom";
import { bff } from "../shared/bff";
import { path } from "../shared/path";

export const Hero = () => {
	const { id } = useParams();

	const hero = bff.getHero(id);

	if (!hero) {
		return <Navigate to={path.page404()} />;
	}

	return (
		<div>
			<h2>Hero</h2>
			<br />
			<nav className="prev-next">
				<Link to={path.heroes.id(Number(id) - 1)}>Prev</Link>
				<Link to={path.heroes.id(Number(id) + 1)}>Next</Link>
			</nav>
			<br />
			<dl>
				<dt>id</dt>
				<dd>{hero.id}</dd>
				<dt>name</dt>
				<dd>{hero.name}</dd>
				<dt>status</dt>
				<dd>{hero.status}</dd>
				<dt>species</dt>
				<dd>{hero.species}</dd>
				<dt>type</dt>
				<dd>{hero.type}</dd>
				<dt>gender</dt>
				<dd>{hero.gender}</dd>
				<dt>image</dt>
				<dd>
					<img src={hero.image} alt={hero.name} />
				</dd>
				<dt>created</dt>
				<dd>{hero.created}</dd>
			</dl>
		</div>
	);
};

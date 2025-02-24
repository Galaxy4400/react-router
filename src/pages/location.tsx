import { Link, Navigate, useParams } from "react-router-dom";
import { path } from "../shared/path";
import { ILocation } from "../shared/types";
import { useEffect, useState } from "react";

export const Location = () => {
	const { id } = useParams();
	const [location, setHero] = useState<ILocation | null>(null);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/location/${id}`)
			.then((response) => response.json())
			.then((character) => setHero(character));
	}, [id]);

	if (!id) {
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
				<dd>{location?.id}</dd>
				<dt>name</dt>
				<dd>{location?.name}</dd>
				<dt>type</dt>
				<dd>{location?.type}</dd>
				<dt>dimension</dt>
				<dd>{location?.dimension}</dd>
				<dt>created</dt>
				<dd>{location?.created}</dd>
			</dl>
		</div>
	);
};

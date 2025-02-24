import { Link, Navigate, useParams } from "react-router-dom";
import { path } from "../shared/path";
import { useEffect, useState } from "react";
import { ICharacter } from "../shared/types";

export const Hero = () => {
	const { id } = useParams();
	const [hero, setHero] = useState<ICharacter | null>(null);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((character) => setHero(character));
	}, [id]);

	if (!id) {
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
				<dd>{hero?.id}</dd>
				<dt>name</dt>
				<dd>{hero?.name}</dd>
				<dt>status</dt>
				<dd>{hero?.status}</dd>
				<dt>species</dt>
				<dd>{hero?.species}</dd>
				<dt>type</dt>
				<dd>{hero?.type}</dd>
				<dt>gender</dt>
				<dd>{hero?.gender}</dd>
				<dt>image</dt>
				<dd>
					<img src={hero?.image} alt={hero?.name} />
				</dd>
				<dt>created</dt>
				<dd>{hero?.created}</dd>
			</dl>
		</div>
	);
};

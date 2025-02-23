import { Link, Navigate, useParams } from "react-router-dom";
import { path } from "../shared/path";
import { useEffect, useState } from "react";
import { IEpisode } from "../shared/types";

export const Episode = () => {
	const { id } = useParams();
	const [episode, setHero] = useState<IEpisode | null>(null);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/episode/${id}`)
			.then((response) => response.json())
			.then((episode) => setHero(episode));
	}, [id]);

	if (!id) {
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
				<dd>{episode?.id}</dd>
				<dt>name</dt>
				<dd>{episode?.name}</dd>
				<dt>air_date</dt>
				<dd>{episode?.air_date}</dd>
				<dt>episode</dt>
				<dd>{episode?.episode}</dd>
				<dt>created</dt>
				<dd>{episode?.created}</dd>
			</dl>
		</div>
	);
};

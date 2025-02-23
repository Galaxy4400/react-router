import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { useInfinitySource } from "../shared/hooks";

interface Location {
	name: string;
	url: string;
}

interface Origin {
	name: string;
	url: string;
}

interface Character {
	created: string;
	episode: string[];
	gender: string;
	id: number;
	image: string;
	location: Location;
	name: string;
	origin: Origin;
	species: string;
	status: string;
	type: string;
	url: string;
}

export const Heroes = () => {
	const { data, loading, error, hasMore, lastNodeRef } = useInfinitySource<Character>("character");

	return (
		<div>
			<h2>Heroes</h2>
			<br />
			<ul>
				{data.map((hero, index) => (
					<li ref={data.length === index + 1 ? lastNodeRef : null} key={hero.id}>
						<Link to={path.heroes.id(hero.id)}>{hero.name}</Link>
					</li>
				))}
			</ul>
			{loading && hasMore && <div>Loading...</div>}
			{error && <div>Error...</div>}
		</div>
	);
};

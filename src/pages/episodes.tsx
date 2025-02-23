import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { useInfinitySource } from "../shared/hooks";

interface Episode {
	air_date: string;
	characters: string[];
	created: string;
	episode: string;
	id: number;
	name: string;
	url: string;
}

export const Episodes = () => {
	const { data, loading, error, hasMore, lastNodeRef } = useInfinitySource<Episode>("episode");

	return (
		<div>
			<h2>Episodes</h2>
			<br />
			<ul>
				{data.map((episode, index) => (
					<li ref={data.length === index + 1 ? lastNodeRef : null} key={episode.id}>
						<Link to={path.episodes.id(episode.id)}>{episode.name}</Link>
					</li>
				))}
			</ul>
			{loading && hasMore && <div>Loading...</div>}
			{error && <div>Error...</div>}
		</div>
	);
};

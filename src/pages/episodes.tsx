import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { bff } from "../shared/bff";
import { useSort } from "../shared/hooks/use-sort";

export const Episodes = () => {
	const { sortBy, sortSwitch } = useSort();

	return (
		<div>
			<h2>Episodes</h2>
			<br />
			<button onClick={sortSwitch}>{sortBy}</button>
			<br />
			<br />
			<ul>
				{bff.getHeroes(sortBy).map((episode) => (
					<li key={episode.id}>
						<Link to={path.episodes.id(episode.id)}>{episode.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

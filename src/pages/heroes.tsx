import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { bff } from "../shared/bff";
import { useSort } from "../shared/hooks/use-sort";

export const Heroes = () => {
	const { sortBy, sortSwitch } = useSort();

	return (
		<div>
			<h2>Heroes</h2>
			<br />
			<button onClick={sortSwitch}>{sortBy}</button>
			<br />
			<br />
			<ul>
				{bff.getHeroes(sortBy).map((hero) => (
					<li key={hero.id}>
						<Link to={path.heroes.id(hero.id)}>{hero.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

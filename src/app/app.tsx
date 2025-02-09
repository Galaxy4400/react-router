import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Page404 } from "../pages/404";
import { Heroes } from "../pages/heroes";
import { Locations } from "../pages/locations";
import { Episodes } from "../pages/episodes";
import { path } from "../shared/path";
import { Hero } from "../pages/hero";
import { Location } from "../pages/location";
import { Episode } from "../pages/episode";

export const App = () => {
	return (
		<div className="app">
			<nav>
				<ul className="menu">
					<NavLink to={path.home()} end>
						Home
					</NavLink>
					<NavLink to={path.heroes.root()}>Heroes</NavLink>
					<NavLink to={path.locations.root()}>Locations</NavLink>
					<NavLink to={path.episodes.root()}>Episodes</NavLink>
				</ul>
			</nav>
			<Routes>
				<Route path={path.home()} element={<Home />} />
				<Route path={path.heroes.root()} element={<Heroes />} />
				<Route path={path.heroes.id()} element={<Hero />} />
				<Route path={path.locations.root()} element={<Locations />} />
				<Route path={path.locations.id()} element={<Location />} />
				<Route path={path.episodes.root()} element={<Episodes />} />
				<Route path={path.episodes.id()} element={<Episode />} />
				<Route path={path.others()} element={<Page404 />} />
			</Routes>
		</div>
	);
};

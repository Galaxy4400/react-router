import { AuthStatus } from "../../features";
import { NavLink, Outlet } from "react-router-dom";
import { path } from "../../shared/path";

export const MainLayout = () => {
	return (
		<div className="app">
			<AuthStatus />
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
			<Outlet />
		</div>
	);
};

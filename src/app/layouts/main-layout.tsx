import { AuthStatus } from "../../features";
import { NavLink, Outlet } from "react-router-dom";
import { path } from "../../shared/path";
import { Suspense } from "react";
import { ErrorBoundary } from "../../shared/components";

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
			<Suspense fallback={<h2>Loading...</h2>}>
				<ErrorBoundary>
					<Outlet />
				</ErrorBoundary>
			</Suspense>
		</div>
	);
};

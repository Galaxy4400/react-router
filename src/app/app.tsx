import { Route, Routes } from "react-router-dom";
import { path } from "../shared/path";
import { Providers } from "./providers";
import { Login } from "../pages/login";
import { MainLayout } from "./layouts";
import { PrivateRoute } from "./router";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home").then((module) => ({ default: module.Home })));
const Page404 = lazy(() => import("../pages/404").then((module) => ({ default: module.Page404 })));
const Heroes = lazy(() => import("../pages/heroes").then((module) => ({ default: module.Heroes })));
const Hero = lazy(() => import("../pages/hero").then((module) => ({ default: module.Hero })));
const Locations = lazy(() => import("../pages/locations").then((module) => ({ default: module.Locations })));
const Location = lazy(() => import("../pages/location").then((module) => ({ default: module.Location })));
const Episodes = lazy(() => import("../pages/episodes").then((module) => ({ default: module.Episodes })));
const Episode = lazy(() => import("../pages/episode").then((module) => ({ default: module.Episode })));

export const App = () => {
	return (
		<Providers>
			<Routes>
				<Route element={<MainLayout />}>
					<Route element={<PrivateRoute />}>
						<Route path={path.heroes.root()} element={<Heroes />} />
						<Route path={path.heroes.id()} element={<Hero />} />
						<Route path={path.locations.root()} element={<Locations />} />
						<Route path={path.locations.id()} element={<Location />} />
						<Route path={path.episodes.root()} element={<Episodes />} />
						<Route path={path.episodes.id()} element={<Episode />} />
					</Route>
					<Route path={path.home()} element={<Home />} />
					<Route path={path.others()} element={<Page404 />} />
				</Route>
				<Route path={path.login()} element={<Login />} />
			</Routes>
		</Providers>
	);
};

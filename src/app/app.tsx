import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Page404 } from "../pages/404";
import { Heroes } from "../pages/heroes";
import { Locations } from "../pages/locations";
import { Episodes } from "../pages/episodes";
import { path } from "../shared/path";
import { Hero } from "../pages/hero";
import { Location } from "../pages/location";
import { Episode } from "../pages/episode";
import { Providers } from "./providers";
import { Login } from "../pages/login";
import { MainLayout } from "./layouts";
import { PrivateRoute } from "./router";

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

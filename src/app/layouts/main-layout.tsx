import { AuthStatus } from "../../features";
import { NavLink, Outlet } from "react-router-dom";
import { path } from "../../shared/path";
import { Suspense } from "react";
import { ErrorBoundary } from "../../shared/components";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";

export const MainLayout = () => {
	return (
		<Box>
			<Box marginBottom="50px">
				<AppBar position="static">
					<Toolbar>
						<Stack direction="row" justifyContent="space-between" spacing={1} width="100%">
							<Stack direction="row" alignItems="center" spacing={2}>
								<Button variant="contained" component={NavLink} to={path.home()} end>
									Home
								</Button>
								<Button variant="contained" component={NavLink} to={path.heroes.root()}>
									Heroes
								</Button>
								<Button variant="contained" component={NavLink} to={path.locations.root()}>
									Locations
								</Button>
								<Button variant="contained" component={NavLink} to={path.episodes.root()}>
									Episodes
								</Button>
							</Stack>
							<AuthStatus />
						</Stack>
					</Toolbar>
				</AppBar>
			</Box>
			<Container maxWidth="md">
				<Suspense fallback={<h2>Loading...</h2>}>
					<ErrorBoundary>
						<Outlet />
					</ErrorBoundary>
				</Suspense>
			</Container>
		</Box>
	);
};

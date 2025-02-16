import { PropsWithChildren } from "react";
import { useAuth } from "../providers/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { path } from "../../shared/path";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
	const auth = useAuth();
	const location = useLocation();

	if (auth?.user === null) {
		return <Navigate to={path.login()} state={location.pathname} replace />;
	}

	return (
		<>
			{children} <Outlet />
		</>
	);
};

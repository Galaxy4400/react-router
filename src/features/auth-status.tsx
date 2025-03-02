import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../app/providers/auth";
import { path } from "../shared/path";
import { Button, Stack, Typography } from "@mui/material";

export const AuthStatus = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const signoutHandler = () => {
		auth?.signout(() => {
			navigate(path.home());
		});
	};

	if (!auth?.user) {
		return (
			<Button variant="contained" component={NavLink} to={path.login()}>
				Войти
			</Button>
		);
	}

	return (
		<Stack direction="row" alignItems="center" spacing={2}>
			<Typography variant="h6">Добро пожаловать {auth.user}</Typography>
			<Button variant="contained" onClick={signoutHandler}>
				Выйти
			</Button>
		</Stack>
	);
};

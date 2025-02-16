import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../app/providers/auth";
import { path } from "../shared/path";

export const AuthStatus = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const signoutHandler = () => {
		auth?.signout(() => {
			navigate(path.home());
		});
	};

	if (!auth?.user) {
		return <NavLink to={path.login()}>Войти</NavLink>;
	}

	return (
		<div className="welcome">
			<h2>Добро пожаловать {auth.user}</h2>
			<button onClick={signoutHandler}>Выйти</button>
		</div>
	);
};

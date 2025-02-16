import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../app/providers/auth";
import { FormEvent } from "react";
import { path } from "../shared/path";

export const Login = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const userName = formData.get("username");

		if (typeof userName !== "string") return;

		auth?.signin(userName, () => {
			navigate(location.state?.from || path.home());
		});
	};

	return (
		<div className="login-form-wrapper">
			<button onClick={() => navigate(-1)}>Назад</button>
			<form className="login-form" onSubmit={submitHandler}>
				<input type="text" name="username" placeholder="Имя пользователя" />
				<button type="submit">Войти</button>
			</form>
		</div>
	);
};

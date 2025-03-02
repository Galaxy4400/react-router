import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../app/providers/auth";
import { FormEvent } from "react";
import { path } from "../shared/path";
import { Box, Button, Stack, TextField } from "@mui/material";

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
		<Stack minHeight="100vh" alignItems="center" justifyContent="center">
			<Stack spacing={2}>
				<Button variant="outlined" onClick={() => navigate(-1)}>
					Назад
				</Button>
				<Box component="form" onSubmit={submitHandler} minWidth="500px">
					<Stack direction="row" spacing={2}>
						<TextField type="text" name="username" placeholder="Имя пользователя" sx={{ flex: 1 }} />
						<Button type="submit" variant="contained">
							Войти
						</Button>
					</Stack>
				</Box>
			</Stack>
		</Stack>
	);
};

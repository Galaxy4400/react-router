import { PropsWithChildren, useState } from "react";
import { AuthContext } from "./auth.context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<null | string>(() => localStorage.getItem("user"));

	const signin = (newUser: string, callback?: () => void) => {
		setUser(newUser);

		localStorage.setItem("user", newUser);

		if (callback) {
			callback();
		}
	};

	const signout = (callback?: () => void) => {
		setUser(null);

		localStorage.removeItem("user");

		if (callback) {
			callback();
		}
	};

	const value = {
		user,
		signin,
		signout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

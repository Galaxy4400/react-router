import { createContext } from "react";

interface AuthcontextType {
	user: null | string;
	signin: (newUser: string, callback?: () => void) => void;
	signout: (callback?: () => void) => void;
}

export const AuthContext = createContext<null | AuthcontextType>(null);

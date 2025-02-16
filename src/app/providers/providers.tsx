import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth";

export const Providers = ({ children }: PropsWithChildren) => {
	return <AuthProvider>{children}</AuthProvider>;
};

import { useState } from "react";

export const Home = () => {
	const [hasError, setHasError] = useState(false);

	const triggerError = () => {
		setHasError(true);
	};

	if (hasError) {
		throw new Error("Test error in Home component!");
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
			<h1>Home Page</h1>
			<button onClick={triggerError}>Trigger Error</button>
		</div>
	);
};

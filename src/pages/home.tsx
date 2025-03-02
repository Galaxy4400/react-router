import { Box, Button, Typography } from "@mui/material";
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
		<Box textAlign="center">
			<Typography variant="h1" marginBottom="20px">
				Home Page
			</Typography>
			<Button variant="contained" onClick={triggerError}>
				Trigger Error
			</Button>
		</Box>
	);
};

import { Link, Navigate, useParams } from "react-router-dom";
import { path } from "../shared/path";
import { ILocation } from "../shared/types";
import { useEffect, useState } from "react";
import {
	Box,
	Button,
	Stack,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from "@mui/material";

export const Location = () => {
	const { id } = useParams();
	const [location, setHero] = useState<ILocation | null>(null);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/location/${id}`)
			.then((response) => response.json())
			.then((character) => setHero(character));
	}, [id]);

	if (!id) {
		return <Navigate to={path.page404()} />;
	}

	return (
		<Box marginBottom="50px">
			<Typography variant="h2">Location</Typography>
			<Stack direction="row" component="nav" justifyContent="space-between" margin="30px 0">
				<Button variant="contained" component={Link} to={path.locations.id(Number(id) - 1)}>
					Prev
				</Button>
				<Button variant="contained" component={Link} to={path.locations.id(Number(id) + 1)}>
					Next
				</Button>
			</Stack>
			<TableContainer component="table">
				<TableBody>
					<TableRow>
						<TableCell>id</TableCell>
						<TableCell>{location?.id}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>name</TableCell>
						<TableCell>{location?.name}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>type</TableCell>
						<TableCell>{location?.type}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>dimension</TableCell>
						<TableCell>{location?.dimension}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>created</TableCell>
						<TableCell>{location?.created}</TableCell>
					</TableRow>
				</TableBody>
			</TableContainer>
		</Box>
	);
};

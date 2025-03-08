import { Link, Navigate, useParams } from "react-router-dom";
import { path } from "../shared/path";
import { useEffect, useState } from "react";
import { IEpisode } from "../shared/types";
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

export const Episode = () => {
	const { id } = useParams();
	const [episode, setHero] = useState<IEpisode | null>(null);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/episode/${id}`)
			.then((response) => response.json())
			.then((episode) => setHero(episode));
	}, [id]);

	if (!id) {
		return <Navigate to={path.page404()} />;
	}

	return (
		<Box marginBottom="50px">
			<Typography variant="h2">Episode</Typography>
			<Stack direction="row" component="nav" justifyContent="space-between" margin="30px 0">
				<Button variant="contained" component={Link} to={path.episodes.id(Number(id) - 1)}>
					Prev
				</Button>
				<Button variant="contained" component={Link} to={path.episodes.id(Number(id) + 1)}>
					Next
				</Button>
			</Stack>
			<TableContainer component="table">
				<TableBody>
					<TableRow>
						<TableCell>id</TableCell>
						<TableCell>{episode?.id}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>name</TableCell>
						<TableCell>{episode?.name}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>air_date</TableCell>
						<TableCell>{episode?.air_date}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>episode</TableCell>
						<TableCell>{episode?.episode}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>created</TableCell>
						<TableCell>{episode?.created}</TableCell>
					</TableRow>
				</TableBody>
			</TableContainer>
		</Box>
	);
};

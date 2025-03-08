import { Link, Navigate, useParams } from "react-router-dom";
import { path } from "../shared/path";
import { useEffect, useState } from "react";
import { ICharacter } from "../shared/types";
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

export const Hero = () => {
	const { id } = useParams();
	const [hero, setHero] = useState<ICharacter | null>(null);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((character) => setHero(character));
	}, [id]);

	if (!id) {
		return <Navigate to={path.page404()} />;
	}

	return (
		<Box marginBottom="50px">
			<Typography variant="h2">Hero</Typography>
			<Stack direction="row" component="nav" justifyContent="space-between" margin="30px 0">
				<Button variant="contained" component={Link} to={path.heroes.id(Number(id) - 1)}>
					Prev
				</Button>
				<Button variant="contained" component={Link} to={path.heroes.id(Number(id) + 1)}>
					Next
				</Button>
			</Stack>
			<TableContainer component="table">
				<TableBody>
					<TableRow>
						<TableCell>id</TableCell>
						<TableCell>{hero?.id}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>name</TableCell>
						<TableCell>{hero?.name}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>status</TableCell>
						<TableCell>{hero?.status}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>species</TableCell>
						<TableCell>{hero?.species}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>type</TableCell>
						<TableCell>{hero?.type}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>gender</TableCell>
						<TableCell>{hero?.gender}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>image</TableCell>
						<TableCell>
							<img src={hero?.image} alt={hero?.name} />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>created</TableCell>
						<TableCell>{hero?.created}</TableCell>
					</TableRow>
				</TableBody>
			</TableContainer>
		</Box>
	);
};

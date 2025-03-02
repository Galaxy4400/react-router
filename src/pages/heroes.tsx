import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { useInfinitySource } from "../shared/hooks";
import { ICharacter } from "../shared/types";
import { Box, List, ListItem, Typography } from "@mui/material";

export const Heroes = () => {
	const { data, loading, error, hasMore, lastNodeRef } = useInfinitySource<ICharacter>("character");

	return (
		<Box>
			<Typography variant="h2">Heroes</Typography>
			<List>
				{data.map((hero, index) => (
					<ListItem ref={data.length === index + 1 ? lastNodeRef : null} key={hero.id}>
						<Link to={path.heroes.id(hero.id)}>{hero.name}</Link>
					</ListItem>
				))}
			</List>
			{loading && hasMore && <Box>Loading...</Box>}
			{error && <Box>Error...</Box>}
		</Box>
	);
};

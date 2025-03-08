import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { useInfinitySource } from "../shared/hooks";
import { IEpisode } from "../shared/types";
import { Box, List, ListItem, Typography } from "@mui/material";

export const Episodes = () => {
	const { data, loading, error, hasMore, lastNodeRef } = useInfinitySource<IEpisode>("episode");

	return (
		<Box>
			<Typography variant="h2">Episodes</Typography>
			<List>
				{data.map((episode, index) => (
					<ListItem ref={data.length === index + 1 ? lastNodeRef : null} key={episode.id}>
						<Link to={path.episodes.id(episode.id)}>{episode.name}</Link>
					</ListItem>
				))}
			</List>
			{loading && hasMore && <Box>Loading...</Box>}
			{error && <Box>Error...</Box>}
		</Box>
	);
};

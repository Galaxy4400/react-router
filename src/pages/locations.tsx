import { Link } from "react-router-dom";
import { path } from "../shared/path";
import { useInfinitySource } from "../shared/hooks";
import { ILocation } from "../shared/types";
import { Box, List, ListItem, Typography } from "@mui/material";

export const Locations = () => {
	const { data, loading, error, hasMore, lastNodeRef } = useInfinitySource<ILocation>("location");

	return (
		<Box>
			<Typography variant="h2">Locations</Typography>
			<List>
				{data.map((location, index) => (
					<ListItem ref={data.length === index + 1 ? lastNodeRef : null} key={location.id}>
						<Link to={path.locations.id(location.id)}>{location.name}</Link>
					</ListItem>
				))}
			</List>
			{loading && hasMore && <Box>Loading...</Box>}
			{error && <Box>Error...</Box>}
		</Box>
	);
};

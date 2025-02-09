import heroes from "../shared/data/characters.json";
import locations from "../shared/data/location.json";
import episodes from "../shared/data/episode.json";

export type Sort = "asc" | "desc";

export const bff = {
	getHeroes: (sort: Sort = "asc") => {
		return sort === "asc"
			? heroes.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())
			: heroes.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
	},

	getLocations: (sort: Sort = "asc") => {
		return sort === "asc"
			? locations.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())
			: locations.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
	},

	getEpisodes: (sort: Sort = "asc") => {
		return sort === "asc"
			? episodes.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())
			: episodes.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
	},

	getHero: (id: string | number | undefined) => {
		if (!id) return null;

		return heroes.find((hero) => +hero.id === +id);
	},

	getLocation: (id: string | number | undefined) => {
		if (!id) return null;

		return locations.find((location) => +location.id === +id);
	},

	getEpisode: (id: string | number | undefined) => {
		if (!id) return null;

		return episodes.find((episode) => +episode.id === +id);
	},
};

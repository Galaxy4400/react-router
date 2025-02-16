type ID = string | number;

export const path = {
	root: "/react-router/",
	home() {
		return path.root;
	},
	login() {
		return path.root.concat("login");
	},
	page404() {
		return path.root.concat("404");
	},
	others() {
		return path.root.concat("*");
	},
	heroes: {
		root() {
			return path.root.concat("heroes");
		},
		id(id: ID = ":id") {
			return path.heroes.root().concat("/", `${id}`);
		},
	},
	locations: {
		root() {
			return path.root.concat("locations");
		},
		id(id: ID = ":id") {
			return path.locations.root().concat("/", `${id}`);
		},
	},
	episodes: {
		root() {
			return path.root.concat("episodes");
		},
		id(id: ID = ":id") {
			return path.episodes.root().concat("/", `${id}`);
		},
	},
};

export interface IEpisode {
	air_date: string;
	characters: string[];
	created: string;
	episode: string;
	id: number;
	name: string;
	url: string;
}

// export interface ILocation {
// 	name: string;
// 	url: string;
// }

export interface IOrigin {
	name: string;
	url: string;
}

export interface ICharacter {
	created: string;
	episode: string[];
	gender: string;
	id: number;
	image: string;
	location: Location;
	name: string;
	origin: IOrigin;
	species: string;
	status: string;
	type: string;
	url: string;
}

export interface ILocation {
	created: string;
	dimension: string;
	id: number;
	name: string;
	residents: string[];
	type: string;
	url: string;
}

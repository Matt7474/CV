// project de l'API
// export interface iProject {
// 	image: string;
// 	title: string;
// 	slug: string;
// 	github: string | null;
// 	description: string;
// 	date: string;
// 	conception: string[];
// 	front: string[];
// 	back: string[];
// 	fullstack: string[];
// 	bdd: string[];
// 	created_at: string;
// 	updated_at: string;
// };

// project en local
export interface iProject {
	image: string;
	title: string;
	slug: string;
	github: string | null;
	site: string | null;
	description: string;
	date: string;
	created_at: string;
	updated_at: string;
	techno: {
		conception: string[];
		front: string[];
		back: string[];
		fullstack: string[];
		bdd: string[];
	};
}

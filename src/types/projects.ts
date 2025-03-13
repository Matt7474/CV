export interface iProject {
	image: string;
	title: string;
	slug: string;
	github: string | null;
	description: string;
	date: Date;
	conception: string[];
	front: string[];
	back: string[];
	fullstack: string[];
	bdd: string[];
	created_at: string;
	updated_at: string;
}

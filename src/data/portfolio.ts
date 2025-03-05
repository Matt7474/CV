export const portfolio = [
	{
		id: 1,
		image: "/ocoffee.png",
		title: "O'Coffee",
		description:
			"O'Coffee est une application web développée avec Node.js, Express et le moteur de templates EJS, permettant de générer des pages HTML dynamiques côté serveur. Le projet suit une architecture MVC (Modèle-Vue-Contrôleur) pour assurer une structure de code claire et maintenable. La conception en amont a inclus la réalisation de user stories, d’un MCD (Modèle Conceptuel de Données) et d’une modélisation via la méthode Merise. La base de données est gérée avec PostgreSQL et les interactions sont facilitées par Sequelize, un ORM efficace pour Node.js. ☕️",
		slug: "Ocoffee",
		github: "https://github.com/Matt7474/oCoffee",
		created_at: "22/11/2024",
		techno: {
			conception: ["Merise", "User-stories", "MCD"],
			front: ["HTML", "CSS", "JavaScript"],
			back: ["EJS", "NodeJs", "Express"],
			fullStack: ["Architecture MVC"],
			bdd: ["Postgres", "Sequelize"],
		},
	},
	{
		id: 2,
		image: "/orecette.png",
		title: "O'Recipes",
		description:
			"O-recette est une application web développée avec React et TypeScript, offrant une architecture moderne et performante. Le projet utilise Vite pour un bundling rapide et efficace, accompagné de Tailwind CSS & DaisyUI pour un design réactif et épuré. Le code est maintenu propre grâce à Biome pour le linting et le formatage. Une intégration continue (CI) est mise en place via GitHub Actions, garantissant un déploiement sans erreur. Enfin, l'application est déployée sur Surge, une solution simple et rapide pour l'hébergement statique. 🍪",
		slug: "Orecette",
		github: "https://github.com/Matt7474/O-recette/",
		created_at: "13/02/2025",
		techno: {
			conception: [""],
			front: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
			back: ["API"],
			fullStack: [""],
			bdd: ["API"],
		},
	},
];

import { Link } from "react-router-dom";
import useDarkMode from "../store/darkmode";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import type { iProject } from "../interface/project";

export default function Portfolio() {
	const { isDarkmode } = useDarkMode();
	const [isLoading, setIsLoading] = useState(false);
	const [projects, setProjects] = useState<iProject[]>([]);
	const [refreshKey, setRefreshKey] = useState(0);

	// Chargement des projets
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setIsLoading(true);

		const fetchData = async () => {
			try {
				const response = await fetch("https://apicv.matt-dev.fr/api/projects");

				if (response.ok) {
					const json = await response.json();
					setProjects(json);
					setIsLoading(false);
				} else {
					throw new Error("API non disponible");
				}
			} catch (e) {
				console.error("Error fetching data:", e);

				const interval = setInterval(async () => {
					try {
						const retryResponse = await fetch(
							"https://apicv.matt-dev.fr/api/projects",
						);
						if (retryResponse.ok) {
							clearInterval(interval);
							setRefreshKey((prevKey) => prevKey + 1); // Change la clé pour forcer un re-render
						}
					} catch (error) {
						console.log("API toujours indisponible, nouvelle tentative...");
					}
				}, 3000); // Vérifie toutes les 3 secondes si l'API est de retour
			}
		};

		fetchData();
	}, [refreshKey]); // Déclenche un nouveau fetch quand refreshKey change

	return (
		<div>
			{isLoading ? (
				<div className="flex flex-col justify-self-center self-center mt-40 sm:mt-50 xl:mt-70">
					<div
						className={
							isDarkmode
								? "self-center loading loading-spinner text-info flex w-8.5 xl:w-12 2xl:w-8 3xl:mt-50 3xl:w-12 4xl:"
								: "self-center loading loading-spinner text-warning flex w-8.5 xl:w-12 2xl:w-8 3xl:mt-50 3xl:w-12 4xl:"
						}
					/>
					<p
						className={
							isDarkmode
								? "self-center text-white mt-4 md:font-semibold md:text-lg xl:text-xl"
								: "self-center text-black mt-4 md:font-semibold md:text-lg xl:text-xl"
						}
					>
						Chargement des données ...
					</p>
				</div>
			) : (
				<div className="justify-items-center  mt-10 -mb-10">
					<h1
						className={
							isDarkmode
								? "!text-white text-lg font-semibold 3xl:mt-40 flex justify-center"
								: "!text-black text-lg font-semibold 3xl:mt-40 flex justify-center"
						}
					>
						Certains de mes projets réalisés
					</h1>
					<div className="pt-10 gap-8 grid justify-items-center md:grid-cols-2 md:mx-10 lg:grid-cols-3 xl:justify-self-center 2xl:grid-cols-4 mt-10 3xl:flex 3xl:justify-center 4xl:grid-cols-5 ">
						{projects
							.slice()
							.sort((a, b) => {
								const dateA = a.date ? new Date(a.date).getTime() : 0; // Si a.date est undefined, on donne 0 comme valeur par défaut
								const dateB = b.date ? new Date(b.date).getTime() : 0; // Pareil pour b.date
								return dateB - dateA;
							})
							.map((project) => (
								<Link
									to={`/project/${project.slug}`}
									key={project.slug}
									state={{ project }}
									className={
										isDarkmode
											? "max-w-80 border border-cyan-400 text-white rounded-xl p-4 flex flex-col justify-between transition-transform duration-150 hover:translate-y-4"
											: "max-w-80 border border-amber-300 text-black rounded-xl p-4 flex flex-col justify-between transition-transform duration-150 hover:translate-y-4"
									}
								>
									<div>
										<img
											className="w-100 aspect-4/3 border-transparent rounded-xl object-cover"
											src={`https://apicv.matt-dev.fr${project.image}`}
											alt={`image-projet-${project.title}`}
										/>
										<h2 className="text-2xl font-bold my-4">{project.title}</h2>
										<p className="text-xl">
											{project.description?.split(" ").slice(0, 10).join(" ")}
											...
										</p>
									</div>
									<p className="text-xl mt-4 flex justify-between">
										Projet réalisé le :{" "}
										<em>{dayjs(project.date).format("DD/MM/YYYY")}</em>
									</p>
								</Link>
							))}
					</div>
				</div>
			)}
		</div>
	);
}

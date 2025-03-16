import { Link } from "react-router-dom";
// import { portfolio } from "../data/portfolio";
import useDarkMode from "../store/darkmode";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import type { iProject } from "../interface/project";

export default function Portfolio() {
	const { isDarkmode } = useDarkMode();
	const [projects, setProjects] = useState<iProject[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://apicv.matt-dev.fr/api/projects");
				const json = await response.json();

				setProjects(json);
			} catch (e) {
				console.error("Error fetching data:", e);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="justify-items-center mt-10 -mb-10">
			<h1
				className={
					isDarkmode
						? "!text-white text-lg font-semibold 3xl:mt-40"
						: "!text-black text-lg font-semibold 3xl:mt-40"
				}
			>
				Certains de mes projets réalisés
			</h1>
			<div className="pt-10 gap-8 grid justify-items-center md:grid-cols-2 md:mx-10 lg:grid-cols-3 xl:justify-self-center 2xl:grid-cols-4 mt-10 4xl:grid-cols-5">
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
									{project.description?.split(" ").slice(0, 10).join(" ")}...
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
	);
}

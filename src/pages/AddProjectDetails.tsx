import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../store/darkmode";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import dayjs from "dayjs";
import type { iProject } from "../interface/project";

export default function AddProjectDetails() {
	const location = useLocation();
	const project = location.state as iProject;

	const [isOpen, setIsOpen] = useState(false);
	const { isDarkmode } = useDarkMode();

	if (!project) return <p>Projet non trouvé</p>;
	return (
		<div className="md:mx-8 lg:mx-24 xl:pt-8 xl:mx-40 2xl:mx-70 3xl:mt-20 3xl:mx-80 4xl:mx-120 4xl:mt-30">
			{/* <div className="mt-60 p-4 mx-100"> */}

			<div className="pt-4 pl-4 3xl:pl-8">
				{/* <div className="pb-12"> */}
				<Link
					to={"/addproject"}
					className={
						isDarkmode
							? "text-white flex hover:text-cyan-500  duration-300"
							: "text-black flex hover:text-cyan-500  duration-300"
					}
				>
					<ArrowLeft />
					Retour
				</Link>
			</div>

			<h1
				className={
					isDarkmode
						? "text-white pt-4 pl-4 pb-2 text-2xl font-semibold 3xl:pt-8 3xl:pl-8 3xl:text-4xl"
						: "text-black pt-4 pl-4 pb-2 text-2xl font-semibold 3xl:pt-8 3xl:pl-8 3xl:text-4xl"
				}
			>
				{project.title}
			</h1>

			<div className="lg:flex">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="flex lg:w-1/2 lg:aspect-[16/9]"
					onClick={() => setIsOpen(true)}
				>
					<img
						// src={`http://localhost:3010${project.image}?t=${new Date().getTime()}`}
						src={`https://apicv.matt-dev.fr${project.image}`}
						alt={`image-projet-${project.title}`}
						className={
							isDarkmode
								? "w-9/10 rounded-md mx-auto bg-emerald-500 p-0.5 lg:my-12 xl:my-8 4xl:w-7/10"
								: "w-9/10 rounded-md mx-auto bg-gradient-to-b from-amber-400 via-pink-400 to-indigo-800 p-0.5 lg:my-12 xl:my-8 4xl:w-7/10"
						}
					/>
					{/* Modal */}
					{isOpen && (
						<div
							className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50"
							onClick={() => setIsOpen(false)} // Ferme la modal quand tu cliques sur le fond
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") setIsOpen(false);
							}}
							tabIndex={0}
							// biome-ignore lint/a11y/useSemanticElements: <explanation>
							role="button"
							aria-label="Fermer la modal"
						>
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<div
								className="bg-white p-3 rounded-2xl shadow-lg w-4/5 sm:w-3/4 lg:w-2/3 xl:w-3/4"
								onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image
							>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<img
									// src={`http://localhost:3010${project.image}?t=${new Date().getTime()}`}
									src={`https://apicv.matt-dev.fr${project.image}`}
									alt={`image-projet-${project.title}`}
									className="rounded-xl w-full h-auto object-cover max-h-[80vh]"
									onClick={() => setIsOpen(false)} // Ferme la modal quand tu cliques sur l'image
								/>
							</div>
						</div>
					)}
					{/* Fin Modal */}
				</div>
				<div className="lg:w-1/2 3xl:text-xl 3xl:pt-2">
					{/* <div className="flex w-2/3 flex-col justify-between"> */}
					<p
						className={
							isDarkmode
								? "text-white p-4 text-justify"
								: "text-black p-4 text-justify"
						}
					>
						{project.description}
					</p>

					<div
						className={
							isDarkmode
								? "text-white py-2 px-4 flex justify-between"
								: "text-black py-2 px-4 flex justify-between"
						}
					>
						<div className="flex flex-col">
							{project.github ? (
								<a
									href={project.github}
									target="_blank"
									rel="noreferrer"
									className={
										isDarkmode
											? "underline hover:text-emerald-300"
											: "underline hover:text-cyan-400"
									}
								>
									Lien vers Github
								</a>
							) : (
								<p>Lien vers Github non disponible</p>
							)}
							{project.site ? (
								<a
									href={project.site}
									target="_blank"
									rel="noreferrer"
									className={
										isDarkmode
											? "underline hover:text-emerald-300 "
											: "underline hover:text-cyan-400"
									}
								>
									Lien vers le site
								</a>
							) : (
								<p>Lien vers le site non disponible</p>
							)}
						</div>

						<em className="flex flex-wrap w-1/4">
							Réalisé le : {dayjs(project.date).format("DD/MM/YYYY")}
						</em>
					</div>
				</div>
			</div>

			{/* SECTION TECHNO */}
			<section
				className={
					isDarkmode
						? "text-white p-4 xl:flex md:justify-around 4xl:justify-center 4xl:gap-20 "
						: "text-black p-4 xl:flex md:justify-around 4xl:justify-center 4xl:gap-20 "
				}
			>
				<p
					className={
						isDarkmode
							? "font-semibold xl:pt-4 3xl:text-xl text-emerald-300"
							: "font-semibold xl:pt-4 3xl:text-xl text-cyan-400"
					}
				>
					Technos utilisées :{" "}
				</p>

				<div className="grid grid-cols-3 pt-4 justify-items-stretch gap-4 md:grid-cols-5 3xl:text-xl">
					<ul
						className={
							isDarkmode
								? "pb-4 xl:border-l-2 md:pl-6 md:border-emerald-500"
								: "pb-4 xl:border-l-2 md:pl-6 md:border-indigo-800"
						}
					>
						<p
							className={
								isDarkmode
									? "font-medium border-amber-300 pb-1 text-emerald-300 "
									: "font-medium border-amber-300 pb-1 text-cyan-400 "
							}
						>
							Conception
						</p>
						{project.conception?.map((conception: string) => (
							<li key={conception}>{conception}</li>
						))}
					</ul>

					<ul
						className={
							isDarkmode
								? "pb-4 md:border-l-2 md:pl-6 md:border-emerald-500 "
								: "pb-4 md:border-l-2 md:pl-6 md:border-indigo-800 "
						}
					>
						<p
							className={
								isDarkmode
									? "font-medium border-amber-300 pb-1 text-emerald-300"
									: "font-medium border-amber-300 pb-1 text-cyan-400"
							}
						>
							Front
						</p>
						{project.front?.map((front: string) => (
							<li key={front}>{front}</li>
						))}
					</ul>
					<ul
						className={
							isDarkmode
								? "pb-4 md:border-l-2 md:pl-6 md:border-emerald-500"
								: "pb-4 md:border-l-2 md:pl-6 md:border-indigo-800"
						}
					>
						<p
							className={
								isDarkmode
									? "font-medium border-amber-300 pb-1 text-emerald-300"
									: "font-medium border-amber-300 pb-1 text-cyan-400"
							}
						>
							Back
						</p>
						{project.back?.map((back: string) => (
							<li key={back}>{back}</li>
						))}
					</ul>
					<ul
						className={
							isDarkmode
								? "pb-4 md:border-l-2 md:pl-6 md:border-emerald-500"
								: "pb-4 md:border-l-2 md:pl-6 md:border-indigo-800"
						}
					>
						<p
							className={
								isDarkmode
									? "font-medium border-amber-300 pb-1 text-emerald-300"
									: "font-medium border-amber-300 pb-1 text-cyan-400"
							}
						>
							FullStack
						</p>
						{project.fullstack?.map((fullstack: string) => (
							<li key={fullstack}>{fullstack}</li>
						))}
					</ul>
					<ul
						className={
							isDarkmode
								? "pb-4 md:border-l-2 md:pl-6 md:border-emerald-500 md:flex md:flex-col"
								: "pb-4 md:border-l-2 md:pl-6 md:border-indigo-800 md:flex md:flex-col"
						}
					>
						<p
							className={
								isDarkmode
									? "font-medium border-amber-300 pb-1  text-emerald-300 "
									: "font-medium border-amber-300 pb-1  text-cyan-400 "
							}
						>
							BDD
						</p>
						{project.bdd?.map((bdd: string) => (
							<li key={bdd}>{bdd}</li>
						))}
					</ul>
				</div>
			</section>
			{/* FIN SECTION TECHNO */}
		</div>
	);
}

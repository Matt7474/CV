import { Link } from "react-router-dom";
// import { projects } from "../data";
import useDarkMode from "../store/darkmode";
import { useEffect, useState } from "react";

// import { portfolio } from "../data/portfolio";
import { CirclePlus, Pencil, Trash2 } from "lucide-react";
import dayjs from "dayjs";
import type { iProject } from "../types/projects";

export default function AddProject() {
	const { isDarkmode } = useDarkMode();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [slug, setSlug] = useState("");
	const [github, setGithub] = useState("");
	const [site, setSite] = useState("");
	const [image, setImage] = useState<File | null>(null);
	const [date, setDate] = useState("");
	const [isEditMode, setIsEditMode] = useState(false);
	const [currentProject, setCurrentProject] = useState<iProject | null>(null);
	const [technoConception, setTechnoConception] = useState<string[]>([]);
	const [technoFront, setTechnoFront] = useState<string[]>([]);
	const [technoBack, setTechnoBack] = useState<string[]>([]);
	const [technoFullstack, setTechnoFullstack] = useState<string[]>([]);
	const [technoBDD, setTechnoBDD] = useState<string[]>([]);

	// États pour les champs de saisie
	const [inputConception, setInputConception] = useState("");
	const [inputFront, setInputFront] = useState("");
	const [inputBack, setInputBack] = useState("");
	const [inputFullstack, setInputFullstack] = useState("");
	const [inputBDD, setInputBDD] = useState("");

	const [projects, setProjects] = useState<iProject[]>([]);
	const [projectSlug, setProjectSlug] = useState<string | null>(null);

	// Chargement des projets
	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch("https://apicv.matt-dev.fr/api/projects");
				const json = await response.json();
				setProjects(json);
				setIsLoading(false);
			} catch (e) {
				console.error("Error fetching data:", e);
			}
		};
		fetchData();
	}, []);

	// Fonction pour ajouter des technologies
	const addTechno = (
		input: string,
		setInput: React.Dispatch<React.SetStateAction<string>>,
		technoList: string[],
		setTechnoList: React.Dispatch<React.SetStateAction<string[]>>,
	) => {
		if (input && !technoList.includes(input)) {
			setTechnoList([...technoList, input]);
			setInput("");
		}
	};

	// Fonction pour supprimer des technologies.
	const removeTechno = (
		tech: string,
		technoList: string[],
		setTechnoList: React.Dispatch<React.SetStateAction<string[]>>,
	) => {
		setTechnoList(technoList.filter((t) => t !== tech));
	};

	// Fonction qui permet de vider le formulaire
	// const resetForm = () => {
	// 	setTitle("");
	// 	setDescription("");
	// 	setSlug("");
	// 	setGithub("");
	// 	setSite("");
	// 	setDate("");
	// 	setTechnoConception([]);
	// 	setTechnoFront([]);
	// 	setTechnoBack([]);
	// 	setTechnoFullstack([]);
	// 	setTechnoBDD([]);
	// 	setCurrentProject(null); // On enlève l'ancien projet sélectionné
	// };

	// Fonction pour ajouter un projet
	const addNewProject = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// resetForm();
		const formData = new FormData();
		if (image) {
			formData.append("image", image);
		}
		formData.append("title", title);
		formData.append("description", description);
		formData.append("slug", slug);
		formData.append("github", github);
		formData.append("site", site);
		formData.append("date", date);
		// Envoi des technologies sous forme de catégories
		formData.append("conception", JSON.stringify(technoConception));
		formData.append("front", JSON.stringify(technoFront));
		formData.append("back", JSON.stringify(technoBack));
		formData.append("fullstack", JSON.stringify(technoFullstack));
		formData.append("bdd", JSON.stringify(technoBDD));

		try {
			const response = await fetch("https://apicv.matt-dev.fr/api/projects/", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				// Réponse du serveur est correcte
				const newProject = await response.json();
				setProjects((prevProjects) => [...prevProjects, newProject]);
				setIsOpen(false);
				// Optionnel : Gérer le succès, par exemple afficher un message ou rediriger
			} else {
				// Gérer l'erreur si la réponse n'est pas ok
				console.error("Erreur lors de la création du projet.");
			}
		} catch (error) {
			console.error("Erreur de connexion : ", error);
		}
	};

	// Fonctions pour supprimer un projet
	const deleteProject = async (slug: string) => {
		if (!window.confirm("Voulez-vous vraiment supprimer ce projet ?")) {
			return;
		}

		try {
			const response = await fetch(
				`https://apicv.matt-dev.fr/api/projects/${slug}`,
				{
					method: "DELETE",
				},
			);
			if (response.ok) {
				// Réponse du serveur est correcte
				// Mise à jour de l'état pour supprimer le projet de la liste
				setProjects((prevProjects) =>
					prevProjects.filter((project) => project.slug !== slug),
				);
			} else {
				throw new Error("Erreur lors de la suppression du projet");
			}
		} catch (error) {
			console.error(error);
		}
	};

	// chargement des données pour pré-remplir le formulaire avant update
	useEffect(() => {
		if (isEditMode && projectSlug) {
			const baseUrl = import.meta.env.VITE_BASE_URL;
			fetch(`${baseUrl}/api/projects/${projectSlug}`)
				.then((response) => response.json())
				.then((data) => {
					setTitle(data.title);
					setDescription(data.description);
					setGithub(data.github);
					setSite(data.site);
					setSlug(data.slug);
					setDate(data.date);
					setTechnoConception(data.conception || []);
					setTechnoFront(data.front || []);
					setTechnoBack(data.back || []);
					setTechnoFullstack(data.fullstack || []);
					setTechnoBDD(data.bdd || []);
				})
				.catch((error) => {
					console.error("Erreur lors de la récupération du projet", error);
				});
		}
	}, [isEditMode, projectSlug]);

	// Fonctions pour modifier un projet
	const updateProject = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!currentProject) return;

		const baseUrl = import.meta.env.VITE_BASE_URL;
		console.log(
			`Requête vers : ${baseUrl}/api/projects/${currentProject.slug}`,
		);

		try {
			const response = await fetch(
				`${baseUrl}/api/projects/${currentProject.slug}`,
				{
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						title,
						description,
						slug,
						github,
						site,
						date,
						oldSlug: currentProject.slug,
						technoConception,
						technoFront,
						technoBack,
						technoFullstack,
						technoBDD,
						// Autres champs nécessaires pour la mise à jour
					}),
				},
			);

			console.log("Réponse de la requête:", response);

			if (response.ok) {
				// Réponse du serveur est correcte
				const updatedProject = await response.json();
				setProjects((prevProjects) =>
					prevProjects.map((proj) =>
						proj.slug === currentProject.slug ? updatedProject : proj,
					),
				);
				setIsOpen(false);
				setIsEditMode(false);
				// Optionnel : Gérer le succès, par exemple afficher un message ou rediriger
			} else {
				// Gérer l'erreur si la réponse n'est pas ok
				const errorData = await response.json();
				console.error("Erreur dans la réponse:", errorData);
				console.error("Erreur lors de la mise à jour du projet.");
			}
		} catch (error) {
			console.error("Erreur Fetch:", error);
		}
	};

	return (
		<div>
			{isLoading ? (
				<div className="flex flex-col justify-self-center mt-40 sm:mt-50 xl:mt-70">
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
								? "text-white mt-4 md:font-semibold md:text-lg xl:text-xl"
								: "text-black mt-4 md:font-semibold md:text-lg xl:text-xl"
						}
					>
						Chargement des données ...
					</p>
				</div>
			) : (
				<div className="mt-40 gap-8 grid grid-cols-1 justify-items-center justify-center sm:grid-cols-2 sm:px-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 2xl:mx-30 3xl:mx-50 3xl:grid-cols-5 4xl:mx-100 4xl:mt-60">
					{projects
						.slice()
						.sort(
							(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
						)
						.map((project) => (
							<Link
								to={`/addprojectdetails/${project.slug}`}
								key={project.slug}
								state={project}
								className={
									isDarkmode
										? "max-w-80 border border-cyan-400 rounded-xl p-4 flex text-white flex-col justify-between"
										: "max-w-80 border border-amber-300 rounded-xl p-4 flex text-black flex-col justify-between"
								}
							>
								<div>
									<img
										className="w-100 aspect-4/3 border-transparent rounded-xl object-cover"
										// src={`${project.image}?t=${new Date().getTime()}`}
										// alt={`image-projet-${project.title}`}
										src={`https://apicv.matt-dev.fr${project.image}`}
										alt={`image-projet-${project.title}`}
									/>

									<div className="flex justify-between">
										<h2 className="text-2xl font-bold my-4">{project.title}</h2>
										<div className="flex gap-2">
											<Pencil
												className="mt-4 cursor-pointer text-blue-500 hover:text-blue-700"
												onClick={(e) => {
													e.preventDefault();
													setIsEditMode(true);
													setIsOpen(true);
													setProjectSlug(project.slug);
													setCurrentProject(project);
												}}
											/>

											<Trash2
												className="mt-4 cursor-pointer text-red-500 hover:text-red-700"
												onClick={(e) => {
													e.preventDefault(); // Empêche la navigation du Link
													deleteProject(project.slug);
												}}
											/>
										</div>
									</div>
									<p className="text-xl">
										{project.description.split(" ").slice(0, 10).join(" ")}...
									</p>
								</div>
								<p className="text-xl mt-4 flex justify-between">
									Projet réalisé le :{" "}
									<em>{dayjs(project.date).format("DD/MM/YYYY")}</em>
								</p>
							</Link>
						))}

					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						onClick={(e) => {
							e.preventDefault(); // Empêche la navigation du Link
							setIsOpen(true);
						}}
						className={
							isDarkmode
								? "max-w-80 border border-cyan-400 rounded-xl p-4 flex flex-col justify-center items-center text-white cursor-pointer 3xl:min-w-65 4xl:min-w-80"
								: "max-w-80 border border-amber-300 rounded-xl p-4 flex flex-col justify-center items-center text-black cursor-pointer 3xl:min-w-65 4xl:min-w-80"
						}
					>
						<div
							className={
								isDarkmode
									? "flex flex-col items-center justify-center hover:text-cyan-400"
									: "flex flex-col items-center justify-center hover:text-amber-300"
							}
						>
							<CirclePlus size={150} strokeWidth={0.5} />
							<p className="text-xl mt-4">Ajouter un projet</p>
						</div>
					</div>

					{/* Modal */}
					{isOpen && (
						<div
							className="absolute px-2 flex justify-center z-50 place-self-center w-full max-w-2xl lg:max-w-[1000px]"
							onKeyDown={(e) => {
								if (e.key === "Escape") setIsOpen(false);
							}}
							tabIndex={0}
							// biome-ignore lint/a11y/useSemanticElements: <explanation>
							role="button"
							aria-label="Fermer la modal"
						>
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<div
								className="rounded-lg p-1 bg-cyan-500 shadow-lg"
								onClick={(e) => e.stopPropagation()}
							>
								<div>
									<form
										onSubmit={isEditMode ? updateProject : addNewProject}
										className="space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-2xl relative"
									>
										<div className="flex flex-col lg:flex-row lg:gap-4">
											<div className=" lg:w-1/2">
												{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
												<div
													className="absolute font-bold text-xl right-4 top-4 cursor-pointer"
													onClick={(e) => {
														e.preventDefault();
														setIsEditMode(false);
														setIsOpen(false);
													}}
												>
													X
												</div>
												<h2 className="text-2xl font-bold text-center lg:mb-6 my-6">
													{isEditMode
														? "Modifier le projet"
														: "Ajouter un nouveau projet"}
												</h2>

												<div className="form-control">
													<label className="label" htmlFor="title">
														<span className="!text-gray-600">Titre *</span>
													</label>
													<input
														type="text"
														id="title"
														className="input input-bordered w-full !placeholder-gray-400"
														value={title}
														onChange={(e) => setTitle(e.target.value)}
														placeholder="Nom du projet"
														required
													/>
												</div>

												<div className="form-control mt-2">
													<label className="label" htmlFor="description">
														<span className="text-gray-600">Description *</span>
													</label>
													<textarea
														id="description"
														className="textarea textarea-bordered w-full placeholder-gray-400"
														value={description}
														onChange={(e) => setDescription(e.target.value)}
														placeholder="Description du projet"
														required
													/>
												</div>

												<div className="form-control mt-2">
													<label className="label" htmlFor="slug">
														<span className="text-gray-600">Slug *</span>
													</label>
													<input
														type="text"
														id="slug"
														className="input input-bordered w-full placeholder-gray-400"
														value={slug}
														onChange={(e) => {
															const formattedSlug = e.target.value
																.toLowerCase() // Met en minuscule
																.replace(/\s+/g, "-") // Remplace espaces par des tirets
																.replace(/[^a-z0-9-]/g, ""); // Supprime caractères spéciaux
															setSlug(formattedSlug);
														}}
														placeholder="ex: mon-projet"
														required
													/>
												</div>

												<div className="form-control mt-2">
													<label className="label" htmlFor="github">
														<span className="text-gray-600">Lien GitHub</span>
													</label>
													<input
														type="url"
														id="github"
														className="input input-bordered w-full placeholder-gray-400"
														value={github}
														onChange={(e) => setGithub(e.target.value)}
														placeholder="https://github.com/..."
													/>
												</div>

												<div className="form-control mt-2">
													<label className="label" htmlFor="site">
														<span className="text-gray-600">Lien Site</span>
													</label>
													<input
														type="url"
														id="site"
														className="input input-bordered w-full placeholder-gray-400"
														value={site}
														onChange={(e) => setSite(e.target.value)}
														placeholder="https://mon-site.com/..."
													/>
												</div>

												<div className="form-control mt-2">
													<label className="label" htmlFor="image">
														<span className="text-gray-600">
															Image du projet
														</span>
													</label>
													<input
														type="file"
														id="image"
														className="file-input file-input-bordered w-full"
														onChange={(e) =>
															setImage(
																e.target.files ? e.target.files[0] : null,
															)
														}
													/>
												</div>

												<div className="form-control mt-2">
													<label className="label" htmlFor="date">
														<span className="text-gray-600">
															Date du projet *
														</span>
													</label>
													<input
														type="date"
														id="date"
														className="input input-bordered w-full placeholder-gray-400"
														value={date}
														onChange={(e) => setDate(e.target.value)}
														placeholder="30/10/1985"
														required
													/>
												</div>
											</div>
											<div className="lg:mt-18 lg:w-1/2">
												{/* Gestion des technologies */}
												<div className="form-control mt-2 ">
													<label className="label" htmlFor="technoConception">
														<span className="text-gray-600 ">
															Technologies de Conception
														</span>
													</label>
													<div className="flex gap-2">
														<input
															type="text"
															id="technoConception"
															className="input input-bordered w-4/5 placeholder-gray-400"
															value={inputConception}
															onChange={(e) =>
																setInputConception(e.target.value)
															}
															placeholder="Ajouter une technologie"
														/>
														<button
															type="button"
															className={
																isDarkmode
																	? "btn btn-success"
																	: "btn btn-secondary"
															}
															onClick={() =>
																addTechno(
																	inputConception,
																	setInputConception,
																	technoConception,
																	setTechnoConception,
																)
															}
														>
															Ajouter
														</button>
													</div>
													<div className="flex gap-2 mt-2 flex-wrap">
														{technoConception.map((techno) => (
															<span
																key={techno}
																className="badge badge-outline"
															>
																{techno}
																<button
																	type="button"
																	className="ml-2 text-red-500"
																	onClick={() =>
																		removeTechno(
																			techno,
																			technoConception,
																			setTechnoConception,
																		)
																	}
																>
																	X
																</button>
															</span>
														))}
													</div>
												</div>

												{/* Formulaire pour la catégorie "Front" */}
												<div className="form-control">
													<label className="label" htmlFor="technoFront">
														<span className="text-gray-600">
															Technologies Front-end
														</span>
													</label>
													<div className="flex gap-2">
														<input
															type="text"
															id="technoFront"
															className="input input-bordered w-4/5 placeholder-gray-400"
															value={inputFront}
															onChange={(e) => setInputFront(e.target.value)}
															placeholder="Ajouter une technologie"
														/>
														<button
															type="button"
															className={
																isDarkmode
																	? "btn btn-success"
																	: "btn btn-secondary"
															}
															onClick={() =>
																addTechno(
																	inputFront,
																	setInputFront,
																	technoFront,
																	setTechnoFront,
																)
															}
														>
															Ajouter
														</button>
													</div>
													<div className="flex gap-2 mt-2 flex-wrap">
														{technoFront.map((techno) => (
															<span
																key={techno}
																className="badge badge-outline"
															>
																{techno}
																<button
																	type="button"
																	className="ml-2 text-red-500"
																	onClick={() =>
																		removeTechno(
																			techno,
																			technoFront,
																			setTechnoFront,
																		)
																	}
																>
																	X
																</button>
															</span>
														))}
													</div>
												</div>
												{/* Formulaire pour la catégorie "Back" */}
												<div className="form-control">
													<label className="label" htmlFor="technoBack">
														<span className="text-gray-600">
															Technologies Back-end
														</span>
													</label>
													<div className="flex gap-2">
														<input
															type="text"
															id="technoBack"
															className="input input-bordered w-4/5 placeholder-gray-400"
															value={inputBack}
															onChange={(e) => setInputBack(e.target.value)}
															placeholder="Ajouter une technologie"
														/>
														<button
															type="button"
															className={
																isDarkmode
																	? "btn btn-success"
																	: "btn btn-secondary"
															}
															onClick={() =>
																addTechno(
																	inputBack,
																	setInputBack,
																	technoBack,
																	setTechnoBack,
																)
															}
														>
															Ajouter
														</button>
													</div>
													<div className="flex gap-2 mt-2 flex-wrap">
														{technoBack.map((techno) => (
															<span
																key={techno}
																className="badge badge-outline"
															>
																{techno}
																<button
																	type="button"
																	className="ml-2 text-red-500"
																	onClick={() =>
																		removeTechno(
																			techno,
																			technoBack,
																			setTechnoBack,
																		)
																	}
																>
																	X
																</button>
															</span>
														))}
													</div>
												</div>

												{/* Formulaire pour la catégorie "Fullstack" */}
												<div className="form-control">
													<label className="label" htmlFor="technoFullstack">
														<span className="text-gray-600">
															Technologies Fullstack
														</span>
													</label>
													<div className="flex gap-2">
														<input
															type="text"
															id="technoFullstack"
															className="input input-bordered w-4/5 placeholder-gray-400"
															value={inputFullstack}
															onChange={(e) =>
																setInputFullstack(e.target.value)
															}
															placeholder="Ajouter une technologie"
														/>
														<button
															type="button"
															className={
																isDarkmode
																	? "btn btn-success"
																	: "btn btn-secondary"
															}
															onClick={() =>
																addTechno(
																	inputFullstack,
																	setInputFullstack,
																	technoFullstack,
																	setTechnoFullstack,
																)
															}
														>
															Ajouter
														</button>
													</div>
													<div className="flex gap-2 mt-2 flex-wrap">
														{technoFullstack.map((techno) => (
															<span
																key={techno}
																className="badge badge-outline"
															>
																{techno}
																<button
																	type="button"
																	className="ml-2 text-red-500"
																	onClick={() =>
																		removeTechno(
																			techno,
																			technoFullstack,
																			setTechnoFullstack,
																		)
																	}
																>
																	X
																</button>
															</span>
														))}
													</div>
												</div>

												{/* Formulaire pour la catégorie "BDD" */}
												<div className="form-control">
													<label className="label" htmlFor="technoBDD">
														<span className="text-gray-600">
															Technologies BDD
														</span>
													</label>
													<div className="flex gap-2">
														<input
															type="text"
															id="technoBDD"
															className="input input-bordered w-4/5 placeholder-gray-400"
															value={inputBDD}
															onChange={(e) => setInputBDD(e.target.value)}
															placeholder="Ajouter une technologie"
														/>
														<button
															type="button"
															className={
																isDarkmode
																	? "btn btn-success"
																	: "btn btn-secondary"
															}
															onClick={() =>
																addTechno(
																	inputBDD,
																	setInputBDD,
																	technoBDD,
																	setTechnoBDD,
																)
															}
														>
															Ajouter
														</button>
													</div>
													<div className="flex gap-2 mt-2 flex-wrap">
														{technoBDD.map((techno) => (
															<span
																key={techno}
																className="badge badge-outline"
															>
																{techno}
																<button
																	type="button"
																	className="ml-2 text-red-500"
																	onClick={() =>
																		removeTechno(
																			techno,
																			technoBDD,
																			setTechnoBDD,
																		)
																	}
																>
																	X
																</button>
															</span>
														))}
													</div>
												</div>
											</div>
										</div>
										<button
											type="submit"
											className={
												isDarkmode
													? "btn btn-success w-full mt-4"
													: "btn btn-secondary w-full mt-4"
											}
										>
											{isEditMode ? "Mettre à jour" : "Ajouter le projet"}
										</button>
									</form>
								</div>
							</div>
						</div>
					)}
					{/* Fin Modal */}
				</div>
			)}
		</div>
	);
}

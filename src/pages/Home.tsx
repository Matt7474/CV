import {
	Brain,
	Circle,
	ContactRound,
	Dot,
	Github,
	Languages,
	Linkedin,
	Mail,
	MapPin,
	PhoneCall,
	Puzzle,
} from "lucide-react";
import useDarkMode from "../store/darkmode";
import { useState } from "react";
// import { useState } from "react";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const { isDarkmode } = useDarkMode();
	return (
		<>
			{/* Partie résumé */}
			<div className="pt-12 flex justify-center">
				<div className="relative z-30">
					{/* Image de fond visible uniquement en mode sombre */}
					{!isDarkmode && (
						<img
							src="/palmiers2.png"
							alt="palmiers"
							className="absolute opacity-80"
						/>
					)}
				</div>
				<div className="flex flex-col rounded-2xl bg-gradient-to-r from-cyan-500 via-pink-500 to-indigo-800 p-0.5 mx-8 md:mx-20 lg:mx-32 lg:mb-8 xl:mx-72 2xl:mx-120 3xl:mx-140 4xl:mx-200">
					<h1
						className={
							isDarkmode
								? "rounded-t-2xl justify-items-center font-medium text-normal bg-gray-900 pb-4 pt-2 px-4 text-white md:text-xl text-center 3xl:font-semibold 3xl:text-3xl 3xl:pt-4"
								: "rounded-t-2xl justify-items-center font-medium text-normal bg-white pb-4 pt-2 px-4 text-black md:text-xl text-center 3xl:font-semibold 3xl:text-3xl 3xl:pt-4"
						}
					>
						Concepteur & Developpeur FullStack
					</h1>
					<p
						className={
							isDarkmode
								? "text-justify rounded-b-2xl text-sm font-normal bg-gray-900 text-white pb-2 px-4 md:text-base 3xl:text-xl"
								: "text-justify rounded-b-2xl text-sm font-normal bg-white text-black pb-2 px-4 md:text-base 3xl:text-xl"
						}
					>
						Après une réflexion approfondie sur mes envies de carrière, j'ai
						découvert le métier de développeur et c'est à ce moment que ma
						passion pour le développement web a véritablement émergé.
						Actuellement en formation pour devenir concepteur développeur
						fullstack, je suis animé par une détermination sans faille à
						maîtriser toutes les facettes du développement, du front-end au
						back-end, pour contribuer pleinement à des projets innovants.
					</p>
				</div>
			</div>
			{/* Fin Partie résumé */}

			<div className="md:flex 3xl:flex justify-center 3xl:mx-50 4xl:mx-110">
				{/* //----------------------------------------------------------------------------// */}
				{/* Partie gauche CV */}
				{/* //----------------------------------------------------------------------------// */}
				<div className="mt-4 flex p-0.5 mx-4 relative rounded-2xl bg-gradient-to-r from-cyan-500 via-pink-500 to-indigo-800 shadow-emerald-500/20  md:-mr-1 pr-0 md:rounded-r-none md:bg-gradient-to-r md:from-cyan-500  md:via-[70%] md:to-pink-500 lg:ml-16 xl:ml-40 2xl:ml-70">
					<div
						className={
							isDarkmode
								? "w-full rounded-2xl bg-gray-900 p-4 text-white z-2 md:rounded-r-none"
								: "w-full rounded-2xl bg-white p-4 text-black z-2 md:rounded-r-none"
						}
					>
						{/* Parti Contact */}
						<div className="md:border-r-2 md:border-emerald-400 md:pb-8 md:pr-4 3xl:border-r-0">
							<div className="flex md:pt-4 ">
								<ContactRound
									size={26}
									className={isDarkmode ? "text-emerald-300" : "text-pink-400 "}
								/>
								<h1
									className={
										isDarkmode
											? "pl-2 pb-2 font-bold text-xl text-emerald-300 md:text-2xl md:-mt-1"
											: "pl-2 pb-2 font-bold text-xl text-pink-400 md:text-2xl md:-mt-1"
									}
								>
									Contact
								</h1>
							</div>
							<div className="text-sm pl-2 pt-1 flex items-center group transition-colors duration-300 md:text-base">
								<Mail
									className="text-emerald-500 group-hover:text-cyan-500 transition-colors duration-300"
									size={16}
								/>
								<a
									href="mailto:dimier.matt@gmail.com"
									className={
										isDarkmode
											? "pl-2 text-white group-hover:text-cyan-500 transition-colors duration-300"
											: "pl-2 text-black group-hover:text-cyan-500 transition-colors duration-300"
									}
								>
									dimier.matt@gmail.com
								</a>
							</div>
							<div className="text-sm pl-2 pt-1 flex items-center group transition-colors duration-300 md:text-base">
								<PhoneCall
									className="text-emerald-500 group-hover:text-cyan-500 transition-colors duration-300"
									size={16}
								/>
								<p
									className={
										isDarkmode
											? "pl-2 text-white group-hover:text-cyan-500 transition-colors duration-300"
											: "pl-2 text-black group-hover:text-cyan-500 transition-colors duration-300"
									}
								>
									<a href="tel:+33631548949">06.31.54.89.49</a>
								</p>
							</div>
							<div className="text-sm pl-2 pt-1 flex items-center group transition-colors duration-300 md:text-base">
								<MapPin
									className="text-emerald-500 group-hover:text-cyan-500 transition-colors duration-300"
									size={16}
								/>
								<p
									className={
										isDarkmode
											? "pl-2 text-white group-hover:text-cyan-500 transition-colors duration-300"
											: "pl-2 text-black group-hover:text-cyan-500 transition-colors duration-300"
									}
								>
									<a
										href="https://www.google.com/maps?q=34370+Cazouls-les-Béziers"
										target="_blank"
										rel="noopener noreferrer"
									>
										34370 Cazouls-les-Béziers
									</a>
								</p>
							</div>

							<div className="text-sm pl-2 pt-1 flex items-center group transition-colors duration-300 md:text-base">
								<Linkedin
									className="text-emerald-500 group-hover:text-cyan-500 transition-colors duration-300"
									strokeWidth={1.8}
									size={16}
								/>
								<p
									className={
										isDarkmode
											? "pl-2 text-white group-hover:text-cyan-500 transition-colors duration-300"
											: "pl-2 text-black group-hover:text-cyan-500 transition-colors duration-300"
									}
								>
									LinkedIn :{" "}
									<a
										className={
											isDarkmode
												? "underline pl-2 text-white group-hover:text-cyan-500 transition-colors duration-300 md:text-sm"
												: "underline pl-2 text-black group-hover:text-cyan-500 transition-colors duration-300 md:text-sm"
										}
										href="https://www.linkedin.com/in/matthieu-dimier-a51539290"
									>
										DIMIER Matthieu
									</a>
								</p>
							</div>
							<div className="text-sm pl-2 pt-1 flex items-center group transition-colors duration-300 md:text-base">
								<Github
									className="text-emerald-500 group-hover:text-cyan-500 transition-colors duration-300"
									strokeWidth={1.8}
									size={16}
								/>
								<p
									className={
										isDarkmode
											? "pl-2 text-white group-hover:text-cyan-500 transition-colors duration-300"
											: "pl-2 text-black group-hover:text-cyan-500 transition-colors duration-300"
									}
								>
									Github :{" "}
									<a
										className={
											isDarkmode
												? "underline pl-2 text-white group-hover:text-cyan-500 transition-colors duration-300 md:text-sm"
												: "underline pl-2 text-black group-hover:text-cyan-500 transition-colors duration-300 md:text-sm"
										}
										href="https://github.com/Matt7474"
									>
										Matt7474
									</a>
								</p>
							</div>
						</div>
						{/* Fin Parti Contact */}

						{/* Parti Hard Skills */}
						<div className="md:border-r-2 md:border-emerald-400 pb-8 md:pr-4 3xl:border-r-0">
							<div className="flex pt-6 md:pt-4">
								<Puzzle
									size={26}
									className={
										isDarkmode
											? "text-emerald-300 rotate-135"
											: "text-pink-400 rotate-135"
									}
								/>
								<h1
									className={
										isDarkmode
											? "pl-2 pb-2 font-bold text-xl text-emerald-300 md:text-2xl md:-mt-1"
											: "pl-2 pb-2 font-bold text-xl text-pink-400 md:text-2xl md:-mt-1"
									}
								>
									Hard Skills
								</h1>
							</div>

							<div className="text-md pl-2 pt-2 flex-col">
								<div className="flex">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<h3 className="pl-2 font-semibold 3xl:font-bold ">
										Intégration web :
									</h3>
								</div>
								<div className="pl-6 ">
									<p className="text-sm md:text-base">HTML5, CSS3,</p>
									<p className="text-sm md:text-base">
										respect des bonnes pratiques d'accéssibilitées (W3C),
									</p>
									<p className="text-sm md:text-base">
										certification OPQUAST (confirmé)
									</p>
								</div>
							</div>

							<div className="text-md pl-2 pt-2 flex-col">
								<div className="flex">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<h3 className="pl-2 font-semibold 3xl:font-bold ">
										Développement Frontend :
									</h3>
								</div>
								<div className="pl-6">
									<p className="text-sm md:text-base">
										JavaScript Vanilla, React
									</p>
									<p className="text-sm md:text-base">Tailwind Css, Scss</p>
									<p className="text-sm md:text-base">TypeScript</p>
								</div>
							</div>

							<div className="text-md pl-2 pt-2 flex-col">
								<div className="flex">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<h3 className="pl-2 font-semibold 3xl:font-bold ">
										Développement Backend :
									</h3>
								</div>
								<div className="pl-6">
									<p className="text-sm md:text-base">NodeJs, Express, ejs</p>
									<p className="text-sm md:text-base">Postgres / Sequelize</p>
									<p className="text-sm md:text-base">MongoDb / Mongoose</p>
								</div>
							</div>

							<div className="text-md pl-2 pt-2 flex-col">
								<div className="flex">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<h3 className="pl-2 font-semibold 3xl:font-bold ">
										Gestion de projet :
									</h3>
								</div>
								<div className="pl-6">
									<p className="text-sm md:text-base">User stories, sprint</p>
									<p className="text-sm md:text-base">
										Zooning, Wireframe, Maquette
									</p>
									<p className="text-sm md:text-base">
										Diagramme : Usecase, sequence, activity
									</p>
									<p className="text-sm md:text-base">ERD / MCD, MLD, MPD</p>
								</div>
							</div>
						</div>
						{/* Fin Partie Hard Skills */}

						{/* Partie Soft Skills */}
						<div className="md:border-r-2 md:border-emerald-400 pb-8 md:pr-4 3xl:border-r-0">
							<div className="flex pt-6 md:pt-4">
								<Puzzle
									size={26}
									className={
										isDarkmode
											? "text-emerald-300 rotate-45"
											: "text-pink-400 rotate-45"
									}
								/>
								<h1
									className={
										isDarkmode
											? "pl-2 pb-2 font-bold text-xl text-emerald-300 md:text-2xl md:-mt-1"
											: "pl-2 pb-2 font-bold text-xl text-pink-400 md:text-2xl md:-mt-1"
									}
								>
									Soft Skills
								</h1>
							</div>
							<div className="text-md pl-2 pt-2 flex-col">
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">
										Bon sens de l'organisation
									</p>
								</div>
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">
										Résolution des problèmes
									</p>
								</div>
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">
										Sens des responsabilitées
									</p>
								</div>
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">
										Sens du relationnel
									</p>
								</div>
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">Adaptabilité</p>
								</div>
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">Autonomie</p>
								</div>
							</div>
						</div>
						{/* Fin Partie Soft Skills */}

						{/* Partie Centres d'interêt */}
						<div className="md:border-r-2 md:border-emerald-400 pb-8 md:pr-4 3xl:border-r-0">
							<div className="flex pt-6 md:pt-4">
								<Brain
									size={26}
									className={isDarkmode ? "text-emerald-300" : "text-pink-400"}
								/>
								<h1
									className={
										isDarkmode
											? "pl-2 pb-2 font-bold text-xl text-emerald-300 md:text-2xl md:-mt-1 md:-mr-2"
											: "pl-2 pb-2 font-bold text-xl text-pink-400 md:text-2xl md:-mt-1 md:-mr-2"
									}
								>
									Centres d'intêret
								</h1>
							</div>
							<div className="text-md pl-2 pt-2 flex-col">
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<div className="pl-2 text-sm text-wrap md:text-base">
										<p>Passionnée de jeux rpg</p>
										<p>& course automobile</p>
									</div>
								</div>
							</div>
							<div className="text-md pl-2  flex-col">
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-0.5"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">Travail du bois</p>
								</div>
							</div>
						</div>
						{/* Fin Partie Centres d'interêt */}

						{/* Partie Language */}
						<div className="md:border-r-2 md:border-emerald-400 md:pr-4 3xl:border-r-0">
							<div className="flex pt-6 md:pt-4">
								<Languages
									size={26}
									className={isDarkmode ? "text-emerald-300" : "text-pink-400"}
								/>
								<h1
									className={
										isDarkmode
											? "pl-2 pb-2 font-bold text-xl text-emerald-300 md:text-2xl md:-mt-1"
											: "pl-2 pb-2 font-bold text-xl text-pink-400 md:text-2xl md:-mt-1"
									}
								>
									Langues
								</h1>
							</div>
							<div className="text-md pl-2 pt-2 flex-col">
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">
										Français : Langue maternelle
									</p>
								</div>
							</div>
							<div className="text-md pl-2  flex-col">
								<div className="flex pb-1">
									<Dot
										strokeWidth={10}
										className="text-emerald-400 mt-1"
										size={16}
									/>
									<p className="pl-2 text-sm md:text-base">
										Anglais : Niveau A2
									</p>
								</div>
							</div>
						</div>
						{/* Fin Partie Language */}
					</div>
				</div>
				{/* //----------------------------------------------------------------------------// */}
				{/* Fin Partie gauche CV */}
				{/* //----------------------------------------------------------------------------// */}

				{/* //----------------------------------------------------------------------------// */}
				{/* Partie droite CV */}
				{/* //----------------------------------------------------------------------------// */}
				<div className="mt-4 flex p-0.5 mx-4 relative rounded-2xl bg-gradient-to-r from-cyan-500 via-pink-500 to-indigo-800 shadow-emerald-500/20 md:mt-4 md:ml-0 md:pl-0 md:rounded-l-none md:bg-gradient-to-r md:from-pink-500 md:to-indigo-800 lg:mr-16 xl:mr-40 2xl:mr-70 ">
					<div
						className={
							isDarkmode
								? "w-full bg-gray-800 rounded-2xl text-white border-1 border-l-transparent border-t-transparent border-r-transparent border-b-transparent z-2 md:rounded-l-none md:border-l-transparent md:border-3"
								: "w-full bg-white rounded-2xl text-black border-1 border-l-transparent border-t-transparent border-r-transparent border-b-transparent z-2 md:rounded-l-none md:border-l-emerald-500 md:border-3"
						}
					>
						<div className="">
							<div className="flex items-center place-self-center gap-2 pt-4">
								<h2 className="text-3xl font-semibold 3xl:text-5xl 3xl:font-normal">
									DIMIER
								</h2>
								<h2 className="text-3xl font-semibold 3xl:text-5xl 3xl:font-normal">
									Matthieu
								</h2>
							</div>
							<div className="flex justify-center items-center text-center pt-4 mx-4">
								<p className="text-2xl break-words 3xl:text-3xl">
									Concepteur Développeur Web & App
								</p>
							</div>
						</div>
						{/* Partie Formation */}
						<div className="flex-col mt-8">
							<h3 className="text-2xl font-semibold pl-10 pb-4 3xl:font-bold">
								Formations
							</h3>
							<div className="flex ml-2">
								{/* 2 / 10 */}
								<div className="w-1/6 flex flex-col pt-1.5">
									<p className="self-center text-sm 3xl:text-base">2025</p>
									<p className="self-center text-sm 3xl:text-base">-</p>
									<p className="self-center text-sm 3xl:text-base">2024</p>
								</div>

								<div className="">
									<img
										src="/logo-oclock.png"
										alt="logo ecole oclock"
										className={
											isDarkmode
												? "w-7 absolute z-10 bg-gray-800"
												: "w-7 absolute z-10 bg-white"
										}
									/>
								</div>

								{/* 7.5 / 10 */}
								<div
									className={
										isDarkmode
											? "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-emerald-400 border-t-transparent border-r-transparent border-b-transparent"
											: "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-pink-400 border-t-transparent border-r-transparent border-b-transparent"
									}
								>
									<h4 className="font-semibold pb-2 3xl:font-bold">
										Formation Concepteur Développeur d'Application Web & Web
										mobile. Titre pro niveau VI
									</h4>
									<a
										href="https://oclock.io/formations/concepteur-application-web-ia"
										target="_blank"
										rel="noreferrer"
										className={
											isDarkmode
												? "pb-2 pt-2 underline text-white hover:text-cyan-500 transition-colors duration-300"
												: "pb-2 pt-2 underline text-black hover:text-cyan-500 transition-colors duration-300"
										}
									>
										Ecole O'Clock - Formation téléprésentiel
									</a>
									<div className="flex -mx-4  pt-2">
										<Dot size={35} />
										<p className="pt-1">1050 h de formation intensive</p>
									</div>
									<div className="flex flex-col -mx-4 -mt-2">
										<div className="flex">
											<Dot size={35} />
											<p className="pt-1">8 mois de socle solide</p>
										</div>

										<div className="flex ">
											<p className="-mt-2 pl-9">
												HTML/JS/Css & NodeJS/Express/Postgres
											</p>
										</div>
									</div>
									<div className="flex -mx-4 -mt-2 pt-2">
										<Dot size={35} />
										<div className="flex flex-col">
											<p className="pt-1">Nombreux projets & ateliers</p>
											<p>en équipe</p>
										</div>
									</div>
									<div className="flex -mx-4 ">
										<Dot size={35} />
										{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
										<p
											className="pt-1 underline cursor-pointer hover:text-cyan-500 transition-colors duration-300"
											onClick={() => setIsOpen(true)}
										>
											Certification OPQUAST
										</p>
									</div>

									{/* Modal OPQUAST */}
									{isOpen && (
										<div
											className="fixed inset-0  flex items-center justify-center border-b-emerald-300  z-20"
											onClick={() => setIsOpen(false)} // Ferme la modal quand tu cliques sur le fond
											onKeyDown={(e) => {
												if (e.key === "Enter" || e.key === " ")
													setIsOpen(false); // Ferme avec "Enter" ou "Espace"
											}}
											aria-label="Fermer la modal"
										>
											{/* Contenu de la modal */}
											{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
											<div
												className="bg-cyan-500 rounded-2xl shadow-2xl shadow-cyan-700 w-4/5 sm:w-3/4 lg:w-2/3 xl:w-2/7 p-1"
												onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image
											>
												{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
												<img
													src="/certificat-opquast.png" // Met le bon chemin de l'image
													alt="Certification OPQUAST"
													className="rounded-xl w-full h-auto object-cover max-h-[80vh]"
													onClick={() => setIsOpen(false)}
												/>
											</div>
										</div>
									)}
									{/* Fin Modal OPQUAST */}
								</div>
							</div>

							{/* Partie Experience */}
							<h3 className="text-2xl font-semibold pl-10 pt-8 pb-4 3xl:font-bold">
								Experiences
							</h3>
							<div className=" flex">
								<div className="w-1/6  flex flex-col pt-1.5">
									<p className="self-center text-sm 3xl:text-base">2024</p>
									<p className="self-center text-sm 3xl:text-base">-</p>
									<p className="self-center text-sm 3xl:text-base">2013</p>
								</div>
								<div className="w-0.5/10  pl-2">
									<Circle
										className={
											isDarkmode
												? "w-7 absolute z-10 text-white bg-gray-800"
												: "w-7 absolute z-10 bg-white text-emerald-500"
										}
									/>
								</div>
								<div
									className={
										isDarkmode
											? "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-emerald-400 border-t-transparent border-r-transparent border-b-transparent"
											: "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-pink-400 border-t-transparent border-r-transparent border-b-transparent"
									}
								>
									<h4 className="font-semibold pb-2 3xl:font-bold">
										Magasinier Cariste - Responsable de zone
									</h4>
									<a
										href="https://www.refresco.fr/fr/"
										target="_blank"
										rel="noreferrer"
										className={
											isDarkmode
												? "-2 pt-2 underline text-white hover:text-cyan-500 transition-colors duration-300"
												: "-2 pt-2 underline text-black hover:text-cyan-500 transition-colors duration-300"
										}
									>
										J&C Refresco
									</a>
									<div className="flex pt-2 flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Capacité d’analyse :
											</span>{" "}
											Comprendre et décomposer des problèmes en éléments simple.
										</p>
									</div>
									<div className="flex flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Communication :
											</span>{" "}
											Organisation et animation de formations internes.
										</p>
									</div>
									<div className="flex flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 pb-8 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Résolution de problèmes :
											</span>{" "}
											Identifier les causes et proposition de solutions.
										</p>
									</div>
								</div>
							</div>

							<div className="flex">
								<div className="w-1/6  flex flex-col pt-1.5">
									<p className="self-center text-sm 3xl:text-base">2013</p>
									<p className="self-center text-sm 3xl:text-base">-</p>
									<p className="self-center text-sm 3xl:text-base">2012</p>
								</div>
								<div className="w-0.5/10  pl-2">
									<Circle
										className={
											isDarkmode
												? "w-7 absolute z-10 text-white bg-gray-800"
												: "w-7 absolute z-10 bg-white text-emerald-500"
										}
									/>
								</div>
								<div
									className={
										isDarkmode
											? "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-emerald-400 border-t-transparent border-r-transparent border-b-transparent"
											: "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-pink-400 border-t-transparent border-r-transparent border-b-transparent"
									}
								>
									<h4 className="font-semibold 3xl:font-bold">
										Manutentionnaire
									</h4>
									<p className=" pb-2 pt-2 underline">Start People</p>
									<div className="flex flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 pb-8 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Gestion des délais :
											</span>{" "}
											Priorisation des tâches et respect des délais.
										</p>
									</div>
								</div>
							</div>

							<div className=" flex">
								<div className="w-1/6  flex flex-col pt-1.5">
									<p className="self-center text-sm 3xl:text-base">2011</p>
									<p className="self-center text-sm 3xl:text-base">-</p>
									<p className="self-center text-sm 3xl:text-base">2010</p>
								</div>
								<div className="w-0.5/10  pl-2">
									<Circle
										className={
											isDarkmode
												? "w-7 absolute z-10 text-white bg-gray-800"
												: "w-7 absolute z-10 bg-white text-emerald-500"
										}
									/>
								</div>
								<div
									className={
										isDarkmode
											? "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-emerald-400 border-t-transparent border-r-transparent border-b-transparent"
											: "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-pink-400 border-t-transparent border-r-transparent border-b-transparent"
									}
								>
									<h4 className="font-semibold 3xl:font-bold">
										Employé de rayon
									</h4>
									<p className="pb-2 pt-2 underline">Carrefour</p>

									<div className="flex flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 pb-8 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Autonomie :
											</span>{" "}
											Gestion des priorités et résolution des problèmes sans
											supervision directe.
										</p>
									</div>
								</div>
							</div>

							<div className="flex">
								<div className="w-1/6  flex flex-col pt-1.5">
									<p className="self-center text-sm 3xl:text-base">2010</p>
									<p className="self-center text-sm 3xl:text-base">-</p>
									<p className="self-center text-sm 3xl:text-base">2003</p>
								</div>
								<div className="w-0.5/10  pl-2">
									<Circle
										className={
											isDarkmode
												? "w-7 absolute z-10 text-white bg-gray-800"
												: "w-7 absolute z-10 bg-white text-emerald-500"
										}
									/>
								</div>
								<div
									className={
										isDarkmode
											? "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-emerald-400 border-t-transparent border-r-transparent border-b-transparent"
											: "w-5/6 ml-3 pl-5 pr-4 border-3 border-l-pink-400 border-t-transparent border-r-transparent border-b-transparent"
									}
								>
									<h4 className="font-semibold 3xl:font-bold">Manager</h4>
									<p className="pb-2 pt-2 underline">Mc Donald's</p>

									<div className="flex flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Rigeur :
											</span>{" "}
											Travail avec précision et respect des normes HACCP & de
											sécurités.
										</p>
									</div>
									<div className="flex flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Gestion d’équipe :
											</span>{" "}
											Partage et écoute des collaborateurs.
										</p>
									</div>
									<div className="flex flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Relation client :
											</span>{" "}
											Compréhension et satisfaction des besoins des clients.
										</p>
									</div>
									<div className="flex flex-wrap items-start -mx-4">
										<Dot
											size={35}
											className="shrink-0 transition-all duration-300 "
										/>
										<p className="pt-1 pb-4 flex-1 min-w-0">
											<span className="font-semibold 3xl:font-bold">
												Responsabilité :
											</span>{" "}
											Gestion d’équipe & des fonds
										</p>
									</div>
								</div>
							</div>
						</div>{" "}
					</div>
				</div>
				{/* //----------------------------------------------------------------------------// */}
				{/* Fin Partie droite CV */}
				{/* //----------------------------------------------------------------------------// */}
			</div>
		</>
	);
}

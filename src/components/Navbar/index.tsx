import {
	ArrowDownToLine,
	BriefcaseBusiness,
	House,
	MenuIcon,
	SendHorizontal,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDarkMode from "../../store/darkmode";
import { useState, useEffect } from "react";

import {
	faTelegramPlane,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
	faEnvelopeCircleCheck,
	faSms,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	const location = useLocation();
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const { isDarkmode, toggleDarkmode } = useDarkMode();
	const [clickCount, setClickCount] = useState(0);
	const [timer, setTimer] = useState<number | null>(null);
	const [isHidden, setIsHidden] = useState(true);
	const navigate = useNavigate();

	const handleSpanClick = () => {
		if (timer === null) {
			const newTimer = setTimeout(() => {
				setClickCount(0);
				setTimer(null);
			}, 10000);
			setTimer(newTimer);
		}

		setClickCount((prev) => prev + 1);

		if (clickCount + 1 >= 10) {
			if (timer !== null) clearTimeout(timer);
			setClickCount(0);
			setMenuIsOpen(false);
			navigate("/loginsecret");
		}
	};

	useEffect(() => {
		return () => {
			if (timer !== null) clearTimeout(timer);
		};
	}, [timer]);

	//Fonction pour le partage du mail

	const cvLink = "https://cv.matt-dev.fr/";
	const message = encodeURIComponent(
		`Bonjour,\n\nVoici mon CV. Vous pouvez le consulter et le télécharger ici :\n${cvLink}`,
	);

	// Fonction pour ouvrir une URL dans un nouvel onglet
	const openLink = (url: string | URL | undefined) => {
		window.open(url, "_blank");
	};
	//

	const showShareMenu = () => {
		setIsHidden(!isHidden);
	};

	return (
		<div className="3xl:fixed top-0 left-0 w-full flex justify-between items-center px-4 lg:px-24 xl:px-60 2xl:px-70 4xl:px-90 z-10 ">
			<div>
				<a
					href="mailto:dimier.matt@gmail.com"
					className="text-2xl font-medium  text-white hover:text-transparent hover:bg-gradient-to-r hover:from-amber-500 hover:via-pink-700 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300 flex flex-col"
				>
					DIMIER Matthieu
				</a>
			</div>

			<div className="flex justify-between gap-4 pt-4 ">
				<Link
					to={"/"}
					className={`group ${location.pathname === "/" ? "text-cyan-300" : ""}`}
				>
					{/* <div className="flex pl-8"></div> */}
					<div className="flex flex-col items-center">
						<House
							className={`${
								location.pathname === "/" ? "text-cyan-300" : "text-white"
							} group-hover:text-cyan-300`}
						/>
						<p
							className={`flex ${
								location.pathname === "/" ? "text-cyan-300" : "text-white"
							} group-hover:text-cyan-300`}
						>
							CV
						</p>
					</div>
				</Link>

				<Link
					to={"/portfolio"}
					className={`group ${location.pathname === "/portfolio" ? "text-cyan-300" : ""} `}
				>
					<div className="flex flex-col items-center">
						<BriefcaseBusiness
							className={`${
								location.pathname === "/portfolio"
									? "text-cyan-300"
									: "text-white"
							} group-hover:text-cyan-300`}
						/>
						<p
							className={`${
								location.pathname === "/portfolio"
									? "text-cyan-300"
									: "text-white"
							} group-hover:text-cyan-300`}
						>
							Portfolio
						</p>
					</div>
				</Link>

				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className={
						menuIsOpen
							? "text-cyan-300 flex flex-col items-center cursor-pointer"
							: "text-white flex flex-col items-center cursor-pointer"
					}
					onClick={() => setMenuIsOpen((prev) => !prev)}
				>
					<MenuIcon
						size={24}
						className={menuIsOpen ? "text-cyan-300" : "text-white"}
					/>
					Menu
				</div>

				{/* Modal */}
				{menuIsOpen && (
					<div
						className="absolute right-4 top-16 w-3/5 z-20 sm:w-1/3 lg:w-1/4 lg:right-24 xl:right-60 xl:w-1/5 2xl:right-70 2xl:w-1/7 3xl:right-70 3xl:w-1/8 4xl:right-90 4xl:w-1/10"
						onClick={() => setMenuIsOpen(false)} // Ferme la modal quand tu cliques sur le fond
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") setMenuIsOpen(false); // Ferme avec "Enter" ou "Espace"
						}}
						aria-label="Fermer la modal"
					>
						{/* Contenu de la modal */}
						<div
							className={
								isDarkmode
									? "bg-cyan-300 p-1 rounded-lg"
									: " bg-gradient-to-b from-amber-500 via-pink-500 to-indigo-800 p-1 rounded-lg"
							}
						>
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<div
								className={
									isDarkmode
										? "bg-white rounded-md  border-cyan-500 p-1"
										: "bg-white rounded-md   p-1"
								}
								onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image
							>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<div
									className="flex justify-center pr-2 border-b-2 border-gray-400"
									onClick={() => setMenuIsOpen(false)}
								>
									<p className="font-bold text-xl px-2 -mt-1">Menu</p>
									{/* <X color="#000" size={24} /> */}
								</div>

								{/* Bouton téléchargement du CV */}
								<button
									type="button"
									className="btn btn-primary w-full my-1 flex items-center justify-center"
									onClick={() => {
										const link = document.createElement("a");
										link.href = "/CV DIMIER Matthieu.pdf";
										link.download = "CV DIMIER Matthieu.pdf";
										document.body.appendChild(link);
										link.click();
										document.body.removeChild(link);
									}}
								>
									<p className="font-semibold text-md px-2">
										Télécharger mon CV
									</p>
									<span className="text-2xl">
										<ArrowDownToLine className="text-white" />
									</span>
								</button>

								{/* Bouton envoi du CV */}
								<button
									type="button"
									className="btn btn-primary w-full my-1 flex items-center justify-center"
									onClick={showShareMenu} // Appelle showShareMenu au clic
								>
									<p className="font-semibold text-md px-2">Partager mon CV</p>
									<span className="text-2xl">
										<SendHorizontal className="text-white" />
									</span>
								</button>

								{/* Partage par Email */}
								{!isHidden && (
									<div className="share-menu pb-2 ">
										<button
											type="button"
											className="btn btn-warning w-full mb-1"
											onClick={() => {
												window.location.href = `mailto:?subject=CV DIMIER Matthieu&body=${message}`;
											}}
										>
											Envoyer par Email{" "}
											<FontAwesomeIcon
												icon={faEnvelopeCircleCheck}
												fontSize={24}
											/>
										</button>

										{/* Partage sur WhatsApp */}
										<button
											type="button"
											className="btn btn-success flex items-center justify-center w-full mb-1"
											onClick={() => openLink(`https://wa.me/?text=${message}`)}
										>
											Partager sur WhatsApp{" "}
											<FontAwesomeIcon icon={faWhatsapp} fontSize={24} />
										</button>

										{/* Partage sur Telegram */}
										<button
											type="button"
											className="btn btn-info flex items-center justify-center w-full mb-1"
											onClick={() =>
												openLink(
													`https://t.me/share/url?url=${cvLink}&text=${message}`,
												)
											}
										>
											Partager sur Telegram
											<FontAwesomeIcon icon={faTelegramPlane} fontSize={24} />
										</button>

										{/* Partage par SMS */}
										<button
											type="button"
											className="btn btn-secondary flex items-center justify-center w-full mb-1"
											onClick={() =>
												// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
												(window.location.href = `sms:?body=${message}`)
											}
										>
											Envoyer par SMS
											<FontAwesomeIcon icon={faSms} fontSize={24} />
										</button>
									</div>
								)}

								{/* Bouton changement de mode sombre/fun */}
								<button
									type="button"
									onClick={() => {
										handleSpanClick();
										toggleDarkmode();
									}}
									// className="flex justify-between items-center w-full -mt-3 pr-1 pb-1 hover:bg-amber-300"
									className="btn btn-primary w-full "
								>
									<p className="font-semibold text-md px-2">
										{isDarkmode ? "Mode Fun" : "Mode Sombre"}
									</p>

									<span className="text-2xl mb-1">
										{isDarkmode ? "☀️" : "🌙"}
									</span>
								</button>
							</div>
						</div>
					</div>
				)}
				{/* Fin Modal */}
			</div>
		</div>
	);
}

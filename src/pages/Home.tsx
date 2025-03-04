// import {
// 	Brain,
// 	Circle,
// 	ContactRound,
// 	Dot,
// 	Github,
// 	Languages,
// 	Linkedin,
// 	Mail,
// 	MapPin,
// 	PhoneCall,
// 	Puzzle,
// } from "lucide-react";
import useDarkMode from "../store/darkmode";
// import { useState } from "react";

export default function Home() {
	// const [isOpen, setIsOpen] = useState(false);
	const { isDarkmode } = useDarkMode();
	return (
		<>
			<div className="pt-12 flex justify-center">
				<div className="relative">
					{/* Image de fond visible uniquement en mode sombre */}
					{!isDarkmode && (
						<img
							src="/palmiers2.png"
							alt="palmiers"
							className="absolute opacity-80"
						/>
					)}
				</div>
				<div className="flex flex-col rounded-2xl bg-gradient-to-r from-cyan-500 via-pink-500 to-indigo-800 p-1 mx-8 lg:mx-24 xl:mx-72 2xl:w-1/3">
					<h1
						className={
							isDarkmode
								? "rounded-t-2xl justify-items-center font-medium text-xl bg-gray-900 pb-4 pt-2 px-4 text-white md:text-2xl"
								: "rounded-t-2xl justify-items-center font-medium text-xl bg-white pb-4 pt-2 px-4 text-black md:text-2xl"
						}
					>
						Concepteur & Developpeur FullStack
					</h1>
					<p
						className={
							isDarkmode
								? "text-justify rounded-b-2xl text-normal font-normal bg-gray-900 text-white pb-2 px-4 md:text-xl"
								: "text-justify rounded-b-2xl text-normal font-normal bg-white text-black pb-2 px-4 md:text-xl"
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
		</>
	);
}

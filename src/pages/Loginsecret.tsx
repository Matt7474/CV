import { useState } from "react";
import useDarkMode from "../store/darkmode";
import { useNavigate } from "react-router-dom";

interface LoginSecretProps {
	setIsAuthenticated: (auth: boolean) => void; // Le type de setIsAuthenticated
}

export default function LoginSecret({ setIsAuthenticated }: LoginSecretProps) {
	const { isDarkmode } = useDarkMode();
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = () => {
		if (
			user === import.meta.env.VITE_USER &&
			password === import.meta.env.VITE_PASSWORD
		) {
			console.log("Ah ! Bah tu est passé finalement 🙃");
			setIsAuthenticated(true);
			navigate("/addproject");
		} else {
			alert(
				"Protego ! Votre sort de hacking rebondit et vous frappe en retour. 🪄 Dobby ne veut pas que vous entriez ici. Dobby bloque l’accès !",
			);
			console.log("Expelliarmus 🪄");
		}
	};

	return (
		<div
			className={
				isDarkmode
					? "text-white items-center pt-12 flex flex-col sm:pt-30 3xl:pt-50 4xl:pt-90"
					: "text-black items-center pt-12 flex flex-col sm:pt-30 3xl:pt-50 4xl:pt-90"
			}
		>
			<p className="font-semibold text-xl">
				You shall not pass! <span className="text-3xl">🧙‍♂️</span>
			</p>

			<div
				className={
					isDarkmode
						? "flex justify-center mt-8 p-0.5 bg-cyan-400 shadow-emerald-500/20 rounded-xl"
						: "flex justify-center mt-8 p-0.5 bg-gradient-to-r from-cyan-500 via-pink-500 to-indigo-800 shadow-emerald-500/20 rounded-xl"
				}
			>
				<form
					action={handleSubmit}
					className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg w-80"
				>
					<label
						htmlFor="user"
						className="font-semibold text-gray-700 self-start"
					>
						Nom d'utilisateur
					</label>
					<input
						type="text"
						id="user"
						className="bg-gray-200 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
						aria-label="Nom d'utilisateur"
						value={user}
						onChange={(e) => setUser(e.target.value)}
					/>

					<label
						htmlFor="password"
						className="font-semibold text-gray-700 self-start"
					>
						Mot de passe
					</label>
					<input
						type="password"
						id="password"
						className="bg-gray-200 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
						aria-label="Mot de passe"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						className={
							isDarkmode
								? "mt-4 bg-emerald-500 text-white font-semibold p-2 rounded-lg hover:bg-emerald-600 transition duration-200"
								: "mt-4 bg-pink-500 text-white font-semibold p-2 rounded-lg hover:bg-pink-800 transition duration-200"
						}
					>
						Se connecter
					</button>
				</form>
			</div>
		</div>
	);
}

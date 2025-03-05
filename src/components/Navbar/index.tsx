import { BriefcaseBusiness, House } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../../store/darkmode";

export default function Navbar() {
	const location = useLocation();
	const { isDarkmode, toggleDarkmode } = useDarkMode();
	return (
		<div className="flex justify-between items-center mx-8 lg:mx-24 xl:mx-60 2xl:mx-80">
			<div>
				<a
					href="mailto:dimier.matt@gmail.com"
					className="text-2xl font-medium py-4 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-amber-500 hover:via-pink-700 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300 flex flex-col"
				>
					DIMIER Matthieu
				</a>
			</div>

			<div className="flex justify-between gap-4">
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
					to={"/projects"}
					className={`group ${location.pathname === "/projects" ? "text-cyan-300" : ""} `}
				>
					<div className="flex flex-col items-center">
						<BriefcaseBusiness
							className={`${
								location.pathname === "/projects"
									? "text-cyan-300"
									: "text-white"
							} group-hover:text-cyan-300`}
						/>
						<p
							className={`${
								location.pathname === "/projects"
									? "text-cyan-300"
									: "text-white"
							} group-hover:text-cyan-300`}
						>
							Portfolio
						</p>
					</div>
				</Link>

				<button
					type="button"
					className="text-white hover:cursor-pointer hover:text-cyan-300 flex flex-col"
					onClick={toggleDarkmode}
				>
					<span>{isDarkmode ? "☀️" : "🌙"}</span>
					<span>{isDarkmode ? "Fun" : "Sombre"}</span>
				</button>
			</div>
		</div>
	);
}

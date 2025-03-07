import { Link } from "react-router-dom";
import { portfolio } from "../data/portfolio";
import useDarkMode from "../store/darkmode";
import dayjs from "dayjs";

export default function Portfolio() {
	const { isDarkmode } = useDarkMode();

	return (
		<div className="pt-20 gap-8 grid justify-center md:grid-cols-2 md:mx-10 lg:grid-cols-3 xl:justify-self-center 2xl:grid-cols-4 3xl:pt-40 4xl:grid-cols-5">
			{portfolio
				.slice()
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
								src={`${project.image}?t=${new Date().getTime()}`}
								alt={`image-projet-${project.title}`}
							/>
							<h2 className="text-2xl font-bold my-4">{project.title}</h2>
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
		</div>
	);
}

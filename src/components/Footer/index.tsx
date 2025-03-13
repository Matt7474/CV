import useDarkMode from "../../store/darkmode";

export default function Footer() {
	const { isDarkmode } = useDarkMode();
	return (
		<div className=" pt-12 pb-4 mt-4 flex flex-col items-center lg:pt-20">
			<p
				className={
					isDarkmode ? "text-white font-medium" : "text-black font-medium "
				}
			>
				Créé avec passion par Dimier Matthieu
			</p>
			<p
				className={
					isDarkmode ? "text-white font-medium" : "text-black font-medium "
				}
			>
				www.matt-dev.fr - 2025
			</p>
		</div>
	);
}

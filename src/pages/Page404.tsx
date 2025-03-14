import useDarkMode from "../store/darkmode";

export default function Page404() {
	const { isDarkmode } = useDarkMode();
	return (
		<div className="flex justify-center mt-15 md:mt-20 xl:mt-30 3xl:mt-70">
			<img
				src={isDarkmode ? "/404.svg" : "/404pink.svg"}
				alt="image-404"
				className="flex max-w-200 md:max-w-120 lg:max-w-110 2xl:max-w-90 3xl:max-w-110 4xl:max-w-150"
			/>
		</div>
	);
}

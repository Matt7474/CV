import { create } from "zustand";

interface DarkModeState {
	isDarkmode: boolean;
	toggleDarkmode: () => void;
}

const useDarkMode = create<DarkModeState>((set) => ({
	isDarkmode: JSON.parse(localStorage.getItem("darkmode") || "true"),
	toggleDarkmode: () =>
		set((state) => {
			const newMode = !state.isDarkmode;
			localStorage.setItem("darkmode", JSON.stringify(newMode));
			return { isDarkmode: newMode };
		}),
}));

export default useDarkMode;

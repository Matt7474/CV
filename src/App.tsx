import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import useDarkMode from "./store/darkmode";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";

function App() {
	const { isDarkmode } = useDarkMode();
	return (
		<div
			className={
				isDarkmode
					? "min-h-screen flex flex-col bg-gray-900"
					: "min-h-screen flex flex-col bg-gradient-to-t from-amber-500 via-pink-700 to-indigo-900"
			}
		>
			<BrowserRouter>
				<Navbar />
				<div className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/project/:slug" element={<Project />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

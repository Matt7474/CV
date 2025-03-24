import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import useDarkMode from "./store/darkmode";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";

import { useState } from "react";
import AddProject from "./pages/AddProject";
import LoginSecret from "./pages/Loginsecret";
import AddProjectDetails from "./pages/AddProjectDetails";
import MentionsLegales from "./pages/MentionsLegales";
import Page404 from "./pages/Page404";

function App() {
	const { isDarkmode } = useDarkMode();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
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
						<Route path="/mentionslegales" element={<MentionsLegales />} />
						<Route
							path="/loginsecret"
							element={<LoginSecret setIsAuthenticated={setIsAuthenticated} />}
						/>
						<Route
							path="/addproject"
							element={
								isAuthenticated ? (
									<AddProject />
								) : (
									<LoginSecret setIsAuthenticated={setIsAuthenticated} />
								)
							}
						/>
						<Route
							path="/addprojectdetails/:slug"
							element={
								isAuthenticated ? (
									<AddProjectDetails />
								) : (
									<LoginSecret setIsAuthenticated={setIsAuthenticated} />
								)
							}
						/>
						<Route path="*" element={<Page404 />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import * as Sentry from "@sentry/react";

Sentry.init({
	dsn: "https://3234c07e5f3d36ee3f0100362b1609ef@o4509033134817280.ingest.de.sentry.io/4509033136914512",
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

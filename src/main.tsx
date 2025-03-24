import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import * as Sentry from "@sentry/react";
import { Helmet } from "react-helmet";

Sentry.init({
	dsn: "https://3234c07e5f3d36ee3f0100362b1609ef@o4509033134817280.ingest.de.sentry.io/4509033136914512",
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Helmet>
			<meta
				httpEquiv="Content-Security-Policy"
				content="
            default-src 'self'; 
            script-src 'self' 'unsafe-inline' https://apis.google.com; 
            style-src 'self' 'unsafe-inline'; 
            img-src 'self' https://apicv.matt-dev.fr; 
            connect-src 'self' https://apicv.matt-dev.fr; 
            font-src 'self'; 
            object-src 'none'; 
            frame-ancestors 'none'; 
            base-uri 'self'; 
            form-action 'self';
          "
			/>
		</Helmet>
		<App />
	</StrictMode>,
);

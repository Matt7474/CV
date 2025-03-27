import { useEffect, useState } from "react";

const useCsrfToken = () => {
	const [csrfToken, setCsrfToken] = useState<string | null>(null);

	useEffect(() => {
		fetch("https://apicv.matt-dev.fr/api/csrf-token", {
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => setCsrfToken(data.csrfToken))
			.catch((err) => console.error("Erreur CSRF :", err));
	}, []);

	return csrfToken;
};

export default useCsrfToken;

import useDarkMode from "../store/darkmode";

export default function MentionsLegales() {
	const { isDarkmode } = useDarkMode();

	return (
		<div
			className={
				isDarkmode
					? "text-white place-self-center mt-20 px-8 lg:mx-50 xl:mx-60 2xl:mx-90 3xl:mx-110 3xl:pt-20 4xl:mx-170 4xl:mt-40"
					: "text-black place-self-center mt-20 px-8 lg:mx-50 xl:mx-60 2xl:mx-90 3xl:mx-110 3xl:pt-20 4xl:mx-170 4xl:mt-40"
			}
		>
			<h1 className="text-xl font-bold">Mentions légales</h1>
			<h2 className="text-lg font-semibold mb-2 mt-6">Éditeur du site :</h2>
			<p>Nom : DIMIER</p>
			<p>Adresse : Matthieu</p>
			<p>
				Email :{" "}
				<a href="mailto:dimier.matt@gmail.com" className="underline">
					dimier.matt@gmail.com
				</a>
			</p>
			<p>
				Numéro de téléphone :{" "}
				<a href="tel:+33631548949" className="underline">
					06.31.54.89.49
				</a>
			</p>
			<h2 className="text-lg font-semibold mb-2 mt-6">
				Responsable de la publication :
			</h2>

			<p>
				Le responsable de la publication du site est DIMIER Matthieu, en qualité
				de freelance.
			</p>
			<h2 className="text-lg font-semibold mb-2 mt-6">Hébergeur du site :</h2>
			<p>
				L'hébergement du site est assuré par{" "}
				<a
					href="https://www.o2switch.fr/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					o2switch
				</a>
			</p>
			<p>Adresse : o2switch, Chemin des Pardiaux - 63000 Clermont-Ferrand</p>
			<p>
				Numéro de téléphone : <a href="tel:+33444446040">04.44.44.60.40</a>
			</p>

			<h2 className="text-lg font-semibold mb-2 mt-6">
				Propriété intellectuelle :
			</h2>
			<p>
				Tous les éléments du site https://cv.matt-dev.fr (textes, images, logos,
				vidéos, etc.) sont protégés par le droit d'auteur et sont la propriété
				exclusive de DIMIER Matthieu ou de ses partenaires. Toute reproduction
				ou représentation, totale ou partielle, de ces éléments sans
				autorisation préalable est interdite.
			</p>
			<h2 className="text-lg font-semibold mb-2 mt-6">Cookies :</h2>
			<p>Ce site n'utilise pas de cookies. 🍪</p>
			<h2 className="text-lg font-semibold mb-2 mt-6">
				Limitation de responsabilité :
			</h2>
			<p>
				Le site https://cv.matt-dev.fr met tout en œuvre pour offrir des
				informations précises et actualisées. Cependant, nous ne pouvons
				garantir l'exactitude, l'exhaustivité, ni l'actualisation des
				informations disponibles sur le site. En conséquence, la responsabilité
				de l'éditeur ne saurait être engagée pour toute erreur, omission ou
				imprécision concernant les informations présentes sur ce site.
			</p>
			<h2 className="text-lg font-semibold mb-2 mt-6">Droit applicable :</h2>
			<p>
				Les présentes mentions légales sont soumises au droit français. En cas
				de litige, les tribunaux français seront compétents.
			</p>
		</div>
	);
}

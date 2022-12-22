
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import "./_pages.scss";

export function AboutPage() {
	return (
		<>
			<Header />
			<Banner />
			<div className="container-margin">
				<Dropdown key="1" title="Fiabilité" texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
				<Dropdown key="2" title="Respect" texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
				<Dropdown key="3" title="Service" texte="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
				<Dropdown key="4" title="Sécurité" texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
			</div>
			<Footer />
		</>
	)

} 

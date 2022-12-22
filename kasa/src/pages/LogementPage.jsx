import Header from "../components/Header/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import "./_pages.scss";
import getData from "../utils/getData";
import { useEffect, useState } from "react";





export function LogementPage() {

	
	let data = new getData("id")
	let inputID = data.getParameterValue() 
	
	const [pictures, setPictures] = useState(0); 

	
	useEffect(() => {
		data = data.byParameterURL();
		setPictures(data.getPictures());
	}, [inputID])

	return (
		<>
			<Header />
			<Carrousel pictures={pictures} />
			<div className="container-dropdown">
				<Dropdown key="1" title="Fiabilité" texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
				<Dropdown key="2" title="Respect" texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
			</div>
			<Footer />
		</>

	);
}
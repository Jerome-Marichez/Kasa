import Header from "../components/Header/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import "./_pages.scss";
import getData from "../utils/getData";
import { useEffect, useState } from "react";





export function LogementPage() {


	let data = new getData("id")
	let parameterValue = data.getParameterValue()

	const [pictures, setPictures] = useState(0);
	const [description, setDescription] = useState(0);
	const [equipments, setEquipments] = useState(0);


	useEffect(() => {

		data = data.byParameterURL();

		/** Preload Pictures (force caching) */
		let picturesData = data.getPictures();
		picturesData.forEach((picture) => {
			new Image().src = picture
		});
		/** End Preload Pictures */

		setPictures(data.getPictures());
		setDescription(data.getDescription());
		setEquipments(data.getEquipments());

	}, [parameterValue])


	return (
		<>
			<Header />
			<Carrousel pictures={pictures} />
			<div className="container-dropdown">
				<Dropdown key="1" title="Description" texte={description} />
				<Dropdown key="2" title="Équipements" texte={equipments} />
			</div>

			<Footer />
		</>

	);
}
import Header from "../components/Header/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import Tag from "../components/Tag/Tag";
import "./_pages.scss";
import getData from "../utils/getData";
import { useEffect, useState } from "react";





export function LogementPage() {


	let data = new getData("id")
	let parameterValue = data.getParameterValue()

	const [pictures, setPictures] = useState(0);
	const [description, setDescription] = useState(0);
	const [equipments, setEquipments] = useState(0);


	const title = "test";


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

			<div className="container-tag">
				<Tag title="title" />
				<Tag title="d" />
				<Tag title="b" />
			</div>
			
			<div className="container-dropdown">
				<Dropdown key="1" title="Description" texte={description} />
				<Dropdown key="2" title="Équipements" texte={equipments} />
			</div>

			<Footer />
		</>

	);
}
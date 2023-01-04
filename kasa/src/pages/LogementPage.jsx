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
	const [tags, setTags] = useState([]);


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
		setTags(data.getTags());

	}, [parameterValue])


	return (
		<>
			<Header />
			<Carrousel pictures={pictures} />


			<div className="container-logement">
				<div className="bloc-1">
					<h1 className="title-logement">Cozy loft on the Canal Saint-Martin</h1>
					<h2 className="title-localisation">Paris, Ile-de-France</h2>

					<div className="container-tag">
						{tags.map(tag => <Tag key={tag} title={tag} />)}
					</div>
				</div>


				<div className="bloc-2">
					<div className="author"></div>
					<div className="star"></div>
				</div>
			</div>

			<div className="container-dropdown">
				<Dropdown key="1" title="Description" texte={description} />
				<Dropdown key="2" title="Équipements" texte={equipments} />
			</div>

			<Footer />
		</>

	);
}
import Header from "../components/Header/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import Stars from "../components/Stars/Stars";
import Tag from "../components/Tag/Tag";
import Author from "../components/Author/Author";
import "./_pages.scss";
import getData from "../utils/getData";
import { useEffect, useState } from "react";





export function LogementPage() {

	let data = new getData("id");
	let parameterValue = data.getParameterValue();

	const [pictures, setPictures] = useState(0);
	const [texte, setTexte] = useState(["Titre"], ["Localisation"]);


	const [tags, setTags] = useState([]);
	const [rate, setRate] = useState(0);
	const [author, setAuthor] = useState(["Title"], ["Picture"]);

	const [dropdown, setDropdown] = useState(["Description"], ["Equipments"]);


	useEffect(() => {


		data = data.byParameterURL();

		/** Preload Pictures (force caching) */
		let picturesData = data.getPictures();
		picturesData.forEach((picture) => {
			new Image().src = picture
		});
		/** End Preload Pictures */

		setPictures(data.getPictures());
		setTexte([data.getTitle(), data.getLocation()]);

		console.log(data.getAuthorTitle());

		setAuthor([data.getAuthorTitle(), data.getAuthorImg()]);
		setTags(data.getTags());
		setRate(data.getRate());

		setDropdown([data.getDescription(), data.getEquipments()]);


	}, [parameterValue])


	return (
		<>
			<Header />
			<Carrousel pictures={pictures} />


			<div className="container-logement">
				<div className="bloc-1">
					<h1 className="title-logement">{texte[0]}</h1>
					<h2 className="title-localisation">{texte[1]}</h2>

					<div className="container-tag">
						{tags.map(tag => <Tag key={tag} title={tag} />)}
					</div>
				</div>


				<div className="bloc-2">
					<Stars rate={rate} maxRate="5" />
					<Author title={author[0]} picture={author[1]} />
				</div>
			</div>

			<div className="container-dropdown">
				<Dropdown key="1" title="Description" texte={dropdown[0]} />
				<Dropdown key="2" title="Équipements" texte={dropdown[1]} />
			</div>

			<Footer />
		</>

	);
}
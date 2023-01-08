import Header from "../components/Header/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import Stars from "../components/Stars/Stars";
import Tag from "../components/Tag/Tag";
import Author from "../components/Author/Author";
import "./_pages.scss";
import getData from "../utils/getData.js";
import { useEffect, useRef, useState } from "react";





export function LogementPage() {
	/* Scroll to the top to avoid unwanted effect*/
	window.scrollTo(0, 0)

	/* load data though ?id= */ 
	let data = new getData("id");
	data = data.byParameterURL();

	let texte = [data.getTitle(), data.getLocation()];
	let author = [data.getAuthorTitle(), data.getAuthorImg()];
	let tags = data.getTags();
	let rate = data.getRate();
	let dropdown = [data.getDescription(), data.getEquipments()];
	let pictures = data.getPictures();

	/** Preload Pictures (force caching) */
	pictures.forEach((picture) => {
		new Image().src = picture
	});
	/** End Preload Pictures */

	
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
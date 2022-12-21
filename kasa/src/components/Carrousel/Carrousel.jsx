import "./Carrousel.scss";
import React, { useState, useEffect } from "react";
import getDataById from "../../utils/getData.js";

export default function Carrousel({ data }) {


	const pictures = getDataById(data).pictures; // Return all pictures Data from specific ID



	const [index, setIndex] = useState(0);

	function changeSlide(index) {
		if (index < pictures.length && index >= 0) {
			setIndex(index);
		}
	}


	return (

		<div className="carrousel" style={{ backgroundImage: `url(${pictures[index]})` }}>

			<div className="container-select">
				<div className="previous" onClick={() => changeSlide(index - 1)}>Previous</div>
				<div className="next" onClick={() => changeSlide(index + 1)}> Next</div>
			</div>
			<p>{index + 1 /*Since a array start with [0] we show the index +1 */}/{pictures.length}</p>
		</div >
	);
}
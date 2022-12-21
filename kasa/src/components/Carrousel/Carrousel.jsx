import "./Carrousel.scss";
import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";


export default function Carrousel({ data }) {





	// TODO: WROTE A FUNCTION IN UTILS 
	// Data is the .JSON loaded as a Array of Object 

	// Get the ID parameter ?id= 
	const [searchParams] = useSearchParams()
	const id = searchParams.get("id")
	// End get the ID parameter


	const getDataById = data.find((data) => {
		if (data.id == id) {
			return data;
		}
	})

	const pictures = getDataById.pictures;
	// WROTE A FUNCTION IN UTILS 



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
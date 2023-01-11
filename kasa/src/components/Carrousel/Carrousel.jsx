import "./Carrousel.scss";
import React, { useState } from "react";

export default function Carrousel({ pictures }) {


	const [index, setIndex] = useState(0);
	const handlePrevious = () => setIndex(Math.max(index - 1, 0));
	const handleNext = () => setIndex(Math.min(index + 1, pictures.length - 1));

	return (

		<div className="carrousel" style={{ backgroundImage: `url(${pictures[index]})` }}>

			<div className="container-select">
				<div className={index !== 0 ? "previous show" : "previous hide"}
					onClick={handlePrevious}>Previous
				</div>


				<div className={index + 1 !== pictures.length ? "next show" : "next hide"}
					onClick={handleNext}> Next
				</div>
			</div>
			<p>{index + 1}/{pictures.length /*Since a array start with [0] we show the index +1 */}</p>
		</div >
	);
}
import "./Carrousel.scss";
import React, { useState } from "react";

export default function Carrousel({ pictures }) {


	const [index, setIndex] = useState(0);
	const maxPicture = pictures.length - 1;


	const handlePrevious = () => {
		index == 0 ? setIndex(maxPicture) : setIndex(index - 1)
	};
	const handleNext = () => {
		index == maxPicture ? setIndex(0) : setIndex(index + 1)
	};

	return (

		<div className="carrousel" style={{ backgroundImage: `url(${pictures[index]})` }}>

			{pictures.length !== 1 ?
				<div className="container-select">
					<div className="previous"
						onClick={handlePrevious}>Previous
					</div>
					<div className="next"
						onClick={handleNext}> Next
					</div>
					<p>{index + 1}/{pictures.length}</p>
				</div>
				: ""
			}




		</div >
	);
}
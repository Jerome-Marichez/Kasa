import React, { useState } from 'react';
import "./Dropdown.scss";

export default function Dropdown({ title, texte }) {

	const [isOpen, setOpen] = useState(0);

	let isMultiTexte = false;
	if (typeof texte == "object") { isMultiTexte = true; }


	return (
		<div className="dropdown">
			<div className="header">
				<div className="title">{title}</div>
				<div className={`arrow ${isOpen ? `rotate` : ``}`} onClick={() => { setOpen(!isOpen); }}></div>
			</div>


			<div className={`texte ${isOpen ? `show` : ``}`}>
				{isMultiTexte ? texte.map(data => <li key={data.toString()}>{data}</li>) : texte}
			</div>
		</div >
	)
}
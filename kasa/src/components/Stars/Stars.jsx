import "./Stars.scss";
import React, {useState } from 'react';


export default function Stars({ rate, maxRate }) {


	
	function buildStarsArray() {
		let starsArray = [];
		const starsEmpty = maxRate - rate;

		/* Build Array depend of rate **/
		for (let index = 0; index < rate; index++) {
			starsArray.push("star red");
		}

		for (let index = 0; index < starsEmpty; index++) {
			starsArray.push("star");
		}

		return starsArray;
	}
	
	const starsArray = buildStarsArray(); 
	
	
	return (
		<div className="stars">
			{starsArray.map((star,index) => <div key={index} className={star}></div>)}
		</div>
	)
}
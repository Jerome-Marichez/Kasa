import "./Thumb.scss";
import { Link } from "react-router-dom";

export default function Thumb({ id, title, img }) {

	return (

		<Link to={`/logement/?id=${id}`}>
			<div className="thumb" style={{ backgroundImage: `url(${img})` }} onClick={() => { console.log("clicked") }}>
				<h3>{title}</h3>
			</div>
		</Link>

	);
}
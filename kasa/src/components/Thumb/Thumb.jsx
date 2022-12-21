import "./Thumb.scss";


export default function Thumb({ id, title, img }) {

	return (
		<div className="thumb" style={{ backgroundImage: `url(${img})` }} onClick={() => { console.log("clicked") }}>
			<h3>{title}</h3>
		</div>
	);
}
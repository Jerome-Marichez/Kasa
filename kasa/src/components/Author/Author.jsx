import "./Author.scss";

export default function Author({ title, picture }) {

	
	return (
		<div className="author">
			<h3>{title}</h3>
			<div className="avatar" style={{ backgroundImage: `url(${picture})` }}>
				
			</div>
		</div>
	)
}
import "./Banner.scss";
import { useLocation } from 'react-router-dom';

export default function Banner({ title }) {
	//We get propriety pathname to get URL after "/" from useLocation
	let { pathname } = useLocation();
	let classPicture = "bg-home"; // By default show background bg-home

	pathname.includes("about") ? classPicture = "bg-about" : classPicture = "bg-home";
	
	return (
		<div className={`banner ${classPicture}`}>
			<h1>{title}</h1>
		</div>
	);
}
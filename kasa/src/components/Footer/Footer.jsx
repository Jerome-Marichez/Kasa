import "./Footer.scss";
import logo from './Logo.svg';

export default function Footer() {
	return (
		<footer className="kasa-footer">
			<img src={logo} alt="logo"></img>
			<p>© 2020 Kasa. All rights reserved</p>


		</footer>
	);
}
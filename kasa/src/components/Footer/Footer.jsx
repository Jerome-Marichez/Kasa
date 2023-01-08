import "./Footer.scss";
import logo from './Logo.svg';
import DarkMode from 'toggle-dark-mode-tal/dist/DarkMode';

export default function Footer() {
	return (
		<footer className="footer">
			<img src={logo} alt="logo"></img>
			<DarkMode style={{padding: "30"}}/>
			<p>© 2020 Kasa. All rights reserved</p>
			
			
		</footer>
	);
}
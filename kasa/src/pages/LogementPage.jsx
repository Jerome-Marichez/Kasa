
import Header from "../components/Header/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import getData from "../utils/getData";
import "./_pages.scss";


const data = new getData().byParameterURL("id")
const pictures = data.getPictures();

export const LogementPage = (
	<>
		<Header />
		<Carrousel pictures={pictures} />
		<div className="container-dropdown">
			<Dropdown key="1" title="Fiabilité" texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
			<Dropdown key="2" title="Respect" texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
		</div>
		<Footer />
	</>

)


import Header from "../components/Header/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import data from "../data/Logements.json";
import Footer from "../components/Footer/Footer";
import "./_pages.scss";

export const LogementPage = (
	<>
		<Header />
		<Carrousel data={data} />
		<div className="container-margin">

		</div>
		<Footer />
	</>

)

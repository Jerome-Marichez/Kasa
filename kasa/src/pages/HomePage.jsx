
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Thumb from "../components/Thumb/Thumb";
import data from "../data/Logements.json";
import "./_pages.scss";


export const HomePage = (
	<>
		<Header />
		<Banner title="Chez vous, partout et ailleurs" />
		<div className="container-thumbs">

			{data.map(data => (<Thumb id={data.id} title={data.title} img={data.cover} />))}

		</div>

		<Footer />
	</>
)


import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";


import "./_pages.scss";

export const HomePage = (
	<>
		<Header />
		<div className="margin-home-top"></div>
		<Banner title="Chez vous, partout et ailleurs" />
		<div className="margin-home-bottom"></div>

		<div className="container-thumbs">

		</div>

		<div className="margin-before-footer"></div>


		<Footer />
	</>
)

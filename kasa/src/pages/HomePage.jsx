
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";


import "./_pages.scss";

export const HomePage = (
	<>
		<Header />
		<Banner title="Chez vous, partout et ailleurs" />
		<div className="container-thumbs">
		</div>
		<Footer />
	</>
)


import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Thumb from "../components/Thumb/Thumb";
import getData from "../utils/getData";
import "./_pages.scss";



export function HomePage() {
	const data = new getData().all();
	return (
		<>
			<Header />
			<Banner title="Chez vous, partout et ailleurs" />
			<div className="container-thumbs">
				{data.map(data => <Thumb key={data.id.toString()} id={data.id} title={data.title} img={data.cover} />)}
			</div>

			<Footer />
		</>
	)
} 

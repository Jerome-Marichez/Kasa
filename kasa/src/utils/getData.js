import data from "../data/Logements.json";
import { useSearchParams } from "react-router-dom";

export default function getDataById(data) { // Data is the .JSON file who contains all data
	// get the id parameter ?=id
	const [searchParams] = useSearchParams()
	const id = searchParams.get("id")
	// End get the ID parameter


	const getDataById = data.find((data) => {
		if (data.id == id) {
			return data;
		}
	})

	return getDataById; // return a specific object depend of ?id=
}
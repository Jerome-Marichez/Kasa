
import data from "../data/Logements.json";

export default class getData {

	constructor(parameter) {
		this.data = data; // the Data which is a .JSON who contain Data
		this.returnData = null;

		// You need to fill parameter in constructor to not get undefined
		// Not need for all() method otherwise u must fill it 
		if (parameter) {
			const urlString = (window.location.href).toLowerCase();
			const url = new URL(urlString);
			this.parameter = parameter;  // The parameter in the url like "id" if url is like "/?id=" 
			this.parameterValue = url.searchParams.get(parameter); // The value of the paremeter like ok in "/?id=ok"
		}
	}

	all() {
		return this.data;
	}

	byParameterURL() {
		const getDataById = this.data.find((data) => {
			if (data[this.parameter] == this.parameterValue) {
				return data;
			}
		})

		this.returnData = getDataById;
		return this;
	}

	getParameter() {
		return this.parameter;
	}

	getParameterValue() {
		return this.parameterValue;
	}
	
	getPictures() {
		if (this.returnData) { return this.returnData.pictures; }
	}


}




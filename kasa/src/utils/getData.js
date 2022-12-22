
import data from "../data/Logements.json";

export default class getData {

	constructor() {
		this.data = data; // the Data which is a .JSON who contain Data
		this.returnData = null;

		// You need to use ByParemeterURL Method for get not null for them 
		this.parameter = null;  // The parameter in the url like "id" if url is like "/?id=" 
		this.parameterValue = null // The value of the paremeter like ok in "/?id=ok"
	}

	all() {
		return this.data;
	}

	getParameter() {
		return this.parameter;
	}

	getParameterValue() {
		return this.parameterValue;
	}


	byParameterURL(parameter) {
		const urlString = (window.location.href).toLowerCase();
		const url = new URL(urlString);
		this.parameter = parameter;
		this.parameterValue = url.searchParams.get(parameter);

		const getDataById = this.data.find((data) => {
			if (data[this.parameter] == this.parameterValue) {
				return data;
			}
		})

		this.returnData = getDataById;
		return this;

	}

	getPictures() {
		if (this.returnData) { return this.returnData.pictures; }
	}


}




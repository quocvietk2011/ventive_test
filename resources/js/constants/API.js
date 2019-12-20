import axios from 'axios'
const API_URL = ' http://localhost:8000/api/'

class API {
	static getListFiles() {
		return axios.get(
			API_URL + 'files'
		).then(response => {
			return response.data;
		}).catch(error => {
			console.log(error);
		}).finally(() => {
		});
	}

	static uploadFile(formData) {
		return axios({
			method: 'post',
			url: API_URL + 'upload',
			data: formData
		}).then(function (response) {
			return response.data
		}).catch(function (error) {
			console.log(error);
		});
	}

	static getFile(id) {
		return axios.get(
			API_URL + 'files/' + id,
		).then(response => {
			return response.data;
		}).catch(error => {
			console.log(error);
		}).finally(() => {
		});
	}
}

export default API;

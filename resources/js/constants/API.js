import axios from 'axios'
const API_URL = ' http://localhost:8000/api/'
import initialState from '../reducers/initialState';
const error = 0;
class API {
	static getListFiles() {
		return axios.get(
			API_URL + 'files'
		).then(response => {
			return {
				files: response.data,
				error: error
			};
		}).catch(error => {
			return {
				files: initialState.files,
				error: error
			}
		}).finally(() => {
		});
	}

	static uploadFile(formData) {
		return axios({
			method: 'post',
			url: API_URL + 'upload',
			data: formData
		}).then(function (response) {
			if (response.data.error == false) {
				return {
					file: response.data.file,
					error: error
				};
			} else {
				return {
					file: initialState.currentFile,
					error: error
				}
			}
		}).catch(function (error) {
			return {
				file: initialState.currentFile,
				error: error
			}
		});
	}

	static getFile(id) {
		return axios.get(
			API_URL + 'files/' + id,
		).then(response => {
			return {
				file: response.data,
				error: error
			};
		}).catch(error => {
			return {
				file: initialState.currentFile,
				error: error
			}
		}).finally(() => {
		});
	}
}

export default API;

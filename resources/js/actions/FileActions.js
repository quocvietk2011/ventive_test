import * as types from '../constants/ActionTypes';
import API from '../constants/API';

export function addFile(file) {
	return {
		type: types.ADD_FILE,
		file
	};
}

export function loadFileDetail(file) {
	return {
		type: types.VIEW_FILE,
		file
	};
}

export function loadFiles(files) {
	return {
		type: types.GET_LIST_FILE,
		files
	};
}

export function uploadFile(formData) {
	return function (dispatch) {
		return API.uploadFile(formData).then(data => {
			if (data.error == 0) {
				dispatch(addFile(data.file));
			} else {
				alert('Error posting data')
			}
		}).catch(error => {
			throw (error);
		});
	};
}

export function fetchAllFiles() {
	return function (dispatch) {
		return API.getListFiles().then(data => {
			if (data.error == 0) {
				dispatch(loadFiles(data.files));
			} else {
				alert('Error loading data')
			}
		}).catch(error => {
			throw (error);
		});
	};
}

export function viewFile(id) {
	return function (dispatch) {
		return API.getFile(id).then(data => {
			if (data.error == 0) {
				dispatch(loadFileDetail(data.file));
			} else {
				alert('Error loading data')
			}
		}).catch(error => {
			throw (error);
		});
	};
}

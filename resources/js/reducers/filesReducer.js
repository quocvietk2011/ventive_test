import { GET_LIST_FILE, ADD_FILE, VIEW_FILE } from '../constants/ActionTypes';
import initialState from './initialState';

export default function filesReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_FILE:
			return {
				...state,
				files: [action.file, ...state.files],
				currentFile: action.file
			}
		case VIEW_FILE:
			var currentFile = action.file
			return { ...state, currentFile }
		case GET_LIST_FILE:
			var files = action.files
			return { ...state, files }
		default:
			return state;
	}
}

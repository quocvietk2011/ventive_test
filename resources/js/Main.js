import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import TodoApp from './containers/UploadApp';
import { fetchAllFiles } from './actions/FileActions';
import './style.css';

const store = configureStore();
store.dispatch(fetchAllFiles());
const appRoot = (
	<Provider store={store}>
		<TodoApp />
	</Provider>
)

ReactDOM.render(appRoot, document.getElementById('app'))

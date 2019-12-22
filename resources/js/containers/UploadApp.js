import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideBar from '../components/SideBar';
import FileDetail from '../components/FileDetail';
import * as FileActions from '../actions/FileActions';
import { fetchAllFiles } from '../actions/FileActions';
class UploadApp extends Component {

	render() {
		const { files, currentFile } = this.props;
		return (
			<div className="wrapper">
				<SideBar />
				<FileDetail />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		files: state.filesReducer.files,
		currentFile: state.filesReducer.currentFile,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(FileActions, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadApp);

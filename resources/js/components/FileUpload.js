import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FileActions from '../actions/FileActions';

class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null
		}
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		const formData = new FormData();
		formData.append('file', e.target.files[0])
		this.props.actions.uploadFile(formData)
	}

	render() {
		return (
			<span className="upload">
				<i className="fa fa-upload"></i>
				<input type="file" name="file" id="file" onChange={this.onChange} />
			</span>
		)
	}
}
function mapStateToProps(state) {
	return {
		files: state.filesReducer.files,
		currentFile: state.filesReducer.currentFile
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(FileActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);

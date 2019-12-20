import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as FileActions from '../actions/FileActions';
import FileUpload from './FileUpload';
import { bindActionCreators } from 'redux';

class SideBar extends Component {

	constructor(props) {
		super(props);
		const { files, currentFile, actions } = this.props;
	}

	componentDidMount() {
		if (this.props.files.length > 0) {
			let file = this.props.files[0]
			actions.viewFile(file.id)
		}
	}

	render() {

		return (
			<div>
				<nav id="sidebar">
					<div className="sidebar-header">
						<h3>FILES
                        <FileUpload />
						</h3>
					</div>
					<ul className="list-unstyled components">
						{this.props.files.map(file =>
							<li className={file.id == this.props.currentFile.id ? 'active' : ''} key={file.id}   >
								<a onClick={
									() => this.props.actions.viewFile(file.id)}>
									<span>{file.title + ' ' + file.filename} </span>
									<small> {file.author}</small>
								</a>
							</li>
						)}
					</ul>
				</nav>
			</div >
		)

	}
}

SideBar.propTypes = {
	files: PropTypes.array.isRequired
};
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
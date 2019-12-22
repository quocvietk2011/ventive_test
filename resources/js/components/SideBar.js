import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as FileActions from '../actions/FileActions';
import FileUpload from './FileUpload';
import { bindActionCreators } from 'redux';

class SideBar extends Component {

	constructor(props) {
		super(props);
	}
	componentDidUpdate(prevProps) {
		if (prevProps.files.length !== this.props.files.length) {
			let file = this.props.files[0]
			this.props.actions.viewFile(file.id)
		}
	}

	render() {
		return (
			<div>
				<nav id="sidebar">
					<div className="sidebar-header">
						<h3>
							<span>FILES</span>
							<FileUpload />
						</h3>
					</div>
					<ul className="list-unstyled components">
						{this.props.files.map(file =>
							<li className={file.id == this.props.currentFile.id ? 'active' : ''} key={file.id}   >
								<a onClick={
									() => this.props.actions.viewFile(file.id)}>
									<span>{file.title} </span>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';

function DisplayContent(props) {
	const ext = props.file.extension
	switch (ext) {
		case 'txt':
		case 'doc':
		case 'docx':
			return <div>{props.file.content}</div>;

		case 'jpg':
		case 'jpeg':
		case 'png':
		case 'gif':
			return <img src={props.file.content} />
		case 'pdf':
			return <embed src={props.file.content} type="application/pdf" width="100%" height="1000px" />
		default:
			return <iframe id="myframe" src={props.file.content}></iframe>
	}
}
class FileDetail extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { currentFile } = this.props.currentFile
		return (
			<div id="content">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid title-page">
						<span>{currentFile.title}</span>
					</div>
				</nav>
				<div className="container content-page">
					<DisplayContent file={currentFile} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentFile: state.filesReducer
	};
}


export default connect(mapStateToProps)(FileDetail);
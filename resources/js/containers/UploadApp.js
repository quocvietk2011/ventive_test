import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideBar from '../components/SideBar';
import FileDetail from '../components/FileDetail';
import * as FileActions from '../actions/FileActions';
class UploadApp extends Component {
	render() {
		return (
			<div className="wrapper">
				<SideBar />
				<FileDetail />
			</div>
		);
	}
}

export default UploadApp

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './header/header.js'
import './appBody/screenStyle.css'
import Appbody from './appBody/appbody.js'


class Check extends Component {

	render(){
		return(
			<div className="mainBody">
				<Header/>
				<Appbody/>
			</div>
		);
	}
}

ReactDOM.render(<Check/>,document.getElementById('root'))
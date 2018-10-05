import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './header/header.js'
import './appBody/screenStyle.css'
import Appbody from './appBody/appbody.js'


class Check extends Component {

	changehandler(selected){
		console.log("ChangeHandler Called")
		this.setState({
			defaultT:this.state.detail[selected]
		},function(){
			console.log("calling in "+this.state.defaultT.name)
		})
		
	}
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
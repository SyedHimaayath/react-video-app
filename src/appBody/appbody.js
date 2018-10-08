import React, { Component } from 'react';
import Screen from './screen.js';
import SidePal from './sidePal.js'
import axios from 'axios';


class Appbody extends Component {
	constructor(props){
		super(props);
		const detail =[]
		let defaultT = {}
		this.state = {detail, defaultT}
		this.changeHandled = this.changeHandled.bind(this)
	}

	componentDidMount(){
		console.log("this is appbody's mount")
		axios.get('./src/data.json')
		.then(res => {
			const detail = res.data;
			this.setState({detail})
		})
	}

	changeHandled(data){
		//document.body.scrollTop = 0;
		//document.documentElement.scrollTop = 0;
		this.setState({
			defaultT : this.state.detail[data]
		})
	}

	render() {
		return (
			<div className="temp">
				<div className="container forBody">
					<div className="row">
						<Screen name={this.state.defaultT.name} url={this.state.defaultT.url} poster={this.state.defaultT.poster}/>
						<SidePal carry={this.state.detail} touched={this.changeHandled} ref="getIt" />
					</div>
				</div>
			</div>
		);
	}
}

export default Appbody;

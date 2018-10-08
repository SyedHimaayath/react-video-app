import React, { Component } from 'react';
import './screenStyle.css'
import Vsmall from './vsmall.js'

export class SidePal extends Component {

	constructor(props){
		super(props);
		this.clickhandler = this.clickhandler.bind(this)
	}

	clickhandler(data){
		this.props.touched(data)
	}

	render() {
		return (
			<div className=" col s12 m8 l4 sidePalBody">
				<div className="un">PLAYLIST</div>
				{ this.props.carry.map((t,index)=>(
					<Vsmall stouch={this.clickhandler} ref="getItSmall" key={index} index={index} name = {t.name} poster={t.poster} duration={t.duration} dir={t.dirBy}/>
				)) }
			</div>
		);
	}
}

export default SidePal;
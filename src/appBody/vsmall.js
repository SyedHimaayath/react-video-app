import React, { Component } from 'react';

export class Vsmall extends Component {
	constructor(props){
		super(props);
		this.handleThis = this.handleThis.bind(this)
	}

	handleThis(selected){
		this.props.stouch(selected)
	}

	render() {
		return (
			<div className="smallOne" onClick={()=>this.handleThis(this.props.index)}>
				<div className="clipArt col s6 m6 l6 ">
					<img src={this.props.poster} alt={this.props.name}/>
				</div>
				<div className="clipDetail col s6 m6 l6">
					<p className="vName">{this.props.name}</p>
					<p className="Utag">{this.props.dir}</p>
					<p className="duration hide-on-med-and-down">0.00 : {this.props.duration}</p>
				</div>
			</div>
		);
	}
}

export default Vsmall;

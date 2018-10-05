import React, { Component } from 'react';
import './screenStyle.css'

export class Vdetail extends Component {
	render() {
		return (
			<div className="inDetail">
				<div className="vName">
					<h5>{this.props.name}</h5>
				</div>
				<div className="vInter hide-on-small-only">
					<h6 className="push-left">Interactive stuff comes here</h6>
					<h6 className="push-right">also here (buttons probably)</h6>
				</div>
			</div>
		);
	}
}

export default Vdetail;
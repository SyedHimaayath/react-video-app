import React, { Component } from 'react';
import './screenStyle.css'
import Vdetail from './vDetail.js'
import { Player, BigPlayButton  } from 'video-react';

class Screen extends Component {
	constructor(props){
		super(props)
	}

	componentDidUpdate(){
		this.refs.player.load()
	}

	render() {
		return (
			<div className="col s12 m12 l8 screenBody">
				<div className="screenStyle">
					<Player ref="player" poster={this.props.poster} aspectRatio="16:9">
						<BigPlayButton position="center" />
				      <source src={this.props.url}/>
				    </Player>
				</div>
				{/*<iframe id="ytplayer" type="text/html"  width="100%" height="360"
				  src={this.props.url}
				  frameBorder="0">
				 </iframe>*/}
				<Vdetail name={this.props.name}/>
			</div>
		);
	}
}



export default Screen;
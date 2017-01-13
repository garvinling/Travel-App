import React, {Component} from 'react';

import './styles/LandingView.css';

class Duration extends Component{


//AIzaSyAz1jaHdmTG548Xb0QlnQZRsasapctMCcE



	render(){

		return(
				<div>
					<h1>How long do you want to go for?</h1>
					<input className="big-input" type="text" name="location" id="location_input"/>
				</div>
		);

	}



}


export default Duration;
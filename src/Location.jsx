import React, {Component} from 'react';

import './styles/LandingView.css';

class Location extends Component{

//AIzaSyAz1jaHdmTG548Xb0QlnQZRsasapctMCcE
	constructor(props){

		super(props);




	}




	render(){

		return(
				<div>
					<h1>Where do you want to go?</h1>
					<input className="big-input" type="text" name="location" id="location_input"/> 
					<br/>
				</div>
		);

	}



}


export default Location;
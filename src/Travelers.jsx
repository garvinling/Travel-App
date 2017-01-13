import React, {Component} from 'react';

import './styles/LandingView.css';

class Travelers extends Component{


//AIzaSyAz1jaHdmTG548Xb0QlnQZRsasapctMCcE



	render(){

		return(
				<div>
					<h1>How many people are going?</h1>
					<input className="big-input" type="number" name="travelers" id="travelers_input"/>
				</div>
		);

	}



}


export default Travelers;
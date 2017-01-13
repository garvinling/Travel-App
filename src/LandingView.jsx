import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './styles/LandingView.css';
import './styles/bootstrap.min.css';

// console.log(store.getState());
class LandingView extends Component{

	constructor(props){

		super(props);
		this.state = {
			step : 0,
			location:'',
			duration:'',
			travelers:''
		}
	
		 this.moveForward      = this.moveForward.bind(this);
		 this.saveState   	   = this.saveState.bind(this);
		 this.handleFormChange = this.handleFormChange.bind(this);
		 this.submitForm       = this.submitForm.bind(this);
	}
	

	handleFormChange(e){

		this.setState({[e.target.name]:e.target.value});

	}

	saveState(prop,val){

		// this.setState({[prop]:val});
		let currentStep = this.state.step;

		if(currentStep < 2){

			currentStep++;
			this.setState({step:currentStep});

		}
	}

	renderForm(){

		switch(this.state.step){

			case 0: 
				return (
					<div>
						<h1>Where do you want to go?</h1>
						<input className="big-input" type="text" name="location" id="location_input" value={this.state.location} onChange={this.handleFormChange}/> 
						<br/>
					</div>
				);
			case 1: 
				return (
					<div>
						<h1>How long do you want to go for?</h1>
						<input className="big-input" type="text" name="location" id="location_input"/>
					</div>
				);
			case 2: 
				return (
					<div>
						<h1>How many people are going?</h1>
						<input className="big-input" type="number" name="travelers" id="travelers_input"/>
					</div>
				);
			default:
				return <h1>Oops! You really should not be here.</h1>


		}



	}

	submitForm(e){

		e.preventDefault();
		browserHistory.push('/trip');

	}


	moveForward(){

	}


	render(){

		return( 
			<div className="landing-container">
				<img src="plane.gif" alt="plane"/>
				<form method="post" onSubmit={this.submitForm}>
				<div className="form-group">
					<h4>Where to?</h4>
					<input className="big-input" type="text"  name="location" id="location_input" value={this.state.location} onChange={this.handleFormChange}/> 
					<br/>
				</div>
				<div className="form-group">
					<h4>How many days?</h4>
					<input className="big-input"  type="text" name="duration" id="duration_input" value={this.state.duration} onChange={this.handleFormChange}/>
				</div>

				<button className="btn btn-primary form-button" onClick={this.saveState}>GO</button>
				</form>
			</div>
		);

	}



}


export default LandingView;
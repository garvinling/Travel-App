import React, { Component } from 'react';
import './styles/LandingView.css';
import './styles/bootstrap.min.css';
import TripView from './TripView';

// console.log(store.getState());
class LandingView extends Component{

	constructor(props){

		super(props);
		this.state = {
			step : 0,
			location:'',
			duration:'',
			travelers:'',

		}
	
		 this.saveState   	   = this.saveState.bind(this);
		 this.handleFormChange = this.handleFormChange.bind(this);
		 this.submitForm       = this.submitForm.bind(this);
		 this.renderForm       = this.renderForm.bind(this);
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

		if(this.state.step === 0){
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
					<button className="btn btn-primary form-button">GO</button>
					</form>
				</div>

			);

		}else if(this.state.step === 1){

			return(

				<TripView location={this.state.location} duration={this.state.duration}/>
			);

		}



	}

	submitForm(e){

		e.preventDefault();
		this.setState({step:1});
	}




	render(){

		return( 
			<div>
				{this.renderForm()}
			</div>
		);

	}



}


export default LandingView;
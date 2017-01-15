import React, {Component} from 'react';

import Navbar from './Navbar';
import Planner from './PlannerView';
import Map from './MapView';

import './styles/TripView.css';

class TripView extends Component{

	constructor(props){

		super(props);

		this.state ={

			duration: this.props.duration,
			location: this.props.location

		};
	}


	render(){

		return(

			<div className="row trip-container">
				<Navbar/>

				<div className="col-md-7 planner-container">
					<Planner location={this.state.location} duration={this.state.duration}/>
				</div>

				<div className="col-md-5 map-container">
					<Map/>
				</div>
	
			</div>


		);

	}

}

export default TripView;
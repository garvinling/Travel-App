import React, {Component} from 'react';


class TripView extends Component{

	constructor(props){

		super(props);

		this.state ={

		};

	}


	render(){

		return(

			<h1>Planning a trip to {this.props.location} for {this.props.duration} days</h1>

		);

	}

}

export default TripView;
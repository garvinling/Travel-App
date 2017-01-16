import React, {Component} from 'react';
import DayGrid from './DayGrid';

import './styles/PlannerView.css';

class PlannerView extends Component{



	render(){

		return(
				<div>
					<div className="row trip-status-container">
					Planning a trip to <span className="bold">{this.props.location}</span> for <span className="bold">{this.props.duration}</span> days ... 
					</div>

					<div className="row search-container">

						<input type="text" placeholder="Search for Activities" className="activity-search"/>
						<DayGrid days={this.props.duration}/>
					</div>

				</div>
		);

	}



}


export default PlannerView;
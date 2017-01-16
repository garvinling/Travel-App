import React, {Component} from 'react';

import './styles/day.css';


const colorChoices = [

	'orange',
	'gray',
	'aqua'


];


class DayGridItem extends Component{






	render(){

		let colorIndex = this.props.day % colorChoices.length;
		let itemClass = 'day-grid-item ' + colorChoices[colorIndex];


		return(
				<div className={itemClass} >
					<div className="day-grid-item-content">
						<h5 className="day-title">Day {this.props.day}</h5>
						<span className="day-subtitle">Shinjuku</span>
					</div>
					<div className="day-grid-item-footer">
					</div>
				</div>
		);

	}
}


export default DayGridItem;
import React, {Component} from 'react';

import './styles/day.css';
import Day from './DayGridItem';


const MAX_ITEMS_PER_ROW = 2;


class DayGrid extends Component{




	generateGrid(){

		let numRows = MAX_ITEMS_PER_ROW % this.props.days;
		let dayCount = 1;
		let rowCount = 0;
		let grid = [];


		while(rowCount <= numRows){


				if(dayCount+1 > this.props.days){

					grid.push(

							<div className="row grid-row">
								<div className="col-md-6">
									<Day day={dayCount}/>
								</div>

								<div className="col-md-6">
								</div>
							</div>

					);	

				} else {

					grid.push(

						<div className="row grid-row">
							<div className="col-md-6">
								<Day day={dayCount}/>
							</div>

							<div className="col-md-6">
								<Day day={dayCount+1}/>
							</div>
						</div>

					);
				}



				dayCount+=2;
				rowCount+=1;
			
		}


		return grid;

	}




	render(){

		return(
				<div className="day-container">

					{this.generateGrid()}

				</div>
		);

	}



}


export default DayGrid;
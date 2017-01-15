import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TripView from './TripView';
import './index.css';
// import {Router, Route, browserHistory } from 'react-router';

ReactDOM.render(

   <TripView location="Tokyo" duration="5"/>,
  document.getElementById('root')
);




/**


   <Router history={browserHistory}>
    <Route path="/" component={App} >

    </Route>

      <Route path="/trip" component={TripView} >
        <Route path="/trip/:tripID" component={TripView}/>
      </Route>

  </Router>

*/
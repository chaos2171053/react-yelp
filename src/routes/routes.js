import React, {Component,PropTypes} from 'react';
import {browserHistory, Router, Route,Redirect} from 'react-router';

class Home extends Component {
	constructor(props) {
		super(props);
	}	
	render() {
		return (<div>Hello chaos</div>);
	}
}

export const makeRoutes = () =>(
    <Router>
      <Route path="/" component={Home} />
      <Redirect from="*" to="/" />
    </Router>
)

export default makeRoutes

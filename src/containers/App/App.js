import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        routes: React.PropTypes.object.isRequired,
        history: React.PropTypes.object.isRequired
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    content() {
        return (<Router
            history={this.props.history}
            routes={this.props.routes}
        />)
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                {this.content()}
            </div>
        )
    }
}

export default App;
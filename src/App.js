import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './css/App.css';

import Home from './views/Home.js'
import Compose from './views/Compose.js'
import Overview from './views/Overview.js'

/*const example = () => {
    return <Home/>
}*/

class App extends Component {



    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/compose">Compose new Node</Link>
                        <Link to="/overview">Look at Overview</Link>
                        <Link to="/">Return to Home</Link>
                    </nav>
                    <Route exact path = "/" component = { Home } />
                    <Route path = "/compose" component = { Compose } />
                    <Route path = "/overview" component = { Overview } />
                </div>
            </Router>
        );
    }
}

export default App;

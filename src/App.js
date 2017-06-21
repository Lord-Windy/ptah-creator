import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './css/App.css';

import Home from './views/Home.js'

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
                    </nav>
                    <Route exact path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;

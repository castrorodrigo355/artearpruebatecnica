import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Principal from './components/Principal'
import Ejercicio1 from './components/Ejercicio1'
import Ejercicio2 from './components/Ejercicio2'
import './App.css';

class App extends React.Component {

  render() {
    return(
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-light bg-light">
              <ul className="list-group list-group-horizontal">
                <div className="link"><Link to="/">Principal</Link></div>
                <div className="link"><Link to="/ejercicio1">Ejercicio 1</Link></div>
                <div className="link"><Link to="/ejercicio2">Ejercicio 2</Link></div>
              </ul>
            </nav>      
            <Route exact path="/" component={Principal} />
            <Route path="/ejercicio1" component={Ejercicio1} />
            <Route path="/ejercicio2" component={Ejercicio2} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
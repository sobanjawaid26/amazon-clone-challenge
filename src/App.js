import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/checkout">
              <Header />
              <Checkout />
          </Route>
          <Route path="/">
              <Header />
              <Home />
          </Route>
          
        </Switch>
        
    </div>
    </Router>
    
  );
}

export default App;

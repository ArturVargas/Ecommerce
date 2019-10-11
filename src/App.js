import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Shared/Navbar';

// Pages
import Home from './Pages/Home';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

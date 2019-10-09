import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Components
import Navbar from './Components/Shared/Navbar';

// Pages
import Home from './Pages/Home';
import Shop from './Pages/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
    </div>
  );
}

export default App;
